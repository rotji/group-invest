import React, { useState } from 'react';
import styles from './LoginPage.module.css';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);       // State to track loading status
  const [message, setMessage] = useState('');          // State to track success/error messages

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);                                  // Set loading to true at the start of the request
    setMessage('');                                    // Clear any previous messages

    try {
      const API_URL = import.meta.env.VITE_API_URL;

      const response = await fetch(`${API_URL}/api/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();
      setLoading(false);                               // Set loading to false once the request is complete

      if (data.user) {
        setMessage('Login successful!');               // Display success message
        console.log('Logged in:', data.user);
        // Additional actions, e.g., storing user info or redirecting
      } else {
        setMessage('Login failed!');                   // Display failure message
      }
    } catch (error) {
      setLoading(false);                               // Set loading to false in case of error
      setMessage('Error logging in. Please try again.');
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
        <button type="submit" className={styles.submitButton} disabled={loading}>
          {loading ? 'Logging in...' : 'Login'}
        </button>
      </form>

      {message && <p className={styles.message}>{message}</p>} {/* Display message if available */}
    </div>
  );
}

export default LoginPage;
