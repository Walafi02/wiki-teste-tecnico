import produce from 'immer';

const INITIAL_STATE = {
  profile: null,
  // postsCount: null,
};

export default function auth(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@auth/SIGN_IN_SUCCESS': {
        draft.user = action.payload.user;
        // draft.postsCount = action.payload.postsCount;
        break;
      }

      case '@auth/SIGN_OUT': {
        draft.user = null;
        // draft.postsCount = null;
        break;
      }

      default:
    }
  });
}
