import * as types from "../types/types";
import Api from "../utils/api";
import { NavigationActions } from "react-navigation";
import { Alert } from "react-native";
import { batchActions } from "redux-batched-actions";
import * as GlobalActions from "./Global";

export function getSingleQuery(id) {
  return (dispatch) => {
    dispatch(GlobalActions.showLoading(true));
    return Api.get(`/queries/${id}`)
      .then(resp => {
        dispatch(
          batchActions(
            [
              setSingleQuery(resp),
              GlobalActions.navigateWithReset('SingleQuery'),
              GlobalActions.showLoading(false)
            ]
          )
        );
      }).catch(ex => {
        dispatch(GlobalActions.showLoading(false));
        Alert.alert('Hiba', 'Váratlan hiba történt itt: getSingleQuery');
        console.log(ex);
      });
  }

}
export function sendQuery(id, payload){
  return (dispatch) => {
    dispatch(GlobalActions.showLoading(true));
    return Api.post(`/queries/${id}`, payload)
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
                    GlobalActions.showLoading(false),
                    GlobalActions.navigateWithReset('Home')
                  ])
                );
              }
            },
          ]
        );
    }).catch(ex => {
      dispatch(GlobalActions.showLoading(false));
      Alert.alert('Hiba', 'Váratlan hiba történt itt: sendQuery');
    });
  }
}

function setSingleQuery(message) {
  return {
    type: types.SINGLE_QUERY_LOADED,
    message
  };
}