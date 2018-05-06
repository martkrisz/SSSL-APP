import * as types from '../types/types';
import createReducer from '../utils/createReducer';

export const loadedProfile = (createReducer(
    {
        profile: []
    }, 
    {
    [types.PROFILE_LOADED](state, action) {
        let newState = {
            profile: action.message
        }
        return newState;
    }
}));