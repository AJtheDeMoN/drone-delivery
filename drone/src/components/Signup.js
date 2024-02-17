// Signup.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';  // Import useNavigate instead of useHistory
import LoadingScreen from './LoadingScreen';
import '../styles/index.css';
import { useAuth } from '../AuthContext';
const Signup = () => {
  const {register} = useAuth();
  const history = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    phoneNumber: '',  // New field for phone number
  });

  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    console.log(formData)
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
  
    try {
      // Create user with Firebase
      // const userCredential = await createUserWithEmailAndPassword(auth, formData.email, formData.password);
      // const user = userCredential.user;
      register(formData.email, formData.password, formData.name, formData.phoneNumber).then((user)=>{
        console.log(user)
        alert('User registered successfully!');
        history.push('/');
        setIsLoading(false);
      })
      .catch((err)=>{console.log(err); setIsLoading(false)})
      // // Store additional user information in Firestore
      // await firestore.collection('users').doc(user.uid).set({
      //   name: formData.name,
      //   email: formData.email,
      //   phoneNumber: formData.phoneNumber,
      // });
  
      // Alert and redirect after successful registration
    } catch (error) {
      console.error('Signup failed:', error.message);
      // Set loading to false in case of an error
      setIsLoading(false);
    }
  };
  

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col justify-center items-center">
      <h2 className="text-3xl font-bold mb-4">Signup</h2>
      {isLoading ? (
        <LoadingScreen />
      ) : (
        <form className="w-1/3">
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">
              Name:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
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
          <div className="mb-4">
            <label htmlFor="phoneNumber" className="block text-gray-700 text-sm font-bold mb-2">
              Phone Number:
            </label>
            <input
              type="text"
              id="phoneNumber"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            />
          </div>
          <button type="submit" onClick={handleSubmit} className="bg-blue-500 text-white p-2 rounded hover:bg-blue-700">
            Signup
          </button>
        </form>
      )}
    </div>
  );
};

export default Signup;
