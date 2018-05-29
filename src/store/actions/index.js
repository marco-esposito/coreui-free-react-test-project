import {
  GET_POSTS_REQUEST,
  GET_POSTS_SUCCESS,
  GET_POSTS_FAILURE,
} from './constants';

export const getPosts = () => ({
  type: GET_POSTS_REQUEST,
})
