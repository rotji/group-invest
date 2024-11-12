// src/pages/RegisterPage.jsx
import React, { useState } from 'react';
import styles from './RegisterPage.module.css';

const API_URL = "http://localhost:5000"; // Use environment variable for production/deployment

function RegisterPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState(''); // State for registration messages
  const [loading, setLoading] = useState(false); // State for loading status

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Start loading
    setMessage('Registering...'); // Set loading message

    try {
      const response = await fetch(`${API_URL}/api/auth/register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email }),
      });

      const data = await response.json();
      setLoading(false); // End loading

      if (data.message === 'User registered successfully') {
        setMessage('Registration successful!'); // Set success message
      } else {
        setMessage('Registration failed!'); // Set failure message
      }
    } catch (error) {
      setLoading(false); // End loading on error
      console.error('Error registering user:', error);
      setMessage('An error occurred during registration.'); // Set error message
    }
  };

  return (
    <div className={styles.registerContainer}>
      <h2 className={styles.title}>Register</h2>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className={styles.inputField}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={styles.inputField}
        />
        <button type="submit" className={styles.submitButton}>Register</button>
      </form>
      {message && (
        <p className={styles.message}>
          {loading ? 'Registering...' : message}
        </p>
      )}
    </div>
  );
}

export default RegisterPage;
