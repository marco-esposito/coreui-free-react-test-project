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
} from './constants';

export const getPosts = () => ({
  type: GET_POSTS_REQUEST,
})

export const getPost = (id) => ({
  type: GET_POST_REQUEST,
  id
})

export const addPost = (post, history) => ({
  type: ADD_POST_REQUEST,
  post,
  history,
})

export const editPost = (post, history) => ({
  type: EDIT_POST_REQUEST,
  post,
  history,
})
