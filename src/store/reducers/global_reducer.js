import { PUSH_LOADING, POP_LOADING } from '../actions/constants';

const initialState = {
  loading: 0,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case PUSH_LOADING:
    return {
      ...state,
      loading: state.loading + 1,
    }
    case POP_LOADING:
    if (state.loading === 0) return state;
    return {
      ...state,
      loading: state.loading - 1,
    }
    default:
      return state;
  }
}
