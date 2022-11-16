import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import reducersRockets from './rockets/rockets';

const store = configureStore({
  reducer: {
    rockets: reducersRockets,
  },
  middleware: [thunk, logger],
});

export default store;
