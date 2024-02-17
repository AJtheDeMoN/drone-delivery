// FeedbackAndRating.js
import React, { useState } from 'react';
import '../styles/index.css';
import { StarIcon } from '@heroicons/react/solid'; // Import the StarIcon from Heroicons

const FeedbackAndRating = () => {
  const [feedback, setFeedback] = useState('');
  const [rating, setRating] = useState(0);

  const handleFeedbackChange = (e) => {
    setFeedback(e.target.value);
  };

  const handleRatingChange = (e) => {
    setRating(Number(e.target.value));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your feedback and rating submission logic here (e.g., send data to the backend)
    console.log('Feedback:', feedback);
    console.log('Rating:', rating);
  };

  const renderStars = () => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <label key={i} className="cursor-pointer">
          <input
            type="radio"
            name="rating"
            value={i}
            checked={rating === i}
            onChange={handleRatingChange}
            className="hidden"
          />
          <StarIcon
            className={`w-6 h-6 text-yellow-500 transition duration-300 ${
              rating >= i ? 'animate-bounce' : ''
            }`}
          />
        </label>
      );
    }
    return stars;
  };

  return (
    <div className="bg-gray-100 min-h-screen p-4">
      <h2 className="text-3xl font-bold mb-4">Feedback and Rating</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="feedback" className="block text-gray-700 text-sm font-bold mb-2">
            Your Feedback:
          </label>
          <textarea
            id="feedback"
            name="feedback"
            value={feedback}
            onChange={handleFeedbackChange}
            rows="4"
            className="w-full p-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="rating" className="block text-gray-700 text-sm font-bold mb-2">
            Your Rating:
          </label>
          <div className="flex items-center">{renderStars()}</div>
        </div>
        <button type="submit" className="bg-blue-500 text-white p-2 rounded hover:bg-blue-700">
          Submit Feedback
        </button>
      </form>
    </div>
  );
};

export default FeedbackAndRating;
