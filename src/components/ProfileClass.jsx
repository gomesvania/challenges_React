import PropTypes from 'prop-types';

import { Component } from "react";

class ProfileClass extends Component {
  render() {
    const { name, age, job } = this.props;

    return (
      <div>
        <h1>Nome: {name}</h1>
        <h2>Idade: {age}</h2>
        <h2>Profissão: {job}</h2>
      </div>
    );
  }
}

export default ProfileClass;

ProfileClass.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
  job: PropTypes.string.isRequired
};
