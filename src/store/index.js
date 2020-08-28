import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from 'store/modules/rootReducer';
import { persistStore } from 'redux-persist';
import persistReducers from 'store/persistReducers';

const enhancer = compose(applyMiddleware(thunk));

const store = createStore(persistReducers(rootReducer), enhancer);

const persistor = persistStore(store);

export { store, persistor };
