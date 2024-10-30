// src/pages/HomePage.jsx
import React from 'react';
import styles from './HomePage.module.css';

function HomePage() {
  return (
    <div className={styles.homePageContainer}>
      <h2 className={styles.title}>Welcome to the Group Investing Platform</h2>
      <p className={styles.description}>
        Invest as groups in stocks, sports betting, forex currencies, crypto currencies, commodities and a lot of other platforms that require you to invest. Imagine a platform where anyone can join forces with a group of like-minded investors to maximize their returns in sports betting, stocks, forex, and other high-potential markets. Introducing the Group Investing Platform, a revolutionary way to invest together, reduce risk, and share profits equally. Whether you’re a seasoned trader or a newcomer, our platform levels the playing field, allowing users to pool their resources and benefit from collective gains.
      </p>
      <p className={styles.description}>
        <strong>Why Now?</strong> With the rise of collaborative finance models and the increasing popularity of retail investing, group investing is the next natural evolution. By empowering people to join public or private investment groups, we tap into the psychology of collective action. Users contribute equally, participate in group strategies, and share profits – all while spreading risk across multiple contributors. The opportunity to invest smartly as a community is a game-changer.
      </p>
    </div>
  );
}

export default HomePage;
