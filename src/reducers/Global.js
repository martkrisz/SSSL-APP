import * as types from '../types/types';
import createReducer from "../utils/createReducer"

export const showLoading = createReducer(
  {
    isFetching: false,
    counter: 0
  },
  {
    [types.APP_IS_LOADING](state, action) {
      var cnt = state.counter;
      if(action.showLoading) {
        cnt = cnt + 1;
      } else {
        cnt = cnt - 1;
      }

      if(cnt < 0) {
        cnt = 0;
      }
      let newState = {};
      newState.isFetching = cnt > 0;
      newState.counter = cnt;
      return newState;
    },
    [types.CLEAR_LOADING](state, action) {
      let newState = {};
      newState.isFetching = false;
      newState.counter = 0;
      return newState;
    }
  });