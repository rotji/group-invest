// src/pages/LoginPage.jsx
import React, { useState } from 'react';
import styles from './LoginPage.module.css';

function LoginPage() {
  const [email, setEmail] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });
      const data = await response.json();
      if (data.user) {
        console.log('Logged in:', data.user);
        // Here, you can treat data.user as the "id" for further operations in the project
      } else {
        alert('Login failed!');
      }
    } catch (error) {
      console.error('Error logging in:', error);
    }
  };

  return (
    <div className={styles.loginContainer}>
      <h2 className={styles.title}>Login</h2>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={styles.inputField}
        />
        <button type="submit" className={styles.submitButton}>Login</button>
      </form>
    </div>
  );
}

export default LoginPage;
