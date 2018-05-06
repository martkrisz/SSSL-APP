import * as types from "../types/types";
import { batchActions } from "redux-batched-actions";
import { NavigationActions } from "react-navigation";
import * as GlobalActions from "./Global";
import { Alert } from "react-native";
import Api from "../utils/api";

export function getForms(id) {
  debugger;
  return (dispatch) => {
    dispatch(GlobalActions.showLoading(true));
    return Api.get(`/forms/${id}`)
      .then(resp => {
        debugger
        dispatch(
          batchActions(
            [
              setForms(resp),
              GlobalActions.navigateWithReset('Forms'),
              GlobalActions.showLoading(false)
            ]
          )
        );
      }).catch(ex => {
        Alert.alert('Hiba', 'Váratlan hiba történt itt: getForms');
        dispatch(GlobalActions.showLoading(false));
      });
  };
}

function setForms(message) {
  return {
    type: types.FORMS_LOADED,
    message
  };
}