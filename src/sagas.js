import { take, call, put, select } from 'redux-saga/effects';
import { takeLatest, takeEvery } from 'redux-saga/effects';
import axios from 'axios';
import _ from 'lodash';

import {
  GET_POSTS_REQUEST,
  GET_POSTS_SUCCESS,
  GET_POSTS_FAILURE,
  GET_POST_REQUEST,
  GET_POST_SUCCESS,
  GET_POST_FAILURE,
  ADD_POST_REQUEST,
  ADD_POST_SUCCESS,
  ADD_POST_FAILURE,
  EDIT_POST_REQUEST,
  EDIT_POST_SUCCESS,
  EDIT_POST_FAILURE,
} from './store/actions/constants';
import { BASE_URL, API_KEY } from './config.js';

const getPostsHelper = () => axios.get(`${BASE_URL}/posts?key=${API_KEY}`);
const getPostHelper = (id) => axios.get(`${BASE_URL}/posts/${id}?key=${API_KEY}`)
const addPostHelper = (post) => axios.post(`${BASE_URL}/posts?key=${API_KEY}`, post);
const editPostHelper = (post) => {
  const data = _.omit(post, ['id']); // remove id before updating
  return axios.put(``/*something like ${BASE_URL}/posts/${post.id}?key=${API_KEY}*/, data);
}

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

export function* getPostSaga (action) {
  try {
    const response = yield call(() => getPostHelper(action.id));
    const post = response.data;
    yield put({
      type: GET_POST_SUCCESS,
      post
    });
  } catch (error) {
    yield put({
      type: GET_POST_FAILURE,
      error
    });
  }
}

export function* addPostSaga (action) {
  try {
    const response = yield call(() => addPostHelper(action.post));
    const post = response.data;
    yield put({
      type: ADD_POST_SUCCESS,
      post
    });
    action.history.push('/dashboard');
  } catch (error) {
      yield put({
        type: ADD_POST_FAILURE,
        error
      });
  }
}

export function* editPostSaga (action) {
  try {
    const response = yield call(() => editPostHelper(action.post));
    const post = response.data;
    yield put({
      type: EDIT_POST_SUCCESS,
      post
    });
    action.history.push('/dashboard');
  } catch (error) {
    yield put({
      type: EDIT_POST_FAILURE,
      error,
    });
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
  yield takeLatest(GET_POST_REQUEST, getPostSaga);
  yield takeLatest(ADD_POST_REQUEST, addPostSaga);
  yield takeLatest(EDIT_POST_REQUEST, editPostSaga);
}
