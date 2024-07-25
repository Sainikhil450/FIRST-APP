import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import Slider from 'react-slick';
import Header from './Header';
import plantImage from './Images/plants.jpg';
import parrotImage2 from './Images/blood red parrot.webp';
import goldImage3 from './Images/gold fish.jpeg';

import fishImage1 from './Images/Red Parrot.jpg'; 
import fishImage2 from './Images/Yellow cichlid.jpg'; 
import fishImage3 from './Images/Oscar fish.jpg'; 
import fishImage4 from './Images/tiger barb.jpeg'; 
import fishImage5 from './Images/gold fish1.webp'; 

// plants
import PlantImage1 from './Images/Ceratopteris.jpeg'; 
import PlantImage2 from './Images/Echinodorus cordifolius.jpeg'; 
import PlantImage3 from './Images/Rotala green mint.jpeg'; 
import PlantImage4 from './Images/Pogostemon stellatus.jpeg'; 
import PlantImage5 from './Images/Hygrophila.jpg'; 

import './Home.css';

function Home({ isLoggedIn, onLogout }) {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000
    };

    return (
        <div className="home">
            <Header isLoggedIn={isLoggedIn} onLogout={onLogout} />
            <Slider {...settings} className="carousel">
                <div>
                    <img src={plantImage} alt="Plants" className="carousel-image" />
                </div>
                <div>
                    <img src={parrotImage2} alt="Blood Red Parrot Fish" className="carousel-image" />
                </div>
                <div>
                    <img src={goldImage3} alt="Gold Fish" className="carousel-image" />
                </div>
            </Slider>
            <h1 className="heading">AQUATIC PLANTS & FISH</h1>
            <div className="product-container">
                <Link to="/wild-fish/parrot" className="product-link">
                    <div className="product">
                        <img src={fishImage1} alt="Red Parrot Fish" className="product-image" />
                        <div className="product-info">
                            <p className="product-name">Red Parrot</p>
                            <p className="product-price">₹999</p>
                            <button className="buy-button">Buy Now</button>
                        </div>
                    </div>
                </Link>
                <div className="product">
                    <img src={fishImage2} alt="Yellow Cichlid" className="product-image" />
                    <div className="product-info">
                        <p className="product-name">Yellow Cichlid</p>
                        <p className="product-price">₹200</p>
                        <button className="buy-button">Buy Now</button>
                    </div>
                </div>
                <div className="product">
                    <img src={fishImage3} alt="Oscar" className="product-image" />
                    <div className="product-info">
                        <p className="product-name">Oscar</p>
                        <p className="product-price">₹300</p>
                        <button className="buy-button">Buy Now</button>
                    </div>
                </div>
                <div className="product">
                    <img src={fishImage4} alt="Tiger Barb" className="product-image" />
                    <div className="product-info">
                        <p className="product-name">Tiger Barb</p>
                        <p className="product-price">₹50</p>
                        <button className="buy-button">Buy Now</button>
                    </div>
                </div>
                <div className="product">
                    <img src={fishImage5} alt="Gold Fish" className="product-image" />
                    <div className="product-info">
                        <p className="product-name">Gold Fish</p>
                        <p className="product-price">₹30</p>
                        <button className="buy-button">Buy Now</button>
                    </div>
                </div>
                {/* Add plants */}
                <div className="product">
                    <img src={PlantImage1} alt="Ceratopteris" className="product-image" />
                    <div className="product-info">
                        <p className="product-name">Ceratopteris</p>
                        <p className="product-price">₹129</p>
                        <button className="buy-button">Buy Now</button>
                    </div>
                </div>
                <div className="product">
                    <img src={PlantImage2} alt="Echinodorus Cordifolius" className="product-image" />
                    <div className="product-info">
                        <p className="product-name">Echinodorus Cordifolius</p>
                        <p className="product-price">₹90</p>
                        <button className="buy-button">Buy Now</button>
                    </div>
                </div>
                <div className="product">
                    <img src={PlantImage3} alt="Rotala Green Mint" className="product-image" />
                    <div className="product-info">
                        <p className="product-name">Rotala Green Mint</p>
                        <p className="product-price">₹79</p>
                        <button className="buy-button">Buy Now</button>
                    </div>
                </div>
                <div className="product">
                    <img src={PlantImage4} alt="Pogostemon Stellatus" className="product-image" />
                    <div className="product-info">
                        <p className="product-name">Pogostemon Stellatus</p>
                        <p className="product-price">₹99</p>
                        <button className="buy-button">Buy Now</button>
                    </div>
                </div>
                <div className="product">
                    <img src={PlantImage5} alt="Hygrophila" className="product-image" />
                    <div className="product-info">
                        <p className="product-name">Hygrophila</p>
                        <p className="product-price">₹89</p>
                        <button className="buy-button">Buy Now</button>
                    </div>
                </div>
            </div>
            <footer className="footer">
                <p>Copyright 2024 © MyApp. All Rights Reserved. MyApp Trade Mark is registered.</p>
            </footer>
        </div>
    );
}

export default Home;
