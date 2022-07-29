import React from 'react';
import PropTypes from 'prop-types';
//import { connect } from 'react-redux';
import clsx from 'clsx';

import styles from './NotFound.module.scss';
import { Link } from 'react-router-dom';

const Component = ({ className, children }) => (
  <div className={clsx(className, styles.notFound)}>
    <h1>404 not found...</h1>
    <Link to='/'>back to homepage</Link>
  </div>
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
  Component as NotFound,
  //Container as NotFound,
  Component as NotFoundComponent,
};
