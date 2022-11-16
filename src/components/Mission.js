import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { toggleStatus } from '../redux/missions/missions';

const Mission = (props) => {
  const { mission, description, status } = props;
  const dispatch = useDispatch();
  return (
    <tr>
      <td>{mission}</td>
      <td>{description}</td>
      <td>{status}</td>
      <td><button type="button" onClick={() => { dispatch(toggleStatus()); }}>Run Test</button></td>
    </tr>
  );
};

Mission.propTypes = {
  mission: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  status: PropTypes.bool.isRequired,
};

export default Mission;
