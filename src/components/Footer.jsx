import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.footerContent}`}>
        <div className={styles.brandInfo}>
          <h3 className={styles.brandName}>Doet</h3>
          <p>Connecting students, mentors, and clients to work together on real projects. Build skills, gain experience, deliver impact.</p>
        </div>
        <div className={styles.linksColumn}>
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Pricing</a></li>
            <li><a href="#">Contact</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Career</a></li>
          </ul>
        </div>
        <div className={styles.linksColumn}>
          <h4>Contact Information</h4>
          <p>131, Mayur Colony,<br/>Kothrud, Pune,<br/>Maharashtra 411038</p>
          <p>+91 9898 911230</p>
          <p>+91 81234 98765</p>
          <p>info@doet.com</p>
        </div>
      </div>
      <div className={styles.footerBottom}>
        <p>&copy; {new Date().getFullYear()} Doet. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;