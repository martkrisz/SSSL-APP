import * as types from '../types/types';
import createReducer from '../utils/createReducer';

export const loadedEvents = (createReducer(
    {
      events: [],
    },
    {
      [types.EVENTS_LOADED](state, action) {
        let newState = {
          events: action.message
        };
          return newState;
        }
    })
);