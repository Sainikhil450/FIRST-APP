import React from 'react';
import { Link } from 'react-router-dom';

const Softfish = () => {
  return (
    <div className="soft-fish">
      <h2>Soft Fish</h2>
      <ul className="fish-list">
        <li><Link to="/soft-fish/type1">Gold Fish</Link></li>
        <li><Link to="/soft-fish/type2">Molly</Link></li>
        <li><Link to="/soft-fish/type3">Tetras</Link></li>
        <li><Link to="/soft-fish/type4">Tiger Barbs</Link></li>
        <li><Link to="/soft-fish/type5">Angle Fish</Link></li>
        {/* Add more fish links as needed */}
      </ul>
    </div>
  );
};

export default Softfish;
