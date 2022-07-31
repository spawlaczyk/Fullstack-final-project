import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import { ReactComponent as About } from '../Homepage/about.svg';

import styles from './AboutUs.module.scss';

const AboutUs = ({ className }) => {
  return(
    <div className={clsx(className, styles.aboutUs)}>
      <About className={styles.about} />
      <div className={styles.text}>
        <h3>who we are?</h3>
        <p>Hi!<br />
        We are ECOBAGS a small brand based in Poland.
        Our history is simple we are group of friends who wanted
        to share their creativity with the world.
        We are focused on creating fancy custom canvas bags.
        ECOBAGS is very fast growing company. Our desings have been
        noticed and awarded by many fashion magazines.
        </p>
        <h3>show us your projects!</h3>
        <p>
          If you like our work and you are creative person contact us!
          We will be overjoyed if you want to cooperate with us!
        </p>
      </div>
      <div className={styles.contact}>
        <div className={styles.top}>
          <h3>contact us</h3>
          <p>333 555 777</p>
          <p>ecobags@ecobags.com</p>
        </div>
        <div className={styles.bottom}>
          <h3>follow us</h3>
          <a href='https://www.facebook.com/' target='blank'>Facebook ↗</a><br />
          <a href='https://twitter.com/' target='blank'>Twitter ↗</a><br />
          <a href='https://www.instagram.com/' target='blank'>Instagram ↗</a>
        </div>
      </div>
    </div>
  );
};

AboutUs.propTypes = {
  className: PropTypes.string,
};

export default AboutUs;
