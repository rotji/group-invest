// src/components/NavBar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';

function NavBar() {
  return (
    <nav className={styles.nav}>
      <ul className={styles.navList}>
        <li className={styles.navItem}><Link to="/">Home</Link></li>
        <li className={styles.navItem}><Link to="/login">Login</Link></li>
        <li className={styles.navItem}><Link to="/register">Register</Link></li>
        <li className={styles.navItem}><Link to="/groups">Groups</Link></li>
        <li className={styles.navItem}><Link to="/dashboard">Dashboard</Link></li>
      </ul>
    </nav>
  );
}

export default NavBar;
