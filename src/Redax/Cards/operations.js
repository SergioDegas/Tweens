import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://6449721fb88a78a8f00819d0.mockapi.io/';

export const fetchTweets = createAsyncThunk(
  'tweets/fetchAll',
  async ({ page, limit }, thunkAPI) => {
    try {
      const { data } = await axios.get(`/users?page=${page}&limit=${limit}`);
      return data;
    } catch (error) {
      throw new Error(error.message);
    }
  }
);
