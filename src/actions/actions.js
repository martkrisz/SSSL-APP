import * as AuthActions from './Auth';
import * as GlobalActions from './Global';
import * as SampleAction from './Sample';
import * as QueryActions from './Query';
import * as EventActions from './Event';
import * as SingleQueryActions from './SingleQuery';
import * as SingleFormActions from './SingleForm';
import * as FormActions from './Form'

export const ActionCreators = Object.assign(
  {},
  GlobalActions, 
  AuthActions, 
  QueryActions, 
  EventActions, 
  SingleQueryActions, 
  SingleFormActions,
  FormActions, 
  SampleAction
);