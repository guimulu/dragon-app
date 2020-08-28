import produce from 'immer';

import * as actionTypes from 'store/actionTypes';

const INITIAL_STATE = {
  dragons: [],
  error: false,
  errorMessage: null,
};

export default function dragonList(state = INITIAL_STATE, action) {
  switch (action.type) {
    case actionTypes.DRAGON_LIST_SET:
      return produce(state, (draft) => {
        draft.dragons = action.payload.dragons;
        draft.error = false;
        draft.errorMessage = null;
      });
    case actionTypes.DRAGON_LIST_FAILURE:
      return produce(state, (draft) => {
        draft.dragons = [];
        draft.error = true;
        draft.errorMessage = action.payload.error;
      });
    default:
      return state;
  }
}
