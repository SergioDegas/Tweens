import { createSlice,  } from '@reduxjs/toolkit';
import { fetchTweets } from './operations';



const usersSlice = createSlice({
  name: 'users',
  initialState: {
    users: [],
    follow: [],
    isLoading: false,
    error: null,
  },
  reducers: {
    toggleFollowing: (state, action) => {
      const index = state.follow.indexOf(action.payload);
      if (index === -1) {
        state.follow.push(action.payload);
      } else {
        state.follow.splice(index, 1);
      }

      state.users = state.users.map(user => {
        if (user.id === action.payload) {
          return {
            ...user,
            followers:
              index === -1
                ? Number(user.followers) + 1
                : Number(user.followers) - 1,
          };
        }
        return user;
      });
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchTweets.fulfilled, (state, action) => {
        const newUsers = action.payload.filter(
          item => !state.users.some(existingItem => existingItem.id === item.id)
        );
        state.users = [...state.users, ...newUsers];
      })
      .addMatcher(
        action => action.type.endsWith('/pending'),
        state => {
          state.isLoading = true;
          state.error = null;
        }
      )
      .addMatcher(
        action => action.type.endsWith('/fulfilled'),
        state => {
          state.isLoading = false;
          state.error = null;
        }
      )
      .addMatcher(
        action => action.type.endsWith('/rejected'),
        (state, action) => {
          state.isLoading = false;
          state.error = action.error.message;
        }
      );
  },
});

export const usersReducer = usersSlice.reducer;
export const { toggleFollowing } = usersSlice.actions;
