// FAQ.js
import React from 'react';
import '../styles/index.css'

const FAQ = () => {
  const faqs = [
    {
      question: 'How does the medical drone delivery system work?',
      answer: 'Our system uses automated drones to deliver medical supplies to remote areas. Drones autonomously plan the most efficient routes for delivery.'
    },
    {
      question: 'How can I track my medical supply delivery?',
      answer: 'You can track your delivery in real-time using the tracking ID provided. Enter the ID on our tracking page to view the current status and location of your delivery.'
    },
    {
      question: 'What types of medical supplies can be delivered?',
      answer: 'We deliver a wide range of essential medical supplies, including medications, vaccines, and emergency medical kits.'
    },
    // Add more FAQs as needed
  ];

  return (
    <div className="bg-gray-100 min-h-screen p-4">
      <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions (FAQs)</h2>
      <ul className="list-disc pl-4">
        {faqs.map((faq, index) => (
          <li key={index} className="mb-4">
            <h3 className="text-xl font-bold">{faq.question}</h3>
            <p>{faq.answer}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FAQ;
