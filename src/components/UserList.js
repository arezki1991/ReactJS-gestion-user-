import React, { useEffect, useState } from 'react';


import axios from "axios";

function UserList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8000/api/users/")
      .then(response => setUsers(response.data));
  }, []);

  return (
    <div>
      <h2>Liste des utilisateurs</h2>
      <ul>
        {users.map(user => (
          <li key={user.id}>
            <a href={`/users/${user.id}`}>{user.username} ({user.email})</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserList;
