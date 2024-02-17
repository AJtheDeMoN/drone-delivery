// AdminPage.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/index.css'; // Import the styles fil

const AdminPage = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Fetch users from the backend on component mount
    const fetchUsers = async () => {
      try {
        const response = await axios.get('https://backend-ota2.onrender.com/requests');
        setUsers(response.data);
      } catch (error) {
        console.error('Error fetching users', error);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div className="container mx-auto p-4"> {/* Add Tailwind CSS classes */}
      <h1 className="text-4xl font-bold mb-4">Admin Page</h1>
      <ul>
        {users.map(user => (
          <li key={user.id} className="mb-2 p-2 border border-gray-300 rounded">
            {user.data.name}
            {JSON.stringify(user.data.location)}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminPage;
