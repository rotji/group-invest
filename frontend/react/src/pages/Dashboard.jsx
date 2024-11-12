import React from 'react';
import styles from './Dashboard.module.css';

function Dashboard() {
  // Hardcoded data for total user contributions and profits
  const totalContributions = 5000; // Total contributions in dollars
  const totalProfits = 750; // Total profits in dollars
  const profitPercentage = ((totalProfits / totalContributions) * 100).toFixed(2);

  // Hardcoded data for groups
  const groups = [
    { id: 1, name: 'Tech Investors', contributions: 2000, profits: 300 },
    { id: 2, name: 'Crypto Enthusiasts', contributions: 1500, profits: 250 },
    { id: 3, name: 'Real Estate Group', contributions: 1000, profits: 150 },
    { id: 4, name: 'Startup Funders', contributions: 500, profits: 50 },
  ];

  return (
    <div className={styles.dashboardContainer}>
      <h2 className={styles.title}>Your Dashboard</h2>

      {/* Overall Stats */}
      <div className={styles.statsContainer}>
        <div className={styles.statBox}>
          <h3>Total Contributions</h3>
          <p>${totalContributions.toLocaleString()}</p>
        </div>
        <div className={styles.statBox}>
          <h3>Total Profits</h3>
          <p>${totalProfits.toLocaleString()}</p>
        </div>
        <div className={styles.statBox}>
          <h3>Profit Percentage</h3>
          <p>{profitPercentage}%</p>
        </div>
      </div>

      {/* Recent Transactions */}
      <h3 className={styles.subtitle}>Recent Transactions</h3>
      <table className={styles.transactionTable}>
        <thead>
          <tr>
            <th>Date</th>
            <th>Type</th>
            <th>Amount ($)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>2024-11-01</td>
            <td>Contribution</td>
            <td>$200</td>
          </tr>
          <tr>
            <td>2024-11-02</td>
            <td>Profit</td>
            <td>$50</td>
          </tr>
          <tr>
            <td>2024-11-03</td>
            <td>Contribution</td>
            <td>$100</td>
          </tr>
          <tr>
            <td>2024-11-03</td>
            <td>Profit</td>
            <td>$30</td>
          </tr>
        </tbody>
      </table>

      {/* Group Contributions & Profits */}
      <h3 className={styles.subtitle}>Group Contributions & Profits</h3>
      <table className={styles.groupTable}>
        <thead>
          <tr>
            <th>Group Name</th>
            <th>Total Contributions ($)</th>
            <th>Total Profits ($)</th>
            <th>Profit Percentage</th>
          </tr>
        </thead>
        <tbody>
          {groups.map((group) => {
            const groupProfitPercentage = ((group.profits / group.contributions) * 100).toFixed(2);
            return (
              <tr key={group.id}>
                <td>{group.name}</td>
                <td>${group.contributions.toLocaleString()}</td>
                <td>${group.profits.toLocaleString()}</td>
                <td>{groupProfitPercentage}%</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Dashboard;
