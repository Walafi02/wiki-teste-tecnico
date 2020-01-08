export function requestPosts() {
  return {
    type: '@post/REQUEST_POST',
  };
}

export function successPosts(data) {
  return {
    type: '@post/SUCCESS_POST',
    payload: { data },
  };
}
