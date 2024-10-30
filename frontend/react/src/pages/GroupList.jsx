// src/pages/GroupList.jsx
import React from 'react';
import styles from './GroupList.module.css';

function GroupList() {
  return (
    <div className={styles.groupListContainer}>
      <h2 className={styles.title}>Available Groups</h2>
      <ul className={styles.groupList}>
        <li className={styles.groupItem}>Group 1 - $100 investment</li>
        <li className={styles.groupItem}>Group 2 - $200 investment</li>
      </ul>
    </div>
  );
}

export default GroupList;
