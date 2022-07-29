import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import clsx from 'clsx';

import styles from './CloseButton.module.scss';

import { ImCross } from 'react-icons/im';

const CloseButton = ({ className }) => {
  return (
    <div className={clsx(className, styles.btnWrapper)}>
      <ImCross className={styles.btn} />
    </div>
  );
};

CloseButton.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export default CloseButton;
