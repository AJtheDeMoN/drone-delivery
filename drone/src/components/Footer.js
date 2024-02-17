// Footer.js
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const linkStyle = {
    textDecoration: 'none', // Remove underline
    color: 'black',        // Set link color
    text: 'right'
  };

  return (
    <footer className="bg-gray-300 text-black font-bold p-4 text-center"> {/* Added text-right class */}
      <p>Contact us at: <a style={linkStyle} href="mailto:info@medicaldronedelivery.com">info@medicaldronedelivery.com</a></p>
      <p className="text-right"><Link style={linkStyle} to="/faq">FAQ</Link></p>
      <p className="text-right"><Link style={linkStyle} to="/about-us">About Us</Link></p>
      <p className="text-right"><Link style={linkStyle} to="/feedback-and-rating">Feedback and Rating</Link></p>
      <p className="text-right"><Link style={linkStyle} to="/terms-and-conditions">Terms and Conditions</Link></p>
    </footer>
  );
};

export default Footer;

