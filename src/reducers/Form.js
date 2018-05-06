import * as types from '../types/types';
import createReducer from '../utils/createReducer';

export const loadedForms = (createReducer({}, {
    [types.FORMS_LOADED](state, action) {
        let newState = {
            forms: action.message
        }
        return newState;
    }
}));