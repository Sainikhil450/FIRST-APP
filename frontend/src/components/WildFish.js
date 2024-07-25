import React from 'react';
import { Link } from 'react-router-dom';
// import './WildFish.css';

const WildFish = () => {
  return (
    <div className="wild-fish">
      <h2>Wild Fish</h2>
      <ul className="fish-list">
        <li><Link to="/wild-fish/parrot">Parrot Fish</Link></li>
        <li><Link to="/wild-fish/oscar">Oscar Fish</Link></li> {/* Updated link */}
        <li><Link to="/wild-fish/type3">Cichlid Fish</Link></li>
        <li><Link to="/wild-fish/type4">Giant Gourami</Link></li>
        {/* Add more fish links as needed */}
      </ul>
    </div>
  );
};

export default WildFish;
