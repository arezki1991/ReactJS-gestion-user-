import React, { useState, useEffect } from 'react';
import api from './api';
import CreateUserForm from './CreateUserForm';
import UserDetail from './components/UserDetail';
import UserSearch from './components/UserSearch';
function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await api.get('/api/users/');
      setUsers(response.data);
    };
    fetchUsers();
  }, []);

  return (
    <div>
      <h1>Hello World</h1>
      <h2>List of Users</h2>
      <ul>
        {users.map(user => (
          <li key={user.id}>
            <h3>{user.username}</h3>
            <p>{user.email}</p>
            <p>{user.profile.hometown}</p>
            <p>{user.profile.age}</p>
            <p>{user.profile.gender}</p>
          </li>
        ))}
      </ul>
      <h2>Create a User</h2>
      <CreateUserForm />
    </div>
  );
}

export default App;
