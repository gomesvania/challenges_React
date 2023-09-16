import PropTypes from 'prop-types'

import Profile from './Profile'

const Family = ({ members }) => {
  return (
    <>
      <h1>Lista de membros</h1>
      {members.map((member, index) => (
        <Profile
          key={index}
          name={member.name}
          age={member.age}
          job={member.job}
        />
      ))}
    </>
  );
};

export default Family;


Family.propTypes = {
  members: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      age: PropTypes.number.isRequired,
      job: PropTypes.string.isRequired
    })
  ).isRequired
};
