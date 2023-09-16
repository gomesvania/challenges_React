import React from 'react';

//props {1, 2, 3}
//{} => interpolação jsx

const Welcome = ({ name }) => {

  return (
    <div>
      <h1>Hello, {name}</h1>
    </div>
  );
};

export default Welcome;