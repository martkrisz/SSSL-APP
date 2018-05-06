import * as types from "../types/types";
import Api from "../utils/api";
import { NavigationActions } from "react-navigation";
import { AsyncStorage, Alert } from "react-native";
import { batchActions } from "redux-batched-actions";
import * as GlobalActions from "./Global";

export function login(request) {
    return (dispatch, getState) => {
        dispatch(GlobalActions.showLoading(true));
        return Api.post('/login', request)
            .then(resp => {
                const { accessToken } = resp;
                AsyncStorage.setItem('api_access', accessToken);
                Api.setApiToken(accessToken);
                dispatch(
                    batchActions([
                        setProfile(resp),
                        GlobalActions.showLoading(false),
                        GlobalActions.navigateWithReset('Home')
                    ])
                );
            })
            .catch(ex => {
                Alert.alert('Hiba', 'Helytelen felhasználónév vagy jelszó');
                console.log(ex);
                dispatch(GlobalActions.showLoading(false));
            });
    };
}

function setProfile(message){
    return {
        type: types.PROFILE_LOADED,
        message
    }
}