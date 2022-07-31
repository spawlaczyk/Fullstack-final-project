import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

import styles from './CartProduct.module.scss';

import { removeFromCart } from '../../../redux/cartRedux';

import { BsTrash } from 'react-icons/bs';

const CartProduct = ({ className, item }) => {
  const dispatch = useDispatch();
  const [qty, setQty] = useState(item.qty);
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

  const handleRemove = () => {
    dispatch(removeFromCart(item.id));
  };

  return (
    <div className={clsx(className, styles.cartProduct)}>
      <div className={styles.imageWrapper}>
        <img src={item.image} alt={item.name} />
      </div>
      <div className={styles.infoWrapper}>
        <p className={styles.name}>{item.name}</p>
        <p><span>price: </span>{item.price}$</p>
      </div>
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
        <div onClick={handleRemove}>
          <BsTrash className={styles.trashIcon} />
        </div>
      </div>
    </div>
  );
};

CartProduct.propTypes = {
  className: PropTypes.string,
  item: PropTypes.object,
};

export default CartProduct;
