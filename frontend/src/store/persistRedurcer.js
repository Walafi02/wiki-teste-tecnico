import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

export default reducers => {
  const persistedReducer = persistReducer(
    {
      key: 'wiki',
      storage,
      whitelist: ['auth', 'user', 'posts'],
    },
    reducers
  );

  return persistedReducer;
};
