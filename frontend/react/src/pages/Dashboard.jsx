// src/pages/Dashboard.jsx
import React from 'react';
import styles from './Dashboard.module.css';

function Dashboard() {
  return (
    <div className={styles.dashboardContainer}>
      <h2 className={styles.title}>Your Dashboard</h2>
      <p className={styles.description}>Your contributions and profits will appear here.</p>
    </div>
  );
}

export default Dashboard;
