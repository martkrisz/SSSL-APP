import * as types from '../types/types';
import createReducer from '../utils/createReducer';

export const loadedSingleEvent = (createReducer(
    {
      singleEvent: null
    },
    {
      [types.SINGLE_EVENT_LOADED](state, action) {
        let newState = {
          singleEvent: action.message
        };
        return newState;
      }
    })
);