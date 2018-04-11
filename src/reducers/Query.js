import * as types from '../types/types';
import createReducer from '../utils/createReducer';

export const loadedQueries = (createReducer(
    {
      queries: []
    },
    {
      [types.QUERIES_LOADED](state, action) {
        let newState = {
            queries : action.queries
        };
        return newState;
      }
    })
);