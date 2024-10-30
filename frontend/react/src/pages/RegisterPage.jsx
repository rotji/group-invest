// src/pages/RegisterPage.jsx
import React from 'react';
import styles from './RegisterPage.module.css';

function RegisterPage() {
  return (
    <div className={styles.registerContainer}>
      <h2 className={styles.title}>Register</h2>
      <form className={styles.form}>
        <input type="text" placeholder="Name" className={styles.inputField} />
        <input type="email" placeholder="Email" className={styles.inputField} />
        <input type="password" placeholder="Password" className={styles.inputField} />
        <button type="submit" className={styles.submitButton}>Register</button>
      </form>
    </div>
  );
}

export default RegisterPage;
