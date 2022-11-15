import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import reducersRockets from './rockets/rockets';

const store = configureStore({
  reducer: {
    rockets: reducersRockets,
  },
  middleware: [logger],
});

export default store;
