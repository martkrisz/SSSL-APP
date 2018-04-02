import * as types from "../types/types";
import Api from "../utils/api";
import { NavigationActions } from "react-navigation";
import { AsyncStorage } from "react-native";
import { batchActions } from "redux-batched-actions";
import * as GlobalActions from "./Global";

export function login(request) {
    return (dispatch, getState) => {
        GlobalActions.navigateWithReset('Home');
    }
}