import produce from 'immer';

const INITIAL_STATE = {
  count: null,
  posts: [],
  totalPages: 0,
  currentPage: 0,
  loading: false,
  type_post_id: null,
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
        draft.posts = action.payload.data;
        break;
      }

      case '@post/ADD_COUNT_POST': {
        draft.count = draft.count.map(post => {
          if (post.id === action.payload.id) {
            return {
              ...post,
              count: post.count + 1,
            };
          }

          return post;
        });
        break;
      }

      case '@post/DEL_COUNT_POST': {
        draft.count = draft.count.map(post => {
          if (post.id === action.payload.id) {
            return {
              ...post,
              count: post.count + -1,
            };
          }

          return post;
        });
        break;
      }

      case '@post/SET_LOADING': {
        draft.loading = action.payload.value;
        break;
      }

      case '@post/SET_TYPE_POST_ID': {
        draft.type_post_id = action.payload.value;
        break;
      }

      case '@post/SET_CURRENT_PAGE': {
        draft.currentPage = action.payload.value;
        break;
      }

      case '@post/SET_TOTAL_PAGES': {
        draft.totalPages = action.payload.value;
        break;
      }

      default:
    }
  });
}
