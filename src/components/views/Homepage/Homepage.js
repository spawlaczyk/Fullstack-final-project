import React, { useState } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import styles from './Homepage.module.scss';
import Products from '../../features/Products/Products';
import { ReactComponent as Brand } from './brand.svg';
import { ReactComponent as About } from './about.svg';
import AboutUs from '../AboutUs/AboutUs';
import CartModal from '../../features/CartModal/CartModal';
import CloseButton from '../../common/CloseButton/CloseButton';

import { getAllProducts } from '../../../redux/productsRedux';

const Homepage = ({ className }) => {
  const [showContent, setShowContent] = useState(true);
  const [showAbout, setShowAbout] = useState(false);
  const products = useSelector(state => getAllProducts(state));

  const showAboutSection = () => {
    setShowAbout(true);
    setShowContent(false);
  };

  const hideAboutSection = () => {
    setShowAbout(false);
    setShowContent(true);
  };

  return (
    <div className={clsx(className, styles.homepage)}>
      <CartModal />
      {showContent && <div className={styles.topPanel}>
        <Products className={styles.products} />
        <div className={styles.mobileView}>
          {products.map(product =>
            <div key={product.name} className={styles.mobileViewProduct}>
              <Link to={`/products/${product._id}`}>
                <img src={product.image} alt={product.name} />
              </Link>
            </div>
          )}
        </div>
      </div>}
      <div className={styles.bottomPanel}>
        {showAbout &&
          <div onClick={() => hideAboutSection()} className={styles.btnWrapper}>
            <CloseButton />
          </div>}
        {showContent && <Brand className={styles.logo} />}
        {showContent && <About className={styles.about} onClick={() => showAboutSection()} />}
        {showAbout && <AboutUs className={styles.aboutSection} />}
      </div>
    </div>
  );
};

Homepage.propTypes = {
  className: PropTypes.string,
};

export default Homepage;
