import React from 'react';
import styles from './CoreValues.module.css';

const values = [
  { title: 'Dedication', description: 'Passionate and committed to excellence in everything we do.' },
  { title: 'Intellectual Honesty', description: 'Transparent and truthful in our work and communication.' },
  { title: 'Curiosity', description: 'Always learning, exploring new ideas, and pushing boundaries.' },
  { title: 'Teamwork', description: 'Collaborating effectively to achieve collective success.' },
];

const CoreValues = () => {
  return (
    <section className={styles.coreValues}>
      <div className="container">
        <div className={styles.header}>
          <h2>Our Core Values</h2>
          <p>
            Our values are the bedrock of our culture. They guide our decisions, our actions, and our interactions, ensuring we always operate with integrity and purpose.
          </p>
        </div>
        <div className={styles.valuesGrid}>
          {values.map((value, index) => (
            <div key={index} className={styles.valueCard}>
              <h3>{value.title}</h3>
              <p>{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreValues;