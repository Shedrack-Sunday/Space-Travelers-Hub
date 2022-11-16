import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import reducersRockets from './rockets/rockets';
import missionReducer from './missions/missions';

const store = configureStore({
  reducer: {
    rockets: reducersRockets,
    missions: missionReducer,
  },
  middleware: [thunk, logger],
});

export default store;
