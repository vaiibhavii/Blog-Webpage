import React from 'react';
import styles from './BlogCard.module.css';

const BlogCard = ({ post }) => (
  <div className={styles.blogCard}>
    <div className={styles.imageContainer}>
      <img src={post.image} alt={post.title} className={styles.blogImage} />
      {post.category && <span className={styles.categoryTag}>{post.category}</span>}
    </div>
    <div className={styles.cardContent}>
      <h3 className={styles.cardTitle}>{post.title}</h3>
      <p className={styles.cardExcerpt}>{post.excerpt}</p>
      <div className={styles.authorInfo}>
        <img src={post.author.image} alt={post.author.name} className={styles.authorImage} />
        <span>By - {post.author.name}</span>
        <span className={styles.separator}></span>
        <span>{post.date}</span>
        <span className={styles.separator}></span>
        <span>{post.readTime}</span>
      </div>
    </div>
  </div>
);

export default BlogCard;