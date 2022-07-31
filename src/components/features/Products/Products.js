import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import clsx from 'clsx';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation, Mousewheel } from 'swiper';
import { Link } from 'react-router-dom';

import { getAllProducts } from '../../../redux/productsRedux';

import styles from './Products.module.scss';

const Products = ({ className }) => {
  const products = useSelector(state => getAllProducts(state));

  return (
    <div className={clsx(className, styles.root)}>
      <Swiper slidesPerView={4} spaceBetween={30} navigation={true} mousewheel={true} modules={[Navigation, Mousewheel]} className={styles.swiper} breakpoints={{280: {slidesPerView: 1}, 1024: {slidesPerView: 4}}}>
        {products.map(product =>
          <SwiperSlide key={product.name} className={styles.swiperSlide}>
            <div className={styles.overlay} style={{ backgroundColor: `${product.mainColor}` }}></div>
            <Link to={`/products/${product.id}`}>
              <img src={`${product.image}`}  alt={`${product.name}`} />
            </Link>
          </SwiperSlide>
        )}
      </Swiper>
    </div>
  );
};

Products.propTypes = {
  className: PropTypes.string,
};

export default Products;
