import React from 'react';
import styles from './OurTeam.module.css';
import member1 from '../assets/image 91.png';
import member2 from '../assets/image 92.png';
import member3 from '../assets/image 93.png';
import member4 from '../assets/image code.png';

const teamMembers = [
  { name: 'John Doe', role: 'Co-Founder', image: member1 },
  { name: 'Jane Smith', role: 'Lead Designer', image: member2 },
  { name: 'Peter Jones', role: 'Lead Developer', image: member3 },
  { name: 'Sarah Miller', role: 'Project Manager', image: member4 },
];

const OurTeam = () => {
  return (
    <section className={styles.ourTeam}>
      <div className="container">
        <h2 className={styles.title}>Meet Our Team</h2>
        <div className={styles.teamGrid}>
          {teamMembers.map((member, index) => (
            <div key={index} className={styles.teamCard}>
              <img src={member.image} alt={member.name} />
              <div className={styles.cardContent}>
                <h3>{member.name}</h3>
                <p>{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurTeam;