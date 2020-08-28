import api from 'services/api';

export function setDragons(dragons) {
  return {
    type: 'DRAGON_LIST_SET',
    payload: { dragons },
  };
}

export function getDragonsFailure(error) {
  return {
    type: 'DRAGON_LIST_FAILURE',
    payload: { error },
  };
}

export function getDragons() {
  return (dispatch) =>
    api
      .get('?sortBy=name') // ordernação pelo nome
      .then((res) => {
        dispatch(setDragons(res.data));
      })
      .catch((error) => {
        dispatch(getDragonsFailure(error));
      });
}
