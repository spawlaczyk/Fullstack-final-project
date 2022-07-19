import React, { useRef } from 'react';
import PropTypes from 'prop-types';
//import { connect } from 'react-redux';
import clsx from 'clsx';

import styles from './Homepage.module.scss';
import { Products } from '../../features/Products/Products';
import { ReactComponent as Brand } from './brand.svg';
import { ReactComponent as About } from './about.svg';
import { AboutUs } from '../AboutUs/AboutUs';

const Component = ({ className }) => {
  const about = useRef(null);

  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: 'smooth',
    });
  };

  return (
    <div className={clsx(className, styles.homepage)}>
      <Products className={styles.topPanel} />
      <div className={styles.bottomPanel}>
        <Brand className={styles.logo} />
        <About className={styles.about} onClick={() => scrollToSection(about)} />
        <AboutUs forwardRef={about} className={styles.aboutSection} />
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
