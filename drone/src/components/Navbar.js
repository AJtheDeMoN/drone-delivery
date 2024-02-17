// Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/index.css';
import logoImage from './Logo.jpg';

const Navbar = () => {
  return (
    <nav className="bg-gray-300 p-4">
      <div className="container mx-auto flex justify-between items-center">
        
        <Link to="/" className="text-black font-bold">
        <div>
        <img src={logoImage} alt="Logo" className="logo-image w-22 h-12" />
        </div>
        </Link>
        <div className="flex space-x-4">
          <Link to="/signup" className="text-black font-bold">
            Signup
          </Link>
          <Link to="/signin" className="text-black font-bold ">
            Signin
          </Link>
          <Link to="/emergency-help" className="text-black font-bold">
            Emergency Help
          </Link>
          <Link to="/donate" className="text-black font-bold">
            Donate
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
