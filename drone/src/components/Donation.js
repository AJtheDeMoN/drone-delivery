// Donation.js
import React, { useState } from 'react';
import '../styles/index.css'

const Donation = () => {
  const [donationData, setDonationData] = useState({
    fullName: '',
    email: '',
    amount: '',
  });

  const handleChange = (e) => {
    setDonationData({
      ...donationData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your donation submission logic here (e.g., send data to the backend)
    console.log('Donation form submitted:', donationData);
  };

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col justify-center items-center">
      <h2 className="text-3xl font-bold mb-4">Make a Donation</h2>
      <form className="w-1/3" onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="fullName" className="block text-gray-700 text-sm font-bold mb-2">
            Full Name:
          </label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={donationData.fullName}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
            Email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={donationData.email}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="amount" className="block text-gray-700 text-sm font-bold mb-2">
            Donation Amount ($):
          </label>
          <input
            type="number"
            id="amount"
            name="amount"
            value={donationData.amount}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
        </div>
        <button type="submit" className="bg-green-500 text-white p-2 rounded hover:bg-green-700">
          Donate
        </button>
      </form>
    </div>
  );
};

export default Donation;
