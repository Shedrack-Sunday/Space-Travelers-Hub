import { createAsyncThunk } from '@reduxjs/toolkit';

const GET_MISSIONS = 'space-travelers-hub/missions/GET_MISSIONS';

const url = 'https://api.spacexdata.com/v3/missions';

const initialState = {
  missions: [],
  status: [],
};

export default function missionReducer(state = initialState, action) {
  switch (action.type) {
    case `${GET_MISSIONS}/fulfilled`: return {
      missions: (state.missions, action.payload),
      status: state.status,
    };
    default:
      return state;
  }
}

export const getMissions = createAsyncThunk(GET_MISSIONS, async () => {
  const result = await fetch(url, {
    method: 'GET',
    headers: {
      'content-Type': 'application/json',
    },
  }).then((response) => response.text())
    .then((result) => JSON.parse(result));
  return result;
});
