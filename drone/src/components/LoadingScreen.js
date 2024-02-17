// LoadingScreen.js
import React from 'react';

const LoadingScreen = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="p-4 bg-white rounded shadow-md text-center">
        <h2 className="text-xl font-semibold mb-2">Loading...</h2>
        <div className="animate-spin rounded-full h-12 w-12 border-b-4 border-blue-500"></div>
      </div>
    </div>
  );
};

export default LoadingScreen;
