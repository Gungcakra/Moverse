// src/components/Navbar.js
import React from 'react';
import logoNav from "../assets/images/logoNav.png";
import "../assets/css/NavBar.css"
const Navbar = () => {
  return (
    <nav className="p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-2 pl-8 mx-8">
          <img src={logoNav} alt="Logo" style={{ maxWidth: '50px' }} />
          <a href="/" className="text-white text-2xl font-bold">MOVERSE</a>
        </div>

        <div className="space-x-12 pr-8 mr-8">
          <a href="/" className="text-gray-300 hover:text-white">Home</a>
          <a href="/about" className="text-gray-300 hover:text-white">About</a>
          <a href="/movie" className="text-gray-300 hover:text-white">Movie</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
