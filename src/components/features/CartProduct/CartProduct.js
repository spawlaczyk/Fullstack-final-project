import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

import styles from './CartProduct.module.scss';

import { removeFromCart, updateQty } from '../../../redux/cartRedux';

import { BsTrash } from 'react-icons/bs';

const CartProduct = ({ className, item }) => {
  const dispatch = useDispatch();
  const [qty, setQty] = useState(item.qty);
  const [itemPrice, setItemPrice] = useState(item.price);
  const _id = item._id;
  console.log(qty);

  const handleQty = (newQty) => {
    if(newQty > 10) {
      setQty(10);
    } else if(newQty < 1) {
      setQty(1);
    } else {
      setQty(newQty);
      setItemPrice(item.minPrice * newQty);
      dispatch(updateQty({_id, qty: newQty, price: itemPrice}));
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
        <p><span>price: </span>{itemPrice}$</p>
      </div>
      <div className={styles.actionsWrapper}>
        <form>
          <input type='number' min='1' max='10' value={qty} onChange={(event) => handleQty(event.target.value)} />
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
