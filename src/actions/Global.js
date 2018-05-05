import Api from "../utils/api";
import { NavigationActions } from "react-navigation";
import { AsyncStorage } from "react-native";
import { batchActions } from "redux-batched-actions";
import SplashScreen from 'react-native-splash-screen';

import * as types from './../types/types';

export function initApp() {
    return (dispatch, getState) => {
      try {
        AsyncStorage.getItem('api_access', (err, result) => {
          if (err) {
            SplashScreen.hide();
          }
          if (isEmpty(result)) {
            SplashScreen.hide();
          } else {
            Api.setApiToken(result);
            dispatch(navigateWithReset('Home'));
          }
        });
        dispatch(navigateWithReset('Home'));
      } catch (ex) {
        SplashScreen.hide();
      }
    };
  }

export function navigateWithReset(screenName) {
    return NavigationActions.reset({
        index: 0,
        key: null,
        actions: [NavigationActions.navigate({ routeName: screenName })]
    });
}

export function showLoading(showLoading) {
    return {
        type: types.APP_IS_LOADING,
        showLoading
    };
}

function isEmpty(str) {
    return !str || 0 === str.length;
  }