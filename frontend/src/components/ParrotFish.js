import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../CartContext'; // Import useCart
import './ParrotFish.css';
import fishImage1 from './Images/Red Parrot.jpg';
import fishImage2 from './Images/Yellow Parrot.jpg';
import fishImage3 from './Images/Blue Parrot.jpg';
import fishImage4 from './Images/Orange Parrot.webp';

const ParrotFish = () => {
  const [quantities, setQuantities] = useState([2, 2, 2, 2]);
  const { addToCart } = useCart(); // Get addToCart function from CartContext

  const fishData = [
    { id: 1, src: fishImage1, basePrice: 999, name: 'Red Parrot Fish', description: 'A beautiful red parrot fish.' },
    { id: 2, src: fishImage2, basePrice: 749, name: 'Yellow Parrot Fish', description: 'A beautiful yellow parrot fish.' },
    { id: 3, src: fishImage3, basePrice: 549, name: 'Blue Parrot Fish', description: 'A beautiful blue parrot fish.' },
    { id: 4, src: fishImage4, basePrice: 499, name: 'Orange Parrot Fish', description: 'A beautiful orange parrot fish.' },
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

  const handlePayment = (amount) => {
    const options = {
      key: 'YOUR_RAZORPAY_KEY', // Enter the Key ID generated from the Dashboard
      amount: amount * 100, // Razorpay accepts amount in paisa
      currency: 'INR',
      name: 'Your Company Name',
      description: 'Test Transaction',
      image: 'https://example.com/your_logo',
      handler: function (response) {
        alert('Payment successful!');
        // You can handle payment success here
      },
      prefill: {
        name: 'Customer Name',
        email: 'customer@example.com',
        contact: '9999999999'
      },
      notes: {
        address: 'Customer Address'
      },
      theme: {
        color: '#3399cc'
      }
    };

    const rzp1 = new window.Razorpay(options);
    rzp1.on('payment.failed', function (response) {
      alert('Payment failed!');
      // You can handle payment failure here
    });
    rzp1.open();
  };

  return (
    <div className="fish-container">
      <h2 className="fish-title">Parrot Fish</h2>
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
                <button
                  className="buy-now-button"
                  onClick={() => handlePayment(calculateTotalPrice(item.basePrice, quantities[index]))}
                >
                  Buy Now
                </button>
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

export default ParrotFish;
