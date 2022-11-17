import { createAsyncThunk } from '@reduxjs/toolkit';

const GET_MISSIONS = 'space-travelers-hub/missions/GET_MISSIONS';
const JOIN_MISSION = 'space-travelers-hub/missions/JOIN_MISSION';

const initialState = [];

export default function missionReducer(state = initialState, action) {
  switch (action.type) {
    case `${GET_MISSIONS}/fulfilled`: return action.payload;
    case JOIN_MISSION: {
      const newState = state.map((mission) => {
        if (mission.mission_id !== action.payload) { return mission; }
        return { ...mission, reserved: true };
      });
      return newState;
    }
    default:
      return state;
  }
}

export const getMissions = createAsyncThunk(
  GET_MISSIONS,
  async (url) => {
    const response = await fetch(url).then((res) => res.json());
    return response;
  },
);

export const joinMission = (id) => ({
  type: JOIN_MISSION,
  payload: id,
});
