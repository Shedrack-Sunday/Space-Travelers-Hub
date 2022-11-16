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
          {missionArray.missions.map((mission) => (
            <Mission
              key={mission.mission_id}
              mission={mission.mission_name}
              description={mission.description}
            />
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default Missions;
