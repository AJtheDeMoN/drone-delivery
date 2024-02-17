// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/home';
import Navbar from './components/Navbar';
import Signup from './components/Signup';
import Signin from './components/Signin';
import Donation from './components/Donation';
import EmergencyHelp from './components/EmergencyHelp';
import Footer from './components/Footer';
import FAQ from './components/FAQ';
import UserDashboard from './components/UserDashboard';
import TermsAndConditions from './components/TandC';
import AboutUs from './components/AboutUs';
import FeedbackAndRating from './components/FandR';
import AdminPage from './components/Admin';
const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/donate" element={<Donation />} />
        <Route path="/emergency-help" element={<EmergencyHelp />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/dashboard" element={<UserDashboard />} />
        <Route path="/feedback-and-rating" element={<FeedbackAndRating />} />
        <Route path='/requests' element={<AdminPage/>}/>
        {/* Add more routes as needed */}
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
