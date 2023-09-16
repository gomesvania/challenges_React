//import React from "react";

import PropTypes from 'prop-types';

const Profile = ({ name, age, job }) => {
  return (
    <div>
      <h1>Nome: {name}</h1>
      <h2>Idade: {age}</h2>
      <h2>Profissão: {job}</h2>
    </div>
  );
};

Profile.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
  job: PropTypes.string.isRequired,
};

export default Profile;
