// src/pages/LoginPage.jsx
import React from 'react';
import styles from './LoginPage.module.css';

function LoginPage() {
  return (
    <div className={styles.loginContainer}>
      <h2 className={styles.title}>Login</h2>
      <form className={styles.form}>
        <input type="email" placeholder="Email" className={styles.inputField} />
        <input type="password" placeholder="Password" className={styles.inputField} />
        <button type="submit" className={styles.submitButton}>Login</button>
      </form>
    </div>
  );
}

export default LoginPage;
