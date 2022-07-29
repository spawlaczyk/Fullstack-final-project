import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import clsx from 'clsx';

import styles from './SingleProduct.module.scss';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation, Mousewheel } from 'swiper';

import { getProducyById } from '../../../redux/productsRedux';
import { useParams } from 'react-router-dom';

import Button from '../../common/Button/Button';

const SinglePage = ({ className }) => {
  const { id } = useParams();
  const product = useSelector(state => getProducyById(state, id));
  const photos = product.photos;
  const [qty, setQty] = useState(1);
  const [totalPrice, setTotalPrice] = useState(0);
  const minQty = 1;
  const maxQty = 10;

  const handleQty = (e) => {
    if (e > maxQty) {
      setQty(maxQty);
    } else if (e < minQty) {
      setQty(minQty);
    } else {
      setQty(e);
    }
  };

  const decrementQty = () => {
    if (qty > minQty) {
      setQty(qty - 1);
    }
  };

  const incrementQty = () => {
    if (qty < maxQty) {
      setQty(qty + 1);
    } else if (qty > maxQty) {
      setQty(maxQty);
    }
  };

  return (
    <div className={clsx(className, styles.singleProduct)}>
      <Swiper loop={true} slidesPerView={4} spaceBetween={30} navigation={true} mousewheel={true} modules={[Navigation, Mousewheel]} className={styles.swiper}>
        {photos.map(photo =>
          <SwiperSlide key={photo} className={styles.swiperSlide}>
            <img src={photo} alt={photo} />
          </SwiperSlide>
        )}
      </Swiper>
      <div className={styles.bottomPanel}>
        <div className={styles.leftSide}>
          <div className={styles.productDescription}>
            <h1>{product.name}</h1>
            <p>{product.description}</p>
            <p><span>price: </span>{product.minPrice}</p>
            <p><span>Material: </span>100% eco cotton</p>
            <p>This bag is made to order by hand so please allow up to three weeks for manufacture when setting expectations for delivery.</p>
            <p>Shipped from Poland.</p>
            <p><span>delivery fee: </span>10$</p>
          </div>
        </div>
        <div className={styles.rightSide}>
          <div className={styles.actionsWrapper}>
            <form>
              <input
                type='button'
                value='-'
                onClick={() => decrementQty()}
                className={styles.actionInput}
              />
              <input
                type='number'
                name='qty'
                value={qty}
                onChange={(event) => {
                  handleQty(event.target.value);
                }}
                className={styles.qtyInput}
              />
              <input
                type='button'
                value='+'
                onClick={() => incrementQty()}
                className={styles.actionInput}
              />
            </form>
            <div>
              <Button actionText='add to cart' className={styles.btn} />
            </div>
            <div>
              <Button actionText='buy now' className={styles.btn} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

SinglePage.propTypes = {
  className: PropTypes.string,
};

export default SinglePage;
