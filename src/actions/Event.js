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
        Alert.alert('Hiba', 'Váratlan hiba történt itt: getEvents');
        dispatch(GlobalActions.showLoading(false));
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
              GlobalActions.showLoading(false),
            ]
          )
        );
      }).catch(ex => {
        dispatch(GlobalActions.showLoading(false));
        Alert.alert('Hiba', 'Váratlan hiba történt itt: getSingleEvent');
      });
  }
}

export function deleteApplication(id) {
  return (dispatch) => {
    dispatch(GlobalActions.showLoading(true));
    return Api.delete(`/form/${id}`)
      .then(resp => {
        dispatch(GlobalActions.showLoading(false));
      }).catch(ex => {
        dispatch(GlobalActions.showLoading(false));
      }
    );
  }
}

export function modifyApplication(id) {
  return (dispatch) => {
    dispatch(GlobalActions.showLoading(true));
    return Api.put(`/form/${id}`)
      .then(resp => {
        dispatch(GlobalActions.showLoading(false));
      }).catch(ex => {
        dispatch(GlobalActions.showLoading(false));
      }
    );
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
