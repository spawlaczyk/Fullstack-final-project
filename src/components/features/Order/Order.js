import React, { useState } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';

import styles from './Order.module.scss';

import { makeOrder } from '../../../redux/ordersRedux';
import { getCart, getSubtotalPrice } from '../../../redux/cartRedux';

import CloseButton from '../../common/CloseButton/CloseButton';

const Order = ({ className }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [comment, setComment] = useState('');
  const cart = useSelector(state => getCart(state));
  const subtotalPrice = useSelector(state => getSubtotalPrice(state));
  const totalPrice = subtotalPrice + 10;

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(makeOrder({
      fullName: fullName,
      email: email,
      phone: phone,
      comment: comment,
      totalPrice: totalPrice,
      cart: cart,
    }));
    navigate('/');
  };

  return (
    <div className={clsx(className, styles.order)}>
      <Link to='/'>
        <CloseButton />
      </Link>
      <form onSubmit={handleSubmit}>
        <label>
          <input onChange={e => setFullName(e.target.value)} type='text' placeholder='Enter your name and surname...' minLength='3' maxLength='30' required />
        </label>
        <label>
          <input onChange={e => setEmail(e.target.value)} type='email' placeholder='Enter your email address...' minLength='5' maxLength='30' required />
        </label>
        <label>
          <input onChange={e => setPhone(e.target.value)} type='tel' placeholder='Enter your phone number' minLength='9' maxLength='13' />
        </label>
        <label>
          <textarea onChange={e => setComment(e.target.value)} placeholder='Place for additional comment to your order.' rows='7' cols='50' minLength='10' maxLength='100' />
        </label>
        <p><span>total price: </span>{totalPrice}$</p>
        <button type='submit' className={styles.button}>order</button>
      </form>
    </div>
  );
};

Order.propTypes = {
  className: PropTypes.string,
};

export default Order;
