import React from 'react';
import { useSelector } from 'react-redux';
import Mission from '../components/Mission';

const Missions = () => {
  const missionArray = useSelector((state) => state.missionReducer);
  return (
    <section>
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
          {missionArray.map((mission) => (
            <Mission
              key={mission.key}
              mission={mission.mission}
              description={mission.description}
              status={mission.status}
            />
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default Missions;
