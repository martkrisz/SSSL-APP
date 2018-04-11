import * as types from "../types/types";
import Api from "../utils/api";
import { NavigationActions } from "react-navigation";
import { AsyncStorage } from "react-native";
import { batchActions } from "redux-batched-actions";
import * as GlobalActions from "./Global";

export function getQueries(){
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
        GlobalActions.showLoading(false)
      }
    )
  };
}

function setQueries(result) {
    return {
      type: types.QUERIES_LOADED,
      result
    };
  }