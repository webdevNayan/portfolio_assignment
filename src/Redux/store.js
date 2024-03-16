// store.js
import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice'; // Assuming you have userSlice in a separate file

const store = configureStore({
  reducer: {
    user: userReducer,
  },
});

export default store;
