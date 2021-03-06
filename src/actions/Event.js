import * as types from "../types/types";
import Api from "../utils/api";
import { NavigationActions } from "react-navigation";
import { Alert } from "react-native";
import { batchActions } from "redux-batched-actions";
import * as GlobalActions from "./Global";

export function getEvents() {
  return (dispatch) => {
    dispatch(GlobalActions.showLoading(true));
    return Api.get(`/events`)
      .then(resp => {
        dispatch(
          batchActions(
            [
              setEvents(resp),
              GlobalActions.showLoading(false)
            ]
          )
        );
      }).catch(ex => {
        dispatch(GlobalActions.showLoading(false));
        Alert.alert('Hiba', 'Váratlan hiba történt itt: getEvents');
        console.log(ex);
      });
  };
}

export function getSingleEvent(id) {
  return (dispatch) => {
    dispatch(GlobalActions.showLoading(true));
    return Api.get(`/event/${id}`)
      .then(resp => {
        dispatch(
          batchActions(
            [
              setSingleEvent(resp),
              GlobalActions.showLoading(false)
            ]
          )
        );
      }).catch(ex => {
        dispatch(GlobalActions.showLoading(false));
        Alert.alert('Hiba', 'Váratlan hiba történt itt: getSingleEvent');
        console.log(ex);
      });
  }
}

function setEvents(message) {
  return {
    type: types.EVENTS_LOADED,
    message
  };
}

function setSingleEvent(message) {
  return {
    type: types.SINGLE_EVENT_LOADED,
    message
  };
}
