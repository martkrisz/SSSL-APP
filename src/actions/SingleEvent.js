import * as types from "../types/types";
import Api from "../utils/api";
import { NavigationActions } from "react-navigation";
import { Alert } from "react-native";
import { batchActions } from "redux-batched-actions";
import * as GlobalActions from "./Global";

export function getSingleEvent(id) {
  return (dispatch) => {
    dispatch(GlobalActions.showLoading(true));
    /*return Api.get(`/event/${id}`)
      .then(resp => {
        dispatch(
          batchActions(
            [
              setSingleEvent(resp),
              GlobalActions.showLoading(false),
              GlobalActions.navigateWithReset('SingleEvent')
            ]
          )
        );
      }).catch(ex => {
        dispatch(GlobalActions.showLoading(false));
      });*/
    dispatch(
      batchActions(
        [
          GlobalActions.navigateWithReset('SingleEvent'),
          GlobalActions.showLoading(false),
        ]
      )
    )
  }
}

export function modifyApplication(id) {
  return (dispatch) => {
    dispatch(GlobalActions.showLoading(true));
    return Api.put(`/event/${id}`)
      .then(resp => {
        dispatch(GlobalActions.showLoading(false));
      }).catch(ex => {
        dispatch(GlobalActions.showLoading(false));
      }
    );
  }
}

function setSingleEvent(message) {
  return {
    type: types.SINGLE_EVENT_LOADED,
    message
  };
}
