import React from 'react';
import styles from './ServicesBanner.module.css';
// Icons can still be used the same way
import { FaCode, FaPaintBrush, FaBullhorn } from 'react-icons/fa';

const services = [
    { icon: <FaCode />, title: 'Web Development', description: 'We build fast, responsive, and secure websites tailored to your business needs.'},
    { icon: <FaPaintBrush />, title: 'UI/UX Design', description: 'Creating intuitive and beautiful user interfaces that provide an amazing user experience.'},
    { icon: <FaBullhorn />, title: 'Digital Marketing', description: 'Our marketing strategies help you reach a wider audience and grow your business.'}
];

const ServicesBanner = () => {
  return (
    <section className={styles.servicesSection}>
      <div className="container">
        <h2 className={styles.title}>
          The service we offer is specifically <br /> designed to meet your needs.
        </h2>
        <div className={styles.servicesGrid}>
          {services.map((service, index) => (
            <div key={index} className={styles.serviceCard}>
              <div className={styles.iconWrapper}>{service.icon}</div>
              <h3 className={styles.cardTitle}>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesBanner;