import * as AuthActions from './Auth';
import * as GlobalActions from './Global';
import * as SampleAction from './Sample';
import * as QueryActions from './Query';
import * as EventActions from './Event';

export const ActionCreators = Object.assign(
  {},
  GlobalActions, AuthActions, QueryActions, EventActions, SampleAction
);