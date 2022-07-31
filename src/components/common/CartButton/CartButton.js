import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import styles from './CartButton.module.scss';

import { BsFillCartFill } from 'react-icons/bs';

const CartButton = ({ className }) => {
  return (
    <div className={clsx(className, styles.cartButton)}>
      <BsFillCartFill className={styles.btn} />
    </div>
  );
};

CartButton.propTypes = {
  className: PropTypes.string,
};

export default CartButton;
