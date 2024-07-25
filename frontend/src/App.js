import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Signup from './components/Signup';
import Login from './components/Login';
import Home from './components/Home';
import WildFish from './components/WildFish';
import ParrotFish from './components/ParrotFish';
import OscarFish from './components/OscarFish';
import CichlidFish from './components/CichlidFish';
import Gourami from './components/Gourami';
import Softfish from './components/Softfish';
import Goldfish from './components/Goldfish';
import Molly from './components/Molly';
import Cart from './components/Cart'; // Import Cart component
import { CartProvider } from './CartContext'; // Import CartProvider
import Tetras from './components/Tetras';
import Tigerbarbs from './components/Tigerbarbs';
import Anglefish from './components/Anglefish';
import LivePlants from './components/LivePlants';
import Waterplants from './components/Waterplants';
import Artpants from './components/Artpants';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <CartProvider>
      <Router>
        <Routes>
          <Route path="/" element={isLoggedIn ? <Navigate to="/home" /> : <Login onLogin={handleLogin} />} />
          <Route path="/signup" element={isLoggedIn ? <Navigate to="/home" /> : <Signup />} />
          <Route path="/home" element={isLoggedIn ? <Home isLoggedIn={isLoggedIn} onLogout={handleLogout} /> : <Navigate to="/" />} />
          <Route path="/wild-fish" element={<WildFish />} />
          <Route path="/wild-fish/parrot" element={<ParrotFish />} />
          <Route path="/wild-fish/oscar" element={<OscarFish />} />
          <Route path="/wild-fish/type3" element={<CichlidFish />} />
          <Route path="/wild-fish/type4" element={<Gourami />} />
          <Route path="/soft-fish" element={<Softfish />} />
          <Route path="/soft-fish/type1" element={<Goldfish />} />
          <Route path="/soft-fish/type2" element={<Molly />} />
          <Route path="/soft-fish/type3" element={<Tetras />} />
          <Route path="/soft-fish/type4" element={<Tigerbarbs />} />
          <Route path="/soft-fish/type5" element={<Anglefish />} />
          <Route path="/live-plant" element={<LivePlants />} />
          <Route path="/live-plants/Waterplants" element={<Waterplants />} />
          <Route path="/live-plants/artificialplants" element={<Artpants />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;
