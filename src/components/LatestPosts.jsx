import React from 'react';
import styles from './LatestPosts.module.css';
import BlogCard from './BlogCard';
import Sidebar from './Sidebar';

// Import images
import author1 from '../assets/image 91.png';
import postImg1 from '../assets/image 95.png';
import postImg2 from '../assets/image 96.png';
import postImg3 from '../assets/image 97.png';


const latestPosts = [
    {
        image: postImg1,
        category: 'Career Growth',
        title: 'From College to Career: Complete Internship Guide',
        excerpt: 'Everything you need to know about landing your first internship and turning it into a full-time offer.',
        author: { name: 'Priya Sharma', image: author1 },
        date: 'September 26, 2025',
        readTime: '9 min read',
    },
    // Add more posts for the vertical list
];

const LatestPosts = () => {
  return (
    <section className={styles.latestSection}>
      <div className={`container ${styles.layout}`}>
        <div className={styles.postsColumn}>
          <h2 className={styles.title}>Latest Posts</h2>
          <div className={styles.postsGrid}>
            {latestPosts.map((post, index) => (
              <BlogCard key={index} post={post} />
            ))}
          </div>
        </div>
        <div className={styles.sidebarColumn}>
          <Sidebar />
        </div>
      </div>
    </section>
  );
};

export default LatestPosts;