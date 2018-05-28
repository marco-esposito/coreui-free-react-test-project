import { PUSH_LOADING, POP_LOADING } from './constants';

export const pushLoading = () => ({
  type: PUSH_LOADING,
})

export const popLoading = () => ({
  type: POP_LOADING,
})
