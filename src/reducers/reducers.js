import { combineReducers } from 'redux';
import * as SampleReducer from './Sample';
import * as QueryReducer from './Query';
import * as GlobalReducer from './Global';

export default combineReducers(
  Object.assign(
    {}, QueryReducer, GlobalReducer, SampleReducer
  )
);