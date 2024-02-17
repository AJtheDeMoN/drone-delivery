// TermsAndConditions.js
import React from 'react';
import '../styles/index.css'

const TermsAndConditions = () => {
  const terms = [
    {
      section: '1. Acceptance of Terms',
      content: 'By using our medical drone delivery system, you agree to comply with and be bound by these Terms and Conditions.'
    },
    {
      section: '2. User Responsibilities',
      content: 'Users are responsible for providing accurate information during signup, ensuring the security of their account, and complying with local laws and regulations.'
    },
    {
      section: '3. Delivery Disclaimer',
      content: 'While we strive for accurate and timely deliveries, we do not guarantee the availability or accuracy of our services in all locations.'
    },
    // Add more terms and conditions as needed
  ];

  return (
    <div className="bg-gray-100 min-h-screen p-4">
      <h2 className="text-3xl font-bold mb-4">Terms and Conditions</h2>
      <ul className="list-disc pl-4">
        {terms.map((term, index) => (
          <li key={index} className="mb-4">
            <h3 className="text-xl font-bold">{term.section}</h3>
            <p>{term.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TermsAndConditions;
