// Signin.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';  // Import useNavigate instead of useHistory
// import { auth } from '../firebase';
import LoadingScreen from './LoadingScreen';
import { useAuth } from '../AuthContext';
import '../styles/index.css';

const Signin = () => {
  const navigate = useNavigate();  // Replace useHistory with useNavigate
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const {login} = useAuth();
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // Sign in with Firebase
      // await auth.signInWithEmailAndPassword(formData.email, formData.password);
      login(formData.email,formData.password).then((user)=>{
        setIsLoading(false);
        navigate('/');
      })
      .catch((error)=>{
        console.error('Signin failed:', error.message);
        setIsLoading(false);
      })
      // Redirect to the home page after successful sign-in
    } catch (error) {
      console.error('Signin failed:', error.message);
      // Set loading to false in case of an error
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col justify-center items-center">
      <h2 className="text-3xl font-bold mb-4">Signin</h2>
      {isLoading ? (
        <LoadingScreen />
      ) : (
        <form className="w-1/3" onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">
              Password:
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            />
          </div>
          <button type="submit" className="bg-blue-500 text-white p-2 rounded hover:bg-blue-700">
            Signin
          </button>
        </form>
      )}
    </div>
  );
};

export default Signin;
