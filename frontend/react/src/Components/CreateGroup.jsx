// src/Components/CreateGroup.jsx
import React, { useState } from 'react';

function CreateGroup({ onCreateGroup }) {
  const [groupName, setGroupName] = useState('');
  const [investmentAmount, setInvestmentAmount] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!groupName || !investmentAmount) {
      alert('Please enter all fields');
      return;
    }

    const newGroup = {
      name: groupName,
      investmentAmount,
    };

    console.log('New group data to create:', newGroup); // Debug log

    // Call the parent function to add the group
    onCreateGroup(newGroup);

    // Clear form fields after submission
    setGroupName('');
    setInvestmentAmount('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Group Name:</label>
        <input
          type="text"
          value={groupName}
          onChange={(e) => setGroupName(e.target.value)}
        />
      </div>
      <div>
        <label>Investment Amount:</label>
        <input
          type="number"
          value={investmentAmount}
          onChange={(e) => setInvestmentAmount(e.target.value)}
        />
      </div>
      <button type="submit">Create Group</button>
    </form>
  );
}

export default CreateGroup;
