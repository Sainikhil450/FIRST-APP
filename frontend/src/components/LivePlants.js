import React from 'react';
import { Link } from 'react-router-dom';
// import './WildFish.css';

const LivePlants = () => {
  return (
    <div className="live-plant">
      <h2>Wild Fish</h2>
      <ul className="plants-list">
      <li><Link to="/live-plants/Waterplants">Water Plants</Link></li>
      <li><Link to="/live-plants/artificialplants">Artificial Plants</Link></li>
        
        {/* Add more fish links as needed */}
      </ul>
    </div>
  );
};

export default LivePlants;
