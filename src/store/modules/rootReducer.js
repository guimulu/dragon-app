import { combineReducers } from 'redux';

import auth from 'store/modules/auth/reducer';
import dragonList from 'store/modules/dragonList/reducer';
import dragon from 'store/modules/dragon/reducer';

export default combineReducers({
  auth,
  dragonList,
  dragon,
});
