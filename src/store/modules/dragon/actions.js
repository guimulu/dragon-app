import * as actions from 'store/actions';
import api from 'services/api';

export function createSuccess() {
  return {
    type: 'DRAGON_CREATE_SUCCESS',
  };
}

export function createFailure(error) {
  return {
    type: 'DRAGON_CREATE_FAILURE',
    payload: error,
  };
}

export function updateSuccessEdit(dragon) {
  return {
    type: 'DRAGON_UPDATE_SUCCESS',
    payload: dragon,
  };
}

export function updateFailureEdit() {
  return {
    type: 'DRAGON_UPDATE_FAILURE',
  };
}

export function setDragon(dragon) {
  return {
    type: 'DRAGON_SET',
    payload: dragon,
  };
}

export function resetDragon() {
  return {
    type: 'DRAGON_RESET',
  };
}

export function createDragon(name, type) {
  return (dispatch) =>
    api
      .post('', {
        name,
        type,
      })
      .then((res) => {
        dispatch(createSuccess());
        dispatch(actions.getDragons());
      })
      .catch((error) => {
        console.log(error);
        dispatch(createFailure(error));
      });
}

export function updateDragon(id, name, type) {
  return (dispatch) => {
    dispatch(resetDragon());
    api
      .put(`/${id}`, {
        name,
        type,
      })
      .then((res) => {
        dispatch(updateSuccessEdit(res.data));
        dispatch(actions.getDragons());
      })
      .catch((error) => {
        console.log(error);
        dispatch(updateFailureEdit(error));
      });
  };
}

export function showDragon(id) {
  return (dispatch) => {
    dispatch(resetDragon());
    api
      .get(`/${id}`)
      .then((res) => {
        dispatch(setDragon(res.data));
      })
      .catch((error) => {
        console.log(error);
      });
  };
}

export function deleteDragon(id) {
  return (dispatch) =>
    api
      .delete(id)
      .then(() => {
        dispatch(actions.getDragons());
      })
      .catch((error) => {
        dispatch(createFailure(error));
      });
}
