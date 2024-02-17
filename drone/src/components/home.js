import React from 'react';
import '../styles/index.css';
import backgroundImage from '../images/bg.png';

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center"
    style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover' }}>
      
    </div>
  );
};

export default Home;
