import produce from 'immer';

import * as actionTypes from 'store/actionTypes';

const INITIAL_STATE = {
  user: null,
  signed: false,
  error: false,
};

export default function auth(state = INITIAL_STATE, action) {
  switch (action.type) {
    case actionTypes.AUTH_SIGN_IN_SUCCESS:
      return produce(state, (draft) => {
        draft.user = action.payload.user;
        draft.signed = true;
        draft.error = false;
      });
    case actionTypes.AUTH_SIGN_IN_FAILURE:
      return produce(state, (draft) => {
        draft.user = null;
        draft.signed = false;
        draft.error = true;
      });
    default:
      return state;
  }
}
