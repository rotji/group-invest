// src/components/GroupModal.jsx
import React, { useState } from 'react';
import styles from './GroupModal.module.css';

function GroupModal({ isOpen, onClose, onCreateGroup }) {
  console.log("GroupModal component is rendered with isOpen:", isOpen);
  const [name, setName] = useState('');
  const [investmentAmount, setInvestmentAmount] = useState('');

  const handleCreateGroup = () => {
    // Validation to ensure both fields are filled
    if (!name.trim() || !investmentAmount) {
      alert('Please provide both a group name and an investment amount.');
      return;
    }

    // Convert investmentAmount to a number and validate
    const amount = parseFloat(investmentAmount);
    if (isNaN(amount) || amount <= 0) {
      alert('Please enter a valid investment amount.');
      return;
    }

    // Create group object
    const newGroup = {
      name: name.trim(),
      investmentAmount: amount,
    };

    // Pass the new group to the parent component
    onCreateGroup(newGroup);

    // Reset input fields
    setName('');
    setInvestmentAmount('');

    // Close the modal
    onClose();
  };

  // Return null if modal is not open
  if (!isOpen) return null;

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        <h2>Create a New Group</h2>
        <input
          type="text"
          placeholder="Group Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className={styles.inputField}
        />
        <input
          type="number"
          placeholder="Investment Amount"
          value={investmentAmount}
          onChange={(e) => setInvestmentAmount(e.target.value)}
          className={styles.inputField}
        />
        <button onClick={handleCreateGroup} className={styles.createButton}>
          Create Group
        </button>
        <button onClick={onClose} className={styles.closeButton}>
          Cancel
        </button>
      </div>
    </div>
  );
}

export default GroupModal;
