import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../CartContext'; // Import useCart
import './Cichlid.css'; // Ensure the correct path to your CSS file
import fishImage1 from './Images/Yellow cichlid.jpg';
import fishImage2 from './Images/White cichlid.jpg';
import fishImage3 from './Images/Orange cichlid.webp';
import fishImage4 from './Images/Blue cichlid.jpg';
import fishImage5 from './Images/Jewel cichlid.webp';
import fishImage6 from './Images/Firemouth cichlid.webp';
import fishImage7 from './Images/Yellowbird peacock cichlid.webp';

const OscarFish = () => {
  const [quantities, setQuantities] = useState([2, 2, 2, 2]);
  const { addToCart } = useCart(); // Get addToCart function from CartContext

  const fishData = [
    { id: 1, src: fishImage1, basePrice: 129, name: 'Yellow Cichlid Fish', description: 'A beautiful Yellow cichlid fish.' },
    { id: 2, src: fishImage2, basePrice: 149, name: 'White Cichlid Fish', description: 'A beautiful White cichlid fish.' },
    { id: 3, src: fishImage3, basePrice: 129, name: 'Orange Cichlidr Fish', description: 'A beautiful Orange cichlid fish.' },
    { id: 4, src: fishImage4, basePrice: 129, name: 'Blue Cichlid', description: 'A beautiful Blue cichlid fish.' },
    { id: 5, src: fishImage5, basePrice: 99, name: 'Jewel Cichlid Fish', description: 'A beautiful Jewel cichlid fish.' },
    { id: 6, src: fishImage6, basePrice: 119, name: 'Firemouth Cichlid Fish', description: 'A beautiful Firemouth cichlid fish.' },
    { id: 7, src: fishImage7, basePrice: 110, name: 'Yellowbird peacock Cichlid Fish', description: 'A beautiful Yellowbird peacock cichlid fish.' },
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
