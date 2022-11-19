import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { selectRockets } from '../redux/rockets/rockets';

function Profile() {
  const rockets = useSelector(selectRockets);
  const missionArray = useSelector((state) => state.missions);
  const reservedMissionArray = missionArray.filter((mission) => mission.reserved === true);
  const rocketsFilter = rockets.filter((rocket) => rocket.reserved === true);

  return (
    <div className="WrapperProfile">
      <ul className="profileList">
        <h2>My Missions</h2>
        {reservedMissionArray.map((mission) => (
          <Card key={mission.mission_name} name={mission.mission_name} />
        ))}
      </ul>
      <ul className="profileList">
        <h2>My Rockets</h2>
        {rocketsFilter.map((rocket) => (
          <Card key={rocket.name} name={rocket.name} />
        ))}
      </ul>
    </div>
  );
}

const Card = (props) => {
  const { name } = props;
  return (
    <li className="WrapperCard">
      <h3>{name}</h3>
    </li>
  );
};

Card.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Profile;
