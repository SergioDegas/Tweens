import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { fetchTweets } from './operations';


const setFollowers = (users, userId, followers) => {
  for (const user of users) {
    if (user.id === userId) {
      user.followers = followers;
      break;
    }
  }
};

export const fetchUsersFulfilled = (state, action) => {
  const newUsers = action.payload.filter(
    newUser =>
      !state.allUsers.some(existingUser => existingUser.id === newUser.id)
  );
  state.allUsers = [...state.allUsers, ...newUsers];
};

export const setLoading = state => {
  state.isLoading = true;
};

export const setError = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

export const toggleFollowing = (state, action) => {
  const { allUsers } = state;
  const { payload: userId } = action;

  if (!state.follow.includes(userId)) {
    state.follow.push(userId);
    setFollowers(
      allUsers,
      userId,
      allUsers.find(user => user.id === userId).followers + 1
    );
  } else {
    const index = state.follow.findIndex(value => value === userId);
    state.follow.splice(index, 1);
    setFollowers(
      allUsers,
      userId,
      allUsers.find(user => user.id === userId).followers - 1
    );
  }
};

const usersSlice = createSlice({
  name: 'card',
  initialState: {
    items: [],
    follow: [],
    isLoading: false,
    error: null,
  },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchTweets.fulfilled, fetchUsersFulfilled)
      .addMatcher(isAnyOf(fetchTweets.pending), setLoading)
      .addMatcher(isAnyOf(fetchTweets.rejected), setError);
  },
});

export const usersReducer = usersSlice.reducer;
export const { resetUsers } = usersSlice.actions;
