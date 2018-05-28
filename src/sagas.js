// import { take, call, put, select } from 'redux-saga/effects';
// import { takeLatest, takeEvery } from 'redux-saga/effects';
// import axios from 'axios';

// import { DEFAULT_ACTION } from './store/actions/constants';

import config from './config.js';

// Individual exports for testing
export function* defaultSaga() {
  // Happy coding!
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* rootSaga() {
  // By using `takeLatest` only the result of the latest API call is applied.
  // It returns task descriptor (just like fork) so we can continue execution
  // It will be cancelled automatically on component unmount
  // yield takeLatest(DEFAULT_ACTION, defaultSaga);
}
