import * as types from "../types/types";
import { AsyncStorage } from "react-native";
import { batchActions } from "redux-batched-actions";
import { NavigationActions } from "react-navigation";

export function test(message) {
  return (dispatch, getState) => {
    dispatch(setTestTextAction(message));
  };
}

function setTestTextAction(message) {
  return {
    type: types.SSSL_SAMPLE,
    message
  };
}