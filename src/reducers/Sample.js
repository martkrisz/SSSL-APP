import * as types from '../types/types';
import createReducer from '../utils/createReducer';

export const SampleReducer = (createReducer({}, {
    [types.SSSL_SAMPLE](state, action) {
        let newState = {
            text: action.message
        }
        return newState;
    }
}));