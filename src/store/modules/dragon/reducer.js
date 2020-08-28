import produce from 'immer';

import * as actionTypes from 'store/actionTypes';

const INITIAL_STATE = {
  error: false,
  success: false,
  errorEdit: false,
  successEdit: false,
  dragon: {
    name: null,
    type: null,
    createdAt: null,
  },
};

export default function dragon(state = INITIAL_STATE, action) {
  switch (action.type) {
    case actionTypes.DRAGON_CREATE_SUCCESS:
      return produce(state, (draft) => {
        draft.success = true;
        draft.error = false;
      });
    case actionTypes.DRAGON_CREATE_FAILURE:
      return produce(state, (draft) => {
        draft.success = false;
        draft.error = true;
      });
    case actionTypes.DRAGON_SET:
      return produce(state, (draft) => {
        draft.dragon = action.payload;
      });
    case actionTypes.DRAGON_UPDATE_SUCCESS:
      return produce(state, (draft) => {
        draft.dragon = action.payload;
        draft.successEdit = true;
        draft.errorEdit = false;
      });
    case actionTypes.DRAGON_UPDATE_FAILURE:
      return produce(state, (draft) => {
        draft.successEdit = false;
        draft.errorEdit = true;
      });
    case actionTypes.DRAGON_RESET:
      state = INITIAL_STATE;
      return state;
    default:
      return state;
  }
}
