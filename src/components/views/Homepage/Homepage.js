import React, { useState } from 'react';
import PropTypes from 'prop-types';
//import { connect } from 'react-redux';
import clsx from 'clsx';

import styles from './Homepage.module.scss';
import { Products } from '../../features/Products/Products';
import { ReactComponent as Brand } from './brand.svg';
import { ReactComponent as About } from './about.svg';
import { AboutUs } from '../AboutUs/AboutUs';
import CloseButton from '../../common/CloseButton/CloseButton';

const Component = ({ className }) => {
  const [showContent, setShowContent] = useState(true);
  const [showAbout, setShowAbout] = useState(false);

  const showAboutSection = () => {
    setShowAbout(true);
    setShowContent(false);
  };

  const hideAboutSection = () => {
    setShowAbout(false);
    setShowContent(true);
  };

  return (
    <div className={clsx(className, styles.homepage)}>
      {showAbout &&
      <div onClick={() => hideAboutSection()} className={styles.btnWrapper}>
        <CloseButton />
      </div>}
      {showContent && <Products className={styles.topPanel} />}
      <div className={styles.bottomPanel}>
        {showContent && <Brand className={styles.logo} />}
        {showContent && <About className={styles.about} onClick={() => showAboutSection()} />}
        {showAbout && <AboutUs className={styles.aboutSection} />}
      </div>
    </div>
  );
};

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
