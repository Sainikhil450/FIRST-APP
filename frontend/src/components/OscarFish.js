import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../CartContext'; // Import useCart
import './Oscar.css'; // Ensure the correct path to your CSS file
import fishImage1 from './Images/Oscar fish.jpg';
import fishImage2 from './Images/Tiger Oscar.webp';
import fishImage3 from './Images/Copper Oscar.jpg';


const OscarFish = () => {
  const [quantities, setQuantities] = useState([2, 2, 2, 2]);
  const { addToCart } = useCart(); // Get addToCart function from CartContext

  const fishData = [
    { id: 1, src: fishImage1, basePrice: 299, name: 'Mango Oscar Fish', description: 'A beautiful Mango Oscar fish.' },
    { id: 2, src: fishImage2, basePrice: 749, name: 'Tiger Oscar Fish', description: 'A beautiful Tiger Oscar fish.' },
    { id: 3, src: fishImage3, basePrice: 549, name: 'Copper Oscar Fish', description: 'A beautiful Copper Oscar fish.' },
    
  ];

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
      <h2 className="fish-title">Oscar Fish</h2>
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

export default OscarFish;
