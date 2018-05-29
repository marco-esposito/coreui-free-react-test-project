import { take, call, put, select } from 'redux-saga/effects';
import { takeLatest, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

import {
  GET_POSTS_REQUEST,
  GET_POSTS_SUCCESS,
  GET_POSTS_FAILURE,
} from './store/actions/constants';
import { BASE_URL, API_KEY } from './config.js';

const getPostsHelper = () => axios.get(`${BASE_URL}/posts?key=${API_KEY}`);

// Individual exports for testing
export function* getPostsSaga () {
  try {
    const response = yield call(getPostsHelper);
    const posts = response.data;
    yield put({
      type: GET_POSTS_SUCCESS,
      posts
    });
  } catch (error) {
    yield put ({
      type: GET_POSTS_FAILURE,
      error
    })
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* rootSaga() {
  // By using `takeLatest` only the result of the latest API call is applied.
  // It returns task descriptor (just like fork) so we can continue execution
  // It will be cancelled automatically on component unmount
  // yield takeLatest(DEFAULT_ACTION, defaultSaga);
  yield takeLatest(GET_POSTS_REQUEST, getPostsSaga);
}
