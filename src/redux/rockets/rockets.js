import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  counterRocket: 0,
  statusRockets: 'idle',
  rockets: [],
};

export const fetchApiRockets = createAsyncThunk(
  'rockets/fetchApiRockets',
  async (url) => {
    const response = await fetch(url).then((res) => res.json());
    return response;
  },
);

const rocketsSlice = createSlice({
  name: 'rockets',
  initialState,
  reducers: {
    incrementRocket: (state) => ({
      ...state,
      counterRocket: state.counterRocket + 1,
    }),
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchApiRockets.pending, (state) => ({
        ...state,
        statusRockets: 'loading',
      }))
      .addCase(fetchApiRockets.fulfilled, (state, action) => {
        const arrayRockets = action.payload.map((rocket) => ({
          id: rocket.id,
          name: rocket.rocket_name,
          type: rocket.rocket_type,
          flickrImg: rocket.flickr_images,
          description: rocket.description,
        }));
        return {
          ...state,
          statusRockets: 'done',
          rockets: arrayRockets,
        };
      });
  },
});

export const { incrementRocket } = rocketsSlice.actions;
export const selectCountRocket = (state) => state.rockets.counterRocket;
export const selectRockets = (state) => state.rockets.rockets;
export const selectStatusRocket = (state) => state.rockets.statusRocket;

export default rocketsSlice.reducer;
