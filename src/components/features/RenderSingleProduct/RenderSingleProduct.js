import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import clsx from 'clsx';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import styles from './RenderSingleProduct.module.scss';

import { ReactComponent as Info } from './read.svg';
import Button from '../../common/Button/Button';

import { getProducyById } from '../../../redux/productsRedux';

const Component = ({ className, product, id }) => {
  const photos = product.photos;
  console.log(photos);

  return (
    <div className={styles.root}>
      <div className={styles.product}>
        <Swiper slidesPerView={4} spaceBetween={30} className={styles.swiper}>
          {photos.map(photo =>
            <SwiperSlide key={product.id} className={styles.swiperSlide}>
              <img src={photo} alt='product' />
            </SwiperSlide>
          )}
        </Swiper>
      </div>
      <div className={styles.bottomPanel}>
        <div className={styles.infoSection}>
          <h3>{product.name}</h3>
          <p>{product.description}</p>
        </div>
        <div className={styles.buySection}>
          <Button className={styles.btn1} actionText='add to cart' />
          <Button className={styles.btn2} actionText='buy now' />
        </div>
      </div>
    </div>
  );
};

Component.propTypes = {
  className: PropTypes.string,
  product: PropTypes.object,
  id: PropTypes.string,
};

const mapStateToProps = (state, ownProps )=> ({
  product: getProducyById(state, ownProps.id),
});

const mapDispatchToProps = dispatch => ({
  //someArg: arg => dispatch(reduxActionCreator(arg)),
});

const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  //Component as RenderSingleProduct,
  Container as RenderSingleProduct,
  Component as RenderSingleProductComponent,
};
