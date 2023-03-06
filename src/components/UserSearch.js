import React, { useState } from 'react';


import axios from "axios";

function UserSearch() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [results, setResults] = useState([]);

  function handleSubmit(event) {
    event.preventDefault();
    axios.get(`http://localhost:8000/api/users/?username=${username}&email=${email}`)
      .then(response => setResults(response.data));
  }

  return (
    <div>
      <h2>Rechercher des utilisateurs</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Nom d'utilisateur :</label>
          <input type="text" id="username" value={username} onChange={event => setUsername(event.target.value)} />
        </div>
        <div>
          <label htmlFor="email">Adresse e-mail :</label>
          <input type="email" id="email" value={email} onChange={event => setEmail(event.target.value)} />
        </div>
        <button type="submit">Rechercher</button>
      </form>
      <ul>
        {results.map(user => (
          <li key={user.id}>
            <a href={`/users/${user.id}`}>{user.username} ({user.email})</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserSearch;
