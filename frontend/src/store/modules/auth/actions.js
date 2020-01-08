export function signInRequest(email, password) {
  return {
    type: '@auth/SIGN_IN_REQUEST',
    payload: { email, password },
  };
}

export function signInSuccess(token, user, postsCount) {
  return {
    type: '@auth/SIGN_IN_SUCCESS',
    payload: { token, user, postsCount },
  };
}

export function signUpRequest(name, email, password, repassword) {
  return {
    type: '@auth/SIGN_UP_REQUEST',
    payload: { name, email, password, repassword },
  };
}

export function signFailure() {
  return {
    type: '@auth/SIGN_IN_FAILURE',
  };
}

export function singOut() {
  return {
    type: '@auth/SIGN_OUT',
  };
}
