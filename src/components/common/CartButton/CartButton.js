import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import styles from './CartButton.module.scss';

import { BsCart2 } from 'react-icons/bs';

const Component = ({ className }) => (
  <div className={clsx(className, styles.cartButton)}>
    <BsCart2 className={styles.btn} />
  </div>
);

Component.propTypes = {
  className: PropTypes.string,
};

// const mapStateToProps = state => ({
//   someProp: reduxSelector(state),
// });

// const mapDispatchToProps = dispatch => ({
//   someArg: arg => dispatch(reduxActionCreator(arg)),
// });

// const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  Component as CartButton,
  //Container as CartButton,
  Component as CartButtonComponent,
};
