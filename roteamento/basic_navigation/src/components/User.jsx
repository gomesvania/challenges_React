import React from 'react'

import { useParams } from 'react-router-dom';

const User = () => {
  let { userId } = useParams();

  return (
    <div>
      <h1>User</h1>
      <p>User ID: {userId}</p>
    </div>
  );
};

export default User;