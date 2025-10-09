import React from 'react';
import styles from './Sidebar.module.css';

const Sidebar = () => {
  return (
    <aside className={styles.sidebar}>
      {/* Search Section */}
      <div className={styles.widget}>
        <h4 className={styles.widgetTitle}>Search Blogs</h4>
        <input type="text" placeholder="Search Blogs" className={styles.searchInput} />
      </div>

      {/* Popular Posts Section */}
      <div className={styles.widget}>
        <h4 className={styles.widgetTitle}>Popular Posts</h4>
        {/* Add your popular posts here */}
      </div>
      
      {/* Popular Topics Section */}
      <div className={styles.widget}>
        <h4 className={styles.widgetTitle}>Popular Topics</h4>
        <div className={styles.tags}>
          <span className={styles.tag}>Internships</span>
          <span className={styles.tag}>AI & Tech</span>
          <span className={styles.tag}>Student Success</span>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;