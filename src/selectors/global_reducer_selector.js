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

export {
  makeSelectLoading,
  makeSelectError,
  makeSelectPosts,
  // Others...
};
