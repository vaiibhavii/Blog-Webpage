import React from 'react';
import styles from './Navbar.module.css';
import logo from '../assets/react.svg';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={`container ${styles.navContainer}`}>
        <div className={styles.logo}>
          <img src={logo} alt="Logo" />
          <span></span>
        </div>
        <div className={styles.navLinks}>
          <a href="#" className={styles.link}>Home</a>
          <a href="#" className={styles.link}>About Us</a>
          <a href="#" className={styles.link}>Services</a>
          <a href="#" className={styles.link}>Our Values</a>
          <a href="#" className={`${styles.link} ${styles.ctaButton}`}>Contact Us</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;