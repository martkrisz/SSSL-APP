import * as types from '../types/types';
import createReducer from '../utils/createReducer';

export const loadedSingleForm = (createReducer(
    {
      singleForm: null
    },
    {
      [types.SINGLE_FORM_LOADED](state, action) {
        let newState = {
          singleForm: action.message
        };
        return newState;
      }
    })
);