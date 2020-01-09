export function requestPosts(page = 1, type_post_id) {
  return {
    type: '@post/REQUEST_POST',
    payload: { page, type_post_id },
  };
}

export function successPosts(data) {
  return {
    type: '@post/SUCCESS_POST',
    payload: { data },
  };
}

export function createPostRequest(title, type_post_id, content, file_id) {
  return {
    type: '@post/CREATE_POST_REQUEST',
    payload: { title, type_post_id, content, file_id },
  };
}

export function updatePostRequest(id, title, type_post_id, content, file_id) {
  return {
    type: '@post/UPDATE_POST_REQUEST',
    payload: { id, title, type_post_id, content, file_id },
  };
}

export function deletePostRequest(
  id,
  type_post_id,
  count,
  currentPage,
  type_post_id_selected
) {
  return {
    type: '@post/DELETE_POST_REQUEST',
    payload: { id, type_post_id, count, currentPage, type_post_id_selected },
  };
}

export function addCountPosts(id) {
  return {
    type: '@post/ADD_COUNT_POST',
    payload: { id },
  };
}

export function delCountPosts(id) {
  return {
    type: '@post/DEL_COUNT_POST',
    payload: { id },
  };
}

export function setLoading(value) {
  return {
    type: '@post/SET_LOADING',
    payload: { value },
  };
}

export function setCurrentPage(value) {
  return {
    type: '@post/SET_CURRENT_PAGE',
    payload: { value },
  };
}

export function setTotalPages(value) {
  return {
    type: '@post/SET_TOTAL_PAGES',
    payload: { value },
  };
}

export function setTypePostId(value) {
  return {
    type: '@post/SET_TYPE_POST_ID',
    payload: { value },
  };
}
