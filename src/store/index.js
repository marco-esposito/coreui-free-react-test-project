import { createStore, applyMiddleware, compose } from 'redux';

import reducers from './reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


const enhancer = composeEnhancers(
  // store enhancers if any
);

const store = createStore(
  reducers,
  enhancer
);

export default store;
