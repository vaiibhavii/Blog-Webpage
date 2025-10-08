import React from 'react';
import styles from './Blog.module.css';
import blog1 from '../assets/image 95.png';
import blog2 from '../assets/image 96.png';
import blog3 from '../assets/image 97.png';

const posts = [
    { image: blog1, date: 'Sep 22, 2025', title: 'The Future of Web Development', excerpt: 'Dive deep into the latest trends and features that are shaping the future of web development...' },
    { image: blog2, date: 'Sep 15, 2025', title: '10 UI/UX Principles for a Better App', excerpt: 'Learn the core principles of design that will make your applications more intuitive and enjoyable...' },
    { image: blog3, date: 'Sep 05, 2025', title: 'Mastering State Management', excerpt: 'Explore different state management libraries and find the one that fits your project needs...' }
];

const Blog = () => {
  return (
    <section className={styles.blogSection}>
      <div className="container">
        <h2 className={styles.title}>Our latest insights</h2>
        <div className={styles.blogGrid}>
          {posts.map((post, index) => (
            <div key={index} className={styles.blogCard}>
              <img src={post.image} alt={post.title} />
              <div className={styles.cardContent}>
                <p className={styles.date}>{post.date}</p>
                <h3 className={styles.cardTitle}>{post.title}</h3>
                <p className={styles.excerpt}>{post.excerpt}</p>
                <a href="#" className={styles.readMore}>Read more &rarr;</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;