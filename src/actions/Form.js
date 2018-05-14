import * as types from "../types/types";
import { batchActions } from "redux-batched-actions";
import { NavigationActions } from "react-navigation";
import * as GlobalActions from "./Global";
import { Alert } from "react-native";
import Api from "../utils/api";

export function getForms(id) {
  return (dispatch) => {
    dispatch(GlobalActions.showLoading(true));
    return Api.get(`/forms/${id}`)
      .then(resp => {
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
        dispatch(GlobalActions.showLoading(false));
        Alert.alert('Hiba', 'Váratlan hiba történt itt: getForms');
      });
  };
}

export function deleteForm(id) {
  return (dispatch) => {
    dispatch(GlobalActions.showLoading(true));
    return Api.delete(`/form/${id}`)
      .then(resp => {
        dispatch(batchActions(GlobalActions.showLoading(false)));
        Alert.alert(
          'Hálózati hiba',
          'Nem található hálózat.',
          [
            {
              text: 'OK', onPress: () => {
                getForms(id);
              }
            },
          ],
          { cancelable: false }
        )
      }).catch(ex => {
        dispatch(GlobalActions.showLoading(false));
        Alert.alert('Hiba', 'Váratlan hiba történt itt: deleteForm');
        console.log(ex);
      });
  }
}

function setForms(message) {
  return {
    type: types.FORMS_LOADED,
    message
  };
}