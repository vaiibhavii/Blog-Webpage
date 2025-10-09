import React from 'react';
import styles from './Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={`container ${styles.navContainer}`}>
        <div className={styles.leftPlaceholder}></div>

        <div className={styles.navLinks}>
          <a href="#" className={styles.link}>Home</a>
          <a href="#" className={styles.link}>About us</a>
          <a href="#" className={styles.link}>Services</a>
          <a href="#" className={styles.link}>Pricing</a>
          <a href="#" className={styles.link}>Contact</a>
          <a href="#" className={styles.link}>Blog</a>
          <a href="#" className={styles.link}>Careers</a>
        </div>

        <div className={styles.ctaContainer}>
          <a href="#" className={`${styles.link} ${styles.ctaButton}`}>Get started</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;