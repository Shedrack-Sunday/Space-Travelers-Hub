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
      {isReserved ? <td><div className="badge active">Active Mebmber</div></td> : <td><div className="badge">Not a Memebr</div></td>}
      {isReserved ? <td><button className="leave" type="button" onClick={() => (dispatch(leaveMission(id)))}>Leave Mission</button></td> : <td><button className="join" type="button" onClick={() => (dispatch(joinMission(id)))}>Join Mission</button></td>}
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
