import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../CartContext'; // Import useCart
import './Molly.css'; // Ensure the correct path to your CSS file
import fishImage1 from './Images/Softfish/Molly/Black Ballon molly.webp';
import fishImage2 from './Images/Softfish/Molly/Calico Ballon Molly.webp';
import fishImage3 from './Images/Softfish/Molly/balloon molly fish.jpg';
import fishImage4 from './Images/Softfish/Molly/Orange ballon molly.jpg';
import fishImage5 from './Images/Softfish/Molly/white1.jpg';
import fishImage6 from './Images/Softfish/Molly/Black molly.webp';
import fishImage7 from './Images/Softfish/Molly/red molly.webp';
import fishImage8 from './Images/Softfish/Molly/Black & yellow molly.jpg';
const Molly = () => {
  const { addToCart } = useCart(); // Get addToCart function from CartContext

  const fishData = [
    { id: 1, src: fishImage1, basePrice: 39, name: 'Black Ballon Molly', description: 'A beautiful Black Ballon Molly fish.' },
    { id: 2, src: fishImage2, basePrice: 39, name: 'Calico Ballon Molly', description: 'A beautiful Calico Ballon Molly fish.' },
    { id: 3, src: fishImage3, basePrice: 49, name: 'Redcap Gold Fish', description: 'A beautiful Redcap Gold fish.' },
    { id: 4, src: fishImage4, basePrice: 39, name: 'Redcap Gold Fish', description: 'A beautiful Redcap Gold fish.' },
    { id: 5, src: fishImage5, basePrice: 29, name: 'Redcap Gold Fish', description: 'A beautiful Redcap Gold fish.' },
    { id: 6, src: fishImage6, basePrice: 29, name: 'Redcap Gold Fish', description: 'A beautiful Redcap Gold fish.' },
    { id: 7, src: fishImage7, basePrice: 29, name: 'Redcap Gold Fish', description: 'A beautiful Redcap Gold fish.' },
    { id: 8, src: fishImage8, basePrice: 29, name: 'Redcap Gold Fish', description: 'A beautiful Redcap Gold fish.' },
  ];

  // Initialize quantities state to match the length of fishData
  const [quantities, setQuantities] = useState(fishData.map(() => 2));

  const handleQuantityChange = (index, change) => {
    setQuantities(prevQuantities => {
      const newQuantities = [...prevQuantities];
      newQuantities[index] = Math.max(2, newQuantities[index] + change);
      return newQuantities;
    });
  };

  const calculateTotalPrice = (basePrice, quantity) => {
    return basePrice * (quantity / 2);
  };

  return (
    <div className="fish-container">
      <h2 className="fish-title">Gold Fish</h2>
      <div className="fish-items">
        {fishData.map((item, index) => (
          <div key={item.id} className="fish-item">
            <div className="fish-image-container">
              <img src={item.src} alt={item.name} className="fish-image" />
            </div>
            <div className="fish-details">
              <h3 className="fish-name">{item.name}</h3>
              <p className="fish-description">{item.description}</p>
              <p className="fish-price">₹{calculateTotalPrice(item.basePrice, quantities[index])}</p>
              <div className="quantity-controls">
                <button onClick={() => handleQuantityChange(index, -2)}>-</button>
                <span>{quantities[index]}</span>
                <button onClick={() => handleQuantityChange(index, 2)}>+</button>
              </div>
              <div className="fish-buttons">
                <button className="buy-now-button">Buy Now</button>
                <button
                  className="add-to-cart-button"
                  onClick={() => addToCart({ ...item, quantity: quantities[index] })}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Link to="/" className="back-home-button">Back to Home</Link>
    </div>
  );
};

export default Molly;
