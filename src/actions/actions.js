import * as AuthActions from './Auth';
import * as GlobalActions from './Global';
import * as SampleAction from './Sample';
import * as QueryActions from './Query'

export const ActionCreators = Object.assign(
  {},
  GlobalActions, AuthActions, QueryActions ,SampleAction
);