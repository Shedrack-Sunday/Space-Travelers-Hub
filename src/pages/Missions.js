import React from 'react';
import { useSelector } from 'react-redux';
import Mission from '../components/Mission';

const Missions = () => {
  const missionArray = useSelector((state) => state.missions);
  return (
    <section id="missionSection">
      <table>
        <thead>
          <tr>
            <th>Misson</th>
            <th>Description</th>
            <th>status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {missionArray.map((item) => (
            <Mission
              key={item.mission_id}
              id={item.mission_id}
              mission={item.mission_name}
              description={item.description}
              isReserved={(('reserved' in item) ? item.reserved : false)}
            />
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default Missions;
