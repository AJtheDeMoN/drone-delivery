import React from 'react';
import '../styles/index.css';

const AboutUs = () => {
  return (
    // <div className="bg-gray-100 min-h-screen flex flex-col justify-center items-center text-gray-800">
    <div className='bg-gray-100 min-h-screen  p-4'>
      <header className="text-center mb-8">
        <h1 className="text-3xl font-semibold mb-4">SkyMed Help</h1>
        <p className="text-xl text-left">Delivering medical supplies to remote areas with precision and speed.</p>
      </header>
      <section className="my-8 text-left">
        <h2 className="text-2xl font-semibold mb-4 text-blue-600">How it Works</h2>
        <p className="mb-4 text-md">
          Our drone delivery system ensures swift and secure transportation of essential medical supplies to remote and inaccessible areas.
        </p>
        <ul className="list-disc pl-4">
          <li>Automated Route Planning: Drones autonomously plan the most efficient routes for delivery.</li>
          <li>Real-time Tracking: Monitor the location and status of deliveries in real-time.</li>
          <li>Emergency Response: Rapid delivery of medical supplies during emergencies.</li>
        </ul>
      </section>
      <section className="my-8 text-left">
        <h2 className="text-2xl font-semibold mb-4 text-green-600">Why Choose Us?</h2>
        <p className="mb-4 text-md">
          We prioritize reliability, speed, and precision in delivering medical supplies, especially in areas where traditional transportation methods face challenges.
        </p>
        <ul className="list-disc pl-4">
          <li>Fast and Reliable: Delivering medical supplies with speed and accuracy.</li>
          <li>Remote Accessibility: Reaching areas that are difficult to access through traditional means.</li>
          <li>Life-Saving Impact: Making a difference in emergency situations and critical medical needs.</li>
        </ul>
      </section>
     </div>
  );
};

export default AboutUs;
