import { createAsyncThunk } from '@reduxjs/toolkit';

const GET_MISSIONS = 'space-travelers-hub/missions/GET_MISSIONS';

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

export const getMissions = createAsyncThunk(
  GET_MISSIONS,
  async (url) => {
    const response = await fetch(url).then((res) => res.json());
    return response;
  },
);
