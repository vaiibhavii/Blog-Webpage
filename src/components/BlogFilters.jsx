// src/components/BlogFilters.jsx
import React from 'react';
import styles from './BlogFilters.module.css';

const filters = ['All', 'Internships', 'Career Growth', 'Technology & Skills', 'Success Stories', 'Company Updates'];

const BlogFilters = () => {
  return (
    <section className={styles.filtersSection}>
      <div className="container">
        <div className={styles.titleContainer}>
          <span className={styles.subtitle}>Our Blogs</span>
          <h2 className={styles.title}>
            Insights, Tips & Stories to <span className={styles.highlight}>Help You Grow</span> with DOET
          </h2>
        </div>
        <div className={styles.filters}>
          {filters.map((filter, index) => (
            <button
              key={filter}
              className={`${styles.filterButton} ${index === 0 ? styles.active : ''}`}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogFilters;