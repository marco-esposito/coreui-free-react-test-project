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
} from '../actions/constants';

const initialState = {
  loading: false,
  error: false,
  posts: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_POSTS_REQUEST:
    case GET_POST_REQUEST:
    case ADD_POST_REQUEST:
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
    case GET_POST_SUCCESS:
    return {
      ...state,
      loading: false,
      posts: {
        ...state.posts,
        [action.post.id]: action.post,
      }
    }
    case ADD_POST_SUCCESS:
      return {
        ...state,
        loading: false,
        posts: {
          ...state.posts,
          [action.post.id]: action.post,
        }
      }
      case GET_POSTS_FAILURE:
      case GET_POST_FAILURE:
      case ADD_POST_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error,
      }
    default:
      return state;
  }
}
