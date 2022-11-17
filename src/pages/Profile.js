import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { selectRockets } from '../redux/rockets/rockets';

function Profile() {
  const rockets = useSelector(selectRockets);
  const rocketsFilter = rockets.filter((rocket) => rocket.reserved === true);
  return (
    <div className="WrapperProfile">
      <div>
        <h2>My Missions</h2>
      </div>
      <div>
        <h2>My Rockets</h2>
        {rocketsFilter.map((rocket) => (
          <Card key={rocket.name} name={rocket.name} />
        ))}
      </div>
    </div>
  );
}

const Card = (props) => {
  const { name } = props;
  return (
    <div className="WrapperCard">
      <h3>{name}</h3>
    </div>
  );
};

Card.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Profile;
