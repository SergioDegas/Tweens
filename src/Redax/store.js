import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { filterReducer } from './Filter/slice';
import { usersReducer } from './Cards/slice';

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
];
const tweetsPersistConfig = {
  key: 'tweets',
  storage,
  whitelist: ['follow']['user'],
};
export const store = configureStore({
  reducer: {
    users: persistReducer(tweetsPersistConfig, usersReducer),
    filter: filterReducer,
  },
  middleware,
});

export const persistor = persistStore(store);
