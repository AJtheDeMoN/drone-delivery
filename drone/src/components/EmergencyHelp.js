// EmergencyHelp.js
import React, { useState } from 'react';
import GoogleMap from './GoogleMap';
import { setDoc, doc, collection, updateDoc } from 'firebase/firestore';
import { useAuth } from '../AuthContext';
import {auth, db} from '../firebase'
const EmergencyHelp = () => {
  const [emergencyData, setEmergencyData] = useState({
    fullName: '',
    contactNumber: '',
    location: '',
    description: '',
  });
  const [currLocation, setcurrLocation]=useState(null)
  if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition((p)=>{
      setcurrLocation({lat: p.coords.latitude, lng: p.coords.longitude})
    })
  } 
  const {currentUser}=useAuth(); 
  const handleChange = (e) => {
    setEmergencyData({
      ...emergencyData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your emergency help submission logic here (e.g., send data to the backend)
    console.log(currentUser)
    const ref=collection(db, "users")
    updateDoc(doc(ref, currentUser), {
      location: currLocation
    })
    .then(()=>console.log('success!'))
    .catch((e)=>console.log(e))
    console.log('Emergency help form submitted:', emergencyData);
  };

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col justify-center items-center">
      <h2 className="text-3xl font-bold mb-4">Request Emergency Help</h2>
      <form className="w-1/3" onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="fullName" className="block text-gray-700 text-sm font-bold mb-2">
            Full Name:
          </label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={emergencyData.fullName}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="contactNumber" className="block text-gray-700 text-sm font-bold mb-2">
            Contact Number:
          </label>
          <input
            type="tel"
            id="contactNumber"
            name="contactNumber"
            value={emergencyData.contactNumber}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="location" className="block text-gray-700 text-sm font-bold mb-2">
            Medical Supplies Required:
          </label>
          <input
            type="text"
            id="location"
            name="location"
            value={emergencyData.location}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="description" className="block text-gray-700 text-sm font-bold mb-2">
            Emergency Description:
          </label>
          <textarea
            id="description"
            name="description"
            value={emergencyData.description}
            onChange={handleChange}
            rows="4"
            className="w-full p-2 border rounded"
          />
        </div>
        <button type="submit" className="bg-red-500 text-white p-2 rounded hover:bg-red-700">
          Request Help
        </button>
      </form>
      <GoogleMap currLocation={currLocation}/>
    </div>
  );
};

export default EmergencyHelp;
