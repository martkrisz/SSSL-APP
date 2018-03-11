import * as AuthActions from './Auth';
import * as GlobalActions from './Global';
import * as SampleAction from './Sample';

export const ActionCreators = Object.assign(
  {},
  GlobalActions, AuthActions, SampleAction
);