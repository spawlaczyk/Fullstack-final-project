import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import clsx from 'clsx';
import { useNavigate, useParams, Link } from 'react-router-dom';

import styles from './SingleProduct.module.scss';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation, Mousewheel } from 'swiper';

import CloseButton from '../../common/CloseButton/CloseButton';

import { getProducyById } from '../../../redux/productsRedux';
import { addToCart } from '../../../redux/cartRedux';

import Button from '../../common/Button/Button';
import CartModal from '../CartModal/CartModal';

const SinglePage = ({ className }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const product = useSelector(state => getProducyById(state, id));
  const [qty, setQty] = useState(1);

  const handleQty = (qty) => {
    if(qty > 10) {
      setQty(10);
    } else if(qty < 1) {
      setQty(1);
    } else {
      setQty(qty);
    }
  };

  const handleAddToCart = () => {
    dispatch(addToCart({
      id: product._id,
      name: product.name,
      image: product.image,
      minPrice: product.minPrice,
      qty: qty,
      price: product.minPrice * qty,
    }));
  };

  const handleBuyNow = () => {
    dispatch(addToCart({
      id: product._id,
      name: product.name,
      image: product.image,
      minPrice: product.minPrice,
      qty: qty,
      price: product.minPrice * qty,
    }));
    navigate('/order');
  };

  if(!product) return 'wait a sec...';
  return (
    <div className={clsx(className, styles.singleProduct)}>
      <CartModal />
      <Link to='/'>
        <CloseButton />
      </Link>
      <Swiper loop={true} slidesPerView={4} spaceBetween={30} navigation={true} mousewheel={true} modules={[Navigation, Mousewheel]} className={styles.swiper}>
        {product.photos.map(photo =>
          <SwiperSlide key={photo} className={styles.swiperSlide}>
            <img src={photo} alt={photo} />
          </SwiperSlide>
        )}
      </Swiper>
      <div className={styles.mobileView}>
        {product.photos.map(photo =>
          <div key={photo} className={styles.mobileViewProduct}>
            <img src={photo} alt={photo} />
          </div>
        )}
      </div>
      <div className={styles.bottomPanel}>
        <div className={styles.leftSide}>
          <div className={styles.productDescription}>
            <h1>{product.name}</h1>
            <p>{product.description}</p>
            <p><span>price: </span>{product.minPrice}$</p>
            <p><span>Material: </span>100% eco cotton</p>
            <p>This bag is made to order by hand so please allow up to three weeks for manufacture when setting expectations for delivery.</p>
            <p>Shipped from Poland.</p>
            <p><span>delivery fee: </span>10$</p>
          </div>
        </div>
        <div className={styles.rightSide}>
          <div className={styles.actionsWrapper}>
            <form>
              <label>quantity: </label>
              <input type='number' min='1' max='10' value={qty} onChange={(event) => handleQty(event.target.value)} />
            </form>
            <div onClick={handleAddToCart}>
              <Button actionText='add to cart' className={styles.btn} />
            </div>
            <div onClick={handleBuyNow}>
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
