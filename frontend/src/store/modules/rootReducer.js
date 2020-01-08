import { combineReducers } from 'redux';

import auth from './auth/reducer';
import user from './user/reducer';
import posts from './posts/reducer';

export default combineReducers({
  auth,
  user,
  posts,
});
