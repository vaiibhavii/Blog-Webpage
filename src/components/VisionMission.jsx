import React from 'react';
import styles from './VisionMission.module.css';
import visionImage from '../assets/image 94.png';

const VisionMission = () => {
  return (
    <section className={styles.visionMission}>
      <div className={`container ${styles.gridContainer}`}>
        <div className={styles.imageContainer}>
          <img src={visionImage} alt="Our team collaborating" />
        </div>
        <div className={styles.textContainer}>
          <div className={styles.textBlock}>
            <h3>Our Vision</h3>
            <p>
              To be the leading innovator in our field, recognized for our creativity, commitment to quality, and our positive impact on the digital landscape. We aspire to empower businesses through transformative technology.
            </p>
          </div>
          <div className={styles.textBlock}>
            <h3>Our Mission</h3>
            <p>
              Our mission is to craft exceptional digital experiences that are not only beautiful and functional but also drive tangible results. We are dedicated to our clients' success, fostering a culture of collaboration and continuous learning.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionMission;