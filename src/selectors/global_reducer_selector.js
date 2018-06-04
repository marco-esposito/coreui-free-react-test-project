import { createSelector } from 'reselect';

const selectGlobal = (state) => state.globalState;

 const makeSelectLoading = () => createSelector(
   selectGlobal,
   (globalState) => globalState.loading,
 );

 const makeSelectError = () => createSelector(
   selectGlobal,
   (globalState) => globalState.error,
 );

 const makeSelectPosts = () => createSelector(
   selectGlobal,
   (globalState) => globalState.posts,
 )

 const makeSelectPost = (id) => createSelector(
   selectGlobal,
   (globalState) => globalState.posts[id],
 )

export {
  makeSelectLoading,
  makeSelectError,
  makeSelectPosts,
  makeSelectPost,
  // Others...
};
