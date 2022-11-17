import React from 'react';
import PropTypes from 'prop-types';

const Mission = (props) => {
  const { mission, description } = props;
  return (
    <tr>
      <td>{mission}</td>
      <td>{description}</td>
      <td>Status</td>
      <td><button type="button">Run Test</button></td>
    </tr>
  );
};

Mission.propTypes = {
  mission: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Mission;
