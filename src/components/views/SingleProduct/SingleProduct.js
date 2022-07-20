import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import clsx from 'clsx';

import styles from './SingleProduct.module.scss';
import { RenderSingleProduct } from '../../features/RenderSingleProduct/RenderSingleProduct';
import { useParams } from 'react-router-dom';

const Component = ({ className }) => {
  const { id } = useParams();

  return (
    <div className={clsx(className, styles.root)}>
      <RenderSingleProduct id={id} />
    </div>
  );
};

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
  Component as SingleProduct,
  //Container as SingleProduct,
  Component as SingleProductComponent,
};
