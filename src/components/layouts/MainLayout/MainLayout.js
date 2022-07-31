import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import styles from './MainLayout.module.scss';

const MainLayout = ({ className, children }) => {
  return (
    <div className={clsx(className, styles.root)}>
      {children}
    </div>
  );
};

MainLayout.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export default MainLayout;
