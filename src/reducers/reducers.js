import { combineReducers } from "redux";
import * as SampleReducer from "./Sample";

export default combineReducers(
  Object.assign(
    {}, SampleReducer
  )
);