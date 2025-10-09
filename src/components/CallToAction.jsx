import React from 'react';
import styles from './CallToAction.module.css';

const CallToAction = () => {
  return (
    <div className={styles.ctaContainer}>
      <div className={`container ${styles.ctaContent}`}>
        <h2>Stay Updated</h2>
        <p>Get the latest insights, tutorials, and success stories delivered to your inbox. Join our community of learners and industry professionals.</p>
        <form className={styles.ctaForm}>
          <input type="email" placeholder="Enter Your Email" className={styles.ctaInput} />
          <button type="submit" className={styles.ctaButton}>
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
};

export default CallToAction;