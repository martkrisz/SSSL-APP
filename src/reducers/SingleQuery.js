import * as types from '../types/types';
import createReducer from '../utils/createReducer';

export const loadedSingleQuery = (createReducer(
    {
      singleQuery: null
    },
    {
      [types.SINGLE_QUERY_LOADED](state, action) {
        let newState = {
          singleQuery: action.message
        };
        return newState;
      }
    })
);