import _ from 'lodash';

import {
  GET_POSTS_REQUEST,
  GET_POSTS_SUCCESS,
  GET_POSTS_FAILURE,
} from '../actions/constants';

const initialState = {
  loading: false,
  error: false,
  posts: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_POSTS_REQUEST:
    return {
      ...state,
      loading: true,
      error: false,
    }
    case GET_POSTS_SUCCESS:
    return {
      ...state,
      loading: false,
      posts: _.keyBy(action.posts, 'id'),
    }
    case GET_POSTS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error,
      }
    default:
      return state;
  }
}
