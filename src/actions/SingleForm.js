import * as types from "../types/types";
import Api from "../utils/api";
import { NavigationActions } from "react-navigation";
import { Alert } from "react-native";
import { batchActions } from "redux-batched-actions";
import * as GlobalActions from "./Global";

export function getSingleForm(id) {
  return (dispatch) => {
    dispatch(GlobalActions.showLoading(true));
    return Api.get(`/forms/${id}`)
      .then(resp => {
        dispatch(
          batchActions(
            [
              setSingleForm(resp),
              GlobalActions.navigateWithReset('SingleForm'),
              GlobalActions.showLoading(false)
            ]
          )
        );
      }).catch(ex => {
        dispatch(GlobalActions.showLoading(false));
      });
  }

}
export function sendForm(id, payload){
  return (dispatch) => {
    dispatch(GlobalActions.showLoading(true));
    return Api.post(`/forms/${id}`, payload)
      .then(resp => {
        dispatch(GlobalActions.showLoading(false));
        Alert.alert(
          "",
          "Sikeresen kitöltötted a kérdőívet!",
          [
            {
              text: 'OK', onPress: () => {
                dispatch(
                  batchActions([
                    GlobalActions.navigateWithReset('Home'),
                    GlobalActions.showLoading(false)
                  ])
                );
              }
            },
          ]
        );
    }).catch(ex => {
      dispatch(GlobalActions.showLoading(false));
      Alert.alert('Hiba', 'Váratlan hiba történt itt: sendForm');
    });
  }
}

function setSingleForm(message) {
  return {
    type: types.SINGLE_QUERY_LOADED,
    message
  };
}