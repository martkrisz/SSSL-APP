import * as types from "../types/types";
import Api from "../utils/api";
import { NavigationActions } from "react-navigation";
import { Alert } from "react-native";
import { batchActions } from "redux-batched-actions";
import * as GlobalActions from "./Global";

export function getSingleForm(id) {
  return (dispatch) => {
    dispatch(GlobalActions.showLoading(true));
    return Api.get(`/form/${id}`)
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
        Alert.alert('Hiba', 'Váratlan hiba történt itt: getSingleForm');
        console.log(ex);
      });
  }

}
export function sendForm(id, payload){
  return (dispatch) => {
    dispatch(GlobalActions.showLoading(true));
    return Api.post(`/form/${id}`, payload)
      .then(resp => {
        dispatch(GlobalActions.showLoading(false));
        Alert.alert(
          "",
          "Sikeresen kitöltötted a jelentkezést!",
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
      console.log(ex);
    });
  }
}

export function modifyForm(id, payload){
  return (dispatch) => {
    dispatch(GlobalActions.showLoading(true));
    return Api.put(`/form/${id}`, payload)
      .then(resp => {
        dispatch(GlobalActions.showLoading(false));
        Alert.alert(
          "",
          "Sikeresen megváltoztattad a jelentkezésed!",
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
      Alert.alert('Hiba', 'Váratlan hiba történt itt: modifyForm');
      console.log(ex);
    });
  }
}

function setSingleForm(message) {
  return {
    type: types.SINGLE_FORM_LOADED,
    message
  };
}