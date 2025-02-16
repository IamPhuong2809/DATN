import React from 'react';
import './Homepage.css';
import Header from '../../components/Header/Header';

function Homepage() {
  return (
    <div className="homepage-container">
      <Header />
      <div className="homepage-content">
        <h1>Chào mừng đến với Homepage</h1>
      </div>
    </div>
  );
}

export default Homepage;