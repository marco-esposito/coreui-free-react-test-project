import { createSelector } from 'reselect';

const selectGlobal = (state) => state.globalState;

 const makeSelectLoading = () => createSelector(
   selectGlobal,
   (globalState) => globalState.loading,
 );

 const makeSelectPosts = () => createSelector(
   selectGlobal,
   (globalState) => globalState.posts,
 )

export {
  makeSelectLoading,
  makeSelectPosts,
  // Others...
};
