import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import styles from './NotFound.module.scss';
import { Link } from 'react-router-dom';

const NotFound = ({ className }) => {
  return (
    <div className={clsx(className, styles.notFound)}>
      <h1>404 not found...</h1>
      <Link to='/'>back to homepage</Link>
    </div>
  );
};

NotFound.propTypes = {
  className: PropTypes.string,
};

export default NotFound;
