import React from 'react';
import PropTypes from 'prop-types';

import styles from './Button.module.scss';
import clsx from 'clsx';

const Button = ({ className, actionText }) => (
  <button className={clsx(className, styles.button)}>{actionText}</button>
);

Button.propTypes = {
  children: PropTypes.node,
  actionText: PropTypes.string,
  className: PropTypes.string,
};

export default Button;
