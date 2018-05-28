import { combineReducers } from 'redux';

import postsReducer from './reducer_posts';

const rootReducer = combineReducers({
<<<<<<< HEAD
  postsState: postsReducer,
=======
  posts: postsReducer,
>>>>>>> 9942c9c11dc8956bf7f0d256a70d377cc0fb140d
});

export default rootReducer;
