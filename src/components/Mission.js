import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { joinMission, leaveMission } from '../redux/missions/missions';

const Mission = (props) => {
  const {
    id, mission, description, isReserved,
  } = props;
  const dispatch = useDispatch();
  return (
    <tr>
      <td>{mission}</td>
      <td>{description}</td>
      <td>{isReserved ? 'Active Mebmber' : 'Not a Memebr'}</td>
      {isReserved ? <td><button type="button" onClick={() => (dispatch(leaveMission(id)))}>Leave Mission</button></td> : <td><button type="button" onClick={() => (dispatch(joinMission(id)))}>Join Mission</button></td>}
    </tr>
  );
};

Mission.propTypes = {
  mission: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  isReserved: PropTypes.bool.isRequired,
  id: PropTypes.string.isRequired,
};

export default Mission;
