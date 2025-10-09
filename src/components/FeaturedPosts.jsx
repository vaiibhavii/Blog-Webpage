import React from 'react';
import styles from './FeaturedPosts.module.css';
import BlogCard from './BlogCard';

import author1 from '../assets/image 91.png';
import postImg1 from '../assets/image 92.png';
import postImg2 from '../assets/image code.png';

const featuredPosts = [
  {
    image: postImg2,
    title: 'How Real Projects Transformed My Programming Skills',
    excerpt: 'A comprehensive guide to building your first full-stack application and the lessons learned from working with real clients.',
    author: { name: 'Priya Sharma', image: author1 },
    date: 'September 28, 2025',
    readTime: '8 min read',
  },
  {
    image: postImg1,
    title: 'From Bootcamp to Job: A Success Story',
    excerpt: 'How one student went from zero programming experience to a six-figure job in just 8 months through our internships.',
    author: { name: 'Neha Joshi', image: author1 },
    date: 'September 28, 2025',
    readTime: '12 min read',
  },
  {
    image: postImg1,
    title: 'A Third Featured Post for Scrolling',
    excerpt: 'This is another example post to show how the horizontal scroll works when there are more than two items.',
    author: { name: 'John Doe', image: author1 },
    date: 'September 27, 2025',
    readTime: '7 min read',
  },
];

const FeaturedPosts = () => {
  return (
    <section className={styles.featuredSection}>
      <div className="container">
        <div className={styles.header}>
          <h2 className={styles.title}>Featured Posts</h2>
          {/* Add carousel arrows if implementing with a library */}
        </div>
        <div className={styles.postsContainer}>
          {featuredPosts.map((post, index) => (
            <div key={index} className={styles.postWrapper}>
              <BlogCard post={post} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedPosts;