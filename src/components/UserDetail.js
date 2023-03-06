import React, { useState, useEffect } from 'react';
import axios from 'axios';

function UserDetail(props) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      const response = await axios.get(`http://localhost:8000/api/users/${props.match.params.id}/`);
      setUser(response.data);
    }
    fetchUser();
  }, [props.match.params.id]);

  if (!user) {
    return <div>Loading...</div>
  }

  return (
    <div>
      <h1>Détail de l'utilisateur</h1>
      <p>Prénom : {user.first_name}</p>
      <p>Nom : {user.last_name}</p>
      <p>Email : {user.email}</p>
    </div>
  );
}

export default UserDetail;
