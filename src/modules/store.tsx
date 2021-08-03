import {applyMiddleware, createStore} from 'redux';
import thunkMiddleware from 'redux-thunk';

import {rootReducer} from '_modules';

let store: any;

export function configureStore(preloadedState?: any) {
  const middlewares = [thunkMiddleware].filter(Boolean);

  store = createStore(
    rootReducer(),
    preloadedState,
    applyMiddleware(...middlewares),
  );

  return store;
}

export default function getStore() {
  return store;
}
