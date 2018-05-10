import { combineReducers } from 'redux';
import * as SampleReducer from './Sample';
import * as QueryReducer from './Query';
import * as GlobalReducer from './Global';
import * as EventReducer from './Event';
import * as SingleFormReducer from './SingleForm';
import * as SingleQueryReducer from './SingleQuery';
import * as FormReducer from './Form';
import * as AuthReducer from './Auth';

export default combineReducers(
  Object.assign(
    {}, 
    QueryReducer, 
    GlobalReducer, 
    EventReducer, 
    SingleFormReducer, 
    SingleQueryReducer,
    FormReducer, 
    AuthReducer,
    SampleReducer
  )
);