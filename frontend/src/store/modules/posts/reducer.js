import produce from 'immer';

const INITIAL_STATE = {
  count: null,
  posts: [],
};

export default function posts(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@auth/SIGN_IN_SUCCESS': {
        draft.count = action.payload.postsCount;
        break;
      }

      case '@auth/SIGN_OUT': {
        draft.count = null;
        draft.posts = [];
        break;
      }

      case '@post/SUCCESS_POST': {
        console.tron.log(action.payload.data);
        draft.posts = action.payload.data;
        break;
      }

      default:
    }
  });
}
