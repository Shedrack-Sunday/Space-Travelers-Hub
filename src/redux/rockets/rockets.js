import { createSlice } from '@reduxjs/toolkit';

const rocketsSlice = createSlice({
  name: 'rockets',
  initialState: {
    counterRocket: 0,
  },
  reducers: {
    incrementRocket: (state) => ({
      ...state,
      counterRocket: state.counterRocket + 1,
    }),
  },
});

export const { incrementRocket } = rocketsSlice.actions;
export const selectCountRocket = (state) => state.rockets.counterRocket;

export default rocketsSlice.reducer;
