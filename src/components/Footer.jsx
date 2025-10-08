import React from 'react';
import styles from './Footer.module.css';
import logo from '../assets/react.svg';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.footerContent}`}>
        <div className={styles.brandInfo}>
          <div className={styles.logo}>
            <img src={logo} alt="Logo" />
            <span>YourBrand</span>
          </div>
          <p>Crafting exceptional digital experiences to help your business grow.</p>
        </div>
        <div className={styles.linksColumn}>
          <h4>Company</h4>
          <ul>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Blog</a></li>
          </ul>
        </div>
        <div className={styles.linksColumn}>
          <h4>Support</h4>
          <ul>
            <li><a href="#">Contact Us</a></li>
            <li><a href="#">FAQ</a></li>
            <li><a href="#">Privacy Policy</a></li>
          </ul>
        </div>
        <div className={styles.linksColumn}>
          <h4>Get in touch</h4>
          <p>123 Web Dev Street<br/>Pune, Maharashtra</p>
          <p>contact@yourbrand.com</p>
        </div>
      </div>
      <div className={styles.footerBottom}>
        <p>&copy; {new Date().getFullYear()} YourBrand. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;