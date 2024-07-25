import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../CartContext'; // Import useCart
import './Header.css'; // Ensure the correct path to your CSS file

function Header({ isLoggedIn, onLoginClick, onSignupClick, onLogout }) {
  const [dropdown, setDropdown] = useState('');
  const { cartItems } = useCart(); // Get cartItems from CartContext

  const handleMouseEnter = (menu) => {
    setDropdown(menu);
  };

  const handleMouseLeave = () => {
    setDropdown('');
  };

  return (
    <header className="header">
      <div className="header-left">
        <h1>My App</h1>
      </div>
      <div className="header-center">
        <nav>
          <ul>
            <li>
              <Link
                to="/home"
                onMouseEnter={() => handleMouseEnter('')}
                onMouseLeave={handleMouseLeave}
              >
                Home
              </Link>
            </li>
            <li
              className="dropdown"
              onMouseEnter={() => handleMouseEnter('wildFish')}
              onMouseLeave={handleMouseLeave}
            >
              Wild Fish
              {dropdown === 'wildFish' && (
                <ul className="dropdown-menu dropdown-menu-wildfish">
                  <li><Link to="/wild-fish/parrot">Parrot</Link></li>
                  <li><Link to="/wild-fish/oscar">Oscar </Link></li>
                  <li><Link to="/wild-fish/type3">Cichlid </Link></li>
                  <li><Link to="/wild-fish/type4">Giant Gourami</Link></li>
                </ul>
              )}
            </li>
            <li
              className="dropdown"
              onMouseEnter={() => handleMouseEnter('softFish')}
              onMouseLeave={handleMouseLeave}
            >
              Soft Fish
              {dropdown === 'softFish' && (
                <ul className="dropdown-menu dropdown-menu-softfish">
                  <li><Link to="/soft-fish/type1">Gold Fish</Link></li>
                  <li><Link to="/soft-fish/type2">Molly</Link></li>
                  <li><Link to="/soft-fish/type3">Tetras</Link></li>
                  <li><Link to="/soft-fish/type4">Tiger Barbs</Link></li>
                  <li><Link to="/soft-fish/type5">Angel Fish</Link></li>
                </ul>
              )}
            </li>
            <li
              className="dropdown"
              onMouseEnter={() => handleMouseEnter('livePlants')}
              onMouseLeave={handleMouseLeave}
            >
              Live Plants
              {dropdown === 'livePlants' && (
                <ul className="dropdown-menu dropdown-menu-liveplants">
                  <li><Link to="/live-plants/Waterplants">Water Plants</Link></li>
                  <li><Link to="/live-plants/artificialplants">Artificial Plants</Link></li>
                  
                </ul>
              )}
            </li>
          </ul>
        </nav>
      </div>
      <div className="header-right">
        {isLoggedIn ? (
          <>
            <span className="cart-icon">
              <Link to="/cart">
                <i className="fas fa-shopping-cart"></i>
                {cartItems.length > 0 && <span className="cart-badge">{cartItems.length}</span>}
              </Link>
            </span>
            <button className="btn btn-secondary" onClick={onLogout}>Logout</button>
          </>
        ) : (
          <>
            <button className="btn btn-primary" onClick={onLoginClick}>Login</button>
            <button className="btn btn-secondary" onClick={onSignupClick}>Sign Up</button>
          </>
        )}
      </div>
    </header>
  );
}

export default Header;
