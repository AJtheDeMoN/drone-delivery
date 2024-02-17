// AdminPage.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AdminPage = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Fetch users from the backend on component mount
    const fetchUsers = async () => {
      try {
        const response = await axios.get('http://localhost:5000/requests');
        setUsers(response.data);
      } catch (error) {
        console.error('Error fetching users', error);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div>
      <h1>Admin Page</h1>
      <ul>
        {users.map(user => (
          <li key={user.id}>{JSON.stringify(user.data)}</li>
        ))}
      </ul>
    </div>
  );
};

export default AdminPage;