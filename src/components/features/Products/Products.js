import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import clsx from 'clsx';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation, Mousewheel } from 'swiper';

import { getAllProducts } from '../../../redux/productsRedux';

import styles from './Products.module.scss';

const Component = ({ className, products }) => (
  <div className={clsx(className, styles.root)}>
    <Swiper slidesPerView={4} spaceBetween={30} navigation={true} mousewheel={true} modules={[Navigation, Mousewheel]} className={styles.swiper}>
      {products.map(product =>
        <SwiperSlide key={product.name} className={styles.swiperSlide}>
          <img src={`${product.image}`}  alt={`${product.name}`} />
        </SwiperSlide>
      )}
    </Swiper>
  </div>
);

Component.propTypes = {
  products: PropTypes.array,
  className: PropTypes.string,
};

const mapStateToProps = state => ({
  products: getAllProducts(state),
});

const mapDispatchToProps = dispatch => ({
  //someArg: arg => dispatch(reduxActionCreator(arg)),
});

const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  Container as Products,
  Component as ProductsComponent,
};
