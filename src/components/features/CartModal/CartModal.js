import React, { useState } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import Modal from 'react-modal';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import styles from './CartModal.module.scss';

import { getCart, getSubtotalPrice } from '../../../redux/cartRedux';

import CartButton from '../../common/CartButton/CartButton';
import CloseButton from '../../common/CloseButton/CloseButton';
import Button from '../../common/Button/Button';
import CartProduct from '../CartProduct/CartProduct';

Modal.setAppElement(document.getElementById('root'));

const CartModal = ({ className }) => {
  const [isOpen, setIsOpen] = useState(false);
  const cart = useSelector(state => getCart(state));
  const subtotalPrice = useSelector(state => getSubtotalPrice(state));
  const totalPrice = subtotalPrice + 10;


  const handleModalOpen = () => {
    setIsOpen(true);
  };

  const handleModalClose = () => {
    setIsOpen(false);
  };

  if(cart.length === 0) return '';
  return (
    <div className={clsx(className, styles.cartModal)}>
      <div onClick={handleModalOpen}>
        <CartButton />
      </div>
      <Modal isOpen={isOpen}>
        <div className={styles.cartWrapper}>
          <div className={styles.btnWrapper} onClick={handleModalClose}>
            <CloseButton className={styles.modalButton} />
          </div>
          <div className={styles.cartContent}>
            {cart.map(item =>
              <CartProduct key={item.name} item={item} />
            )}
          </div>
          <div className={styles.bottomPanel}>
            <div className={styles.cartSummary}>
              <p><span>subtotal price: </span>{subtotalPrice}$</p>
              <p><span>delivery fee: </span>10$</p>
              <p><span>total price: </span>{totalPrice}$</p>
            </div>
            <Link to='/order'>
              <Button actionText='checkout' className={styles.checkoutButton} />
            </Link>
          </div>
        </div>
      </Modal>
    </div>
  );
};

CartModal.propTypes = {
  className: PropTypes.string,
};

export default CartModal;
