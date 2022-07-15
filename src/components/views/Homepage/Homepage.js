import React from 'react';
import PropTypes from 'prop-types';
//import { connect } from 'react-redux';
import clsx from 'clsx';

import styles from './Homepage.module.scss';
import { BrandName } from '../BrandName/BrandName';

const Component = ({ className }) => (
  <div className={clsx(className, styles.root)}>
    <div className={styles.topPanel}>
      Products List
    </div>
    <div className={styles.bottomPanel}>
      <BrandName />
    </div>
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
  Component as Homepage,
  //Container as Homepage,
  Component as HomepageComponent,
};
