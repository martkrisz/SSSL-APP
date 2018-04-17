import * as types from '../types/types';
import createReducer from '../utils/createReducer';

export const loadedEvents = (createReducer(
    {
        events: [],
        singleEvent: null
    },
    {
        [types.EVENTS_LOADED](state, action) {
            let newState = {
                events: action.message
            };
            return newState;
        },
        [types.SINGLE_EVENT_LOADED](state, action) {
            let newState = {
                singleEvent: action.message
            };
            return newState;
        }
    })
);