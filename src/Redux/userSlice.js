// userSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Define the initial state for the slice
const initialState = {
  user: null,
  status: 'idle',
  error: null,
};

// Define the async thunk action to fetch user data from the API
export const fetchUser = createAsyncThunk('user/fetchUser', async (userId) => {
  const response = await axios.get(`https://portfolio-backend-30mp.onrender.com/api/v1/get/user/${userId}`);
  return response.data;
});

// Define the user slice
const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUser.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchUser.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.user = action.payload;
      })
      .addCase(fetchUser.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default userSlice.reducer;
