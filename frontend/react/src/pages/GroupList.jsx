// src/pages/GroupList.jsx
import React, { useEffect, useState } from 'react';
import styles from './GroupList.module.css';

const API_URL = import.meta.env.VITE_API_URL;

function GroupList() {
  const [groups, setGroups] = useState([]);
  const [loading, setLoading] = useState(true);
  const [groupName, setGroupName] = useState('');
  const [investmentAmount, setInvestmentAmount] = useState('');
  const [groupType, setGroupType] = useState('Public'); // New state for group type

  // Fetch groups from the server
  useEffect(() => {
    const fetchGroups = async () => {
      try {
        const response = await fetch(`${API_URL}/api/groups`);
        const data = await response.json();
        setGroups(data);
      } catch (error) {
        console.error('Error fetching groups:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchGroups();
  }, []);

  // Handle creating a new group
  const handleCreateGroup = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`${API_URL}/api/groups`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name: groupName, investmentAmount, groupType, members: 0 }),
      });

      if (response.ok) {
        const newGroup = await response.json();
        setGroups([...groups, newGroup]);
        setGroupName('');
        setInvestmentAmount('');
        alert('Group created successfully!');
      } else {
        throw new Error('Failed to create group');
      }
    } catch (error) {
      console.error('Error creating group:', error);
      alert('There was an error creating the group.');
    }
  };

  // Handle joining a group
  const handleJoinGroup = async (groupId) => {
    try {
      const updatedGroups = groups.map((group) =>
        group._id === groupId ? { ...group, members: group.members + 1 } : group
      );
      setGroups(updatedGroups);
    } catch (error) {
      console.error('Error joining group:', error);
    }
  };

  return (
    <div className={styles.groupListContainer}>
      <h2 className={styles.title}>Available Groups</h2>
      {loading ? (
        <p>Loading...</p>
      ) : groups.length === 0 ? (
        <p>No groups available.</p>
      ) : (
        <ul className={styles.groupList}>
          {groups.map((group) => (
            <li key={group._id} className={styles.groupItem}>
              <span>
                {group.name} - ${group.investmentAmount} investment
                <span className={group.groupType === 'Public' ? styles.public : styles.private}>
                  [{group.groupType}]
                </span>
              </span>
              <div>
                <button
                  onClick={() => handleJoinGroup(group._id)}
                  className={styles.joinButton}
                >
                  Join
                </button>
                <span className={styles.membersCount}>
                  Members: {group.members}
                </span>
              </div>
            </li>
          ))}
        </ul>
      )}

      {/* Create Group Form */}
      <form onSubmit={handleCreateGroup} className={styles.createGroupForm}>
        <input
          type="text"
          value={groupName}
          onChange={(e) => setGroupName(e.target.value)}
          placeholder="Group Name"
          required
        />
        <input
          type="number"
          value={investmentAmount}
          onChange={(e) => setInvestmentAmount(e.target.value)}
          placeholder="Investment Amount"
          required
        />
        <select
          value={groupType}
          onChange={(e) => setGroupType(e.target.value)}
        >
          <option value="Public">Public</option>
          <option value="Private">Private</option>
        </select>
        <button type="submit" className={styles.createButton}>
          Create Group
        </button>
      </form>
    </div>
  );
}

export default GroupList;
