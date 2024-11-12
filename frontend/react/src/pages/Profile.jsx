import React from 'react';
import styles from './Profile.module.css';

function Profile() {
  // Hardcoded user data for the prototype
  const user = {
    name: 'John Doe',
    email: 'johndoe@example.com',
    phone: '+1234567890',
    contributions: 5000,
    profits: 750,
    joinedGroups: ['Tech Investors', 'Crypto Enthusiasts', 'Real Estate Group'],
    profileImage: 'https://via.placeholder.com/150', // Placeholder profile image
  };

  return (
    <div className={styles.profileContainer}>
      {/* User Information */}
      <div className={styles.userInfo}>
        <img
          src={user.profileImage}
          alt="User Profile"
          className={styles.profileImage}
        />
        <h2 className={styles.userName}>{user.name}</h2>
        <p className={styles.userEmail}>{user.email}</p>
        <p className={styles.userPhone}>{user.phone}</p>
      </div>

      {/* Contributions & Profits */}
      <div className={styles.statsContainer}>
        <div className={styles.statBox}>
          <h3>Total Contributions</h3>
          <p>${user.contributions.toLocaleString()}</p>
        </div>
        <div className={styles.statBox}>
          <h3>Total Profits</h3>
          <p>${user.profits.toLocaleString()}</p>
        </div>
      </div>

      {/* Groups the User Has Joined */}
      <div className={styles.groupsContainer}>
        <h3>Joined Groups</h3>
        <ul className={styles.groupList}>
          {user.joinedGroups.map((group, index) => (
            <li key={index} className={styles.groupItem}>
              {group}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Profile;