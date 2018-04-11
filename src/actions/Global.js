import Api from "../utils/api";
import { NavigationActions } from "react-navigation";
import { AsyncStorage } from "react-native";
import { batchActions } from "redux-batched-actions";

import * as types from './../types/types';

export function initApp() {
    
}

export function navigateWithReset(screenName) {
    return NavigationActions.reset({
        index: 0,
        key: null,
        actions: [NavigationActions.navigate({ routeName: screenName })]
    })
}

export function showLoading(showLoading) {
    return {
        type: types.APP_IS_LOADING,
        showLoading
    };
}