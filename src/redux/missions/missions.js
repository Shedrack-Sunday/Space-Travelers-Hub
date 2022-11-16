import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const GET_MISSIONS = 'space-travelers-hub/missions/GET_MISSIONS';

const initialState = {
  missions: [],
  status: [],
};

export const getMissions = createAsyncThunk(
  GET_MISSIONS,
  async (url) => {
    const response = await fetch(url).then((res) => res.json());
    return response;
  },
);

const missionSlice = createSlice({
  name: 'missionState',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder
      .addCase(getMissions.fulfilled, (state, action) => ({
        ...state,
        missions: action.payload,
      }));
  },
});

export default missionSlice.reducer;
