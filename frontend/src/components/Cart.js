import React from 'react';
import { useCart } from '../CartContext'; // Import useCart
import { Link } from 'react-router-dom'; // Import Link for navigation
import './Cart.css'; // Import your CSS file for styling

const Cart = () => {
  const { cartItems, removeFromCart } = useCart(); // Get cart functions from CartContext

  return (
    <div className="cart-container">
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul className="cart-items">
          {cartItems.map(item => (
            <li key={item.id} className="cart-item">
              <img src={item.src} alt={item.name} className="cart-item-image" />
              <div className="cart-item-details">
                <h3>{item.name}</h3>
                <p>Quantity: {item.quantity}</p>
                <p>Price: ₹{item.basePrice * (item.quantity / 2)}</p>
                <button onClick={() => removeFromCart(item.id)}>Remove</button>
              </div>
            </li>
          ))}
        </ul>
      )}
      <Link to="/home" className="back-home-button">Back to Home</Link>
    </div>
  );
};

export default Cart;
