// UserDashboard.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from '../firebase';
import '../styles/index.css';

const UserDashboard = () => {
  const navigate = useNavigate();

  // Sample user data (replace this with actual data from your application)
  const userData = {
    name: 'John Doe',
    phoneNumber: '123-456-7890',
  };

  const handleGetRelief = () => {
    // Add logic for the "Get Relief" button action
    alert('Get Relief button clicked!');
  };

  const handleSignOut = async () => {
    try {
      // Sign out the user
      await auth.signOut();

      // Redirect to the home page after sign-out
      navigate('/');
    } catch (error) {
      console.error('Sign-out failed:', error.message);
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col justify-center items-center">
      <h2 className="text-3xl font-bold mb-4">User Dashboard</h2>
      <div className="mb-4">
        <p className="text-gray-700 text-sm font-bold">Name:</p>
        <p>{userData.name}</p>
      </div>
      <div className="mb-4">
        <p className="text-gray-700 text-sm font-bold">Phone Number:</p>
        <p>{userData.phoneNumber}</p>
      </div>
      <button
        onClick={handleGetRelief}
        className="bg-blue-500 text-white p-2 rounded hover:bg-blue-700 mr-2"
      >
        Get Relief
      </button>
      <button
        onClick={handleSignOut}
        className="bg-red-500 text-white p-2 rounded hover:bg-red-700"
      >
        Sign Out
      </button>
    </div>
  );
};

export default UserDashboard;
