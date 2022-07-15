import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import clsx from 'clsx';

import styles from './LargeText.module.scss';

const Component = ({ className, children }) => (
  <h2 className={clsx(className, styles.largeText)}>{children}</h2>
);

Component.propTypes = {
  children: PropTypes.node,
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
  Component as LargeText,
  //Container as LargeText,
  Component as LargeTextComponent,
};
