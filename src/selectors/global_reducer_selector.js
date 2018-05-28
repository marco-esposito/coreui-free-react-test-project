import { createSelector } from 'reselect';

const selectGlobal = state => state.globalState;

 const makeSelectLoading = () => createSelector(
   selectGlobal,
   (globalState) => globalState.loading,
 );

export {
  makeSelectLoading,
  // Others...
};
