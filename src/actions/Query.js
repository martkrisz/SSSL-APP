import * as types from "../types/types";
import Api from "../utils/api";
import { NavigationActions } from "react-navigation";
import { Alert } from "react-native";
import { batchActions } from "redux-batched-actions";
import * as GlobalActions from "./Global";

export function getQueries() {
  return (dispatch) => {
    dispatch(GlobalActions.showLoading(true));
    return Api.get(`/queries`)
      .then(resp => {
        dispatch(
          batchActions(
            [
              setQueries(resp),
              GlobalActions.showLoading(false)
            ]
          )
        );
      }).catch(ex => {
        dispatch(GlobalActions.showLoading(false));
        Alert.alert('Hiba', 'Váratlan hiba történt itt: getQueries');
        console.log(ex);
      })
  };
}

export function getSingleQuery(id) {
  return (dispatch) => {
    dispatch(GlobalActions.showLoading(true));
    return Api.get(`/queries/${id}`)
      .then(resp => {
        dispatch(
          batchActions(
            [
              setSingleQuery(resp),
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

function setQueries(message) {
  return {
    type: types.QUERIES_LOADED,
    message
  };
}

function setSingleQuery(message) {
  return {
    type: types.SINGLE_QUERY_LOADED,
    message
  };
}