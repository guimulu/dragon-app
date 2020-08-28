import * as actions from 'store/actions';

export function signInSuccess(user) {
  return {
    type: 'AUTH_SIGN_IN_SUCCESS',
    payload: { user },
  };
}

export function signInFailure() {
  return {
    type: 'AUTH_SIGN_IN_FAILURE',
  };
}

export function signIn(user, pass) {
  return (dispatch) => {
    if (user.length > 2 && pass.length > 2) {
      dispatch(signInSuccess(user));
      dispatch(actions.getDragons());
    } else {
      dispatch(signInFailure());
    }
  };
}
