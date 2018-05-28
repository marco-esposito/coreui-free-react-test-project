import { GET_POSTS_REQUEST, GET_POSTS_SUCCESS, GET_POSTS_FAILURE } from '../actions/constants';

const initialState = {
  posts: {
    1: 'hey!'
  }
};

export default (state = initialState, action) => {
  return state;
}
