import { combineReducers } from "redux";
import servicesReducer from "./services";

export default combineReducers({
  services: servicesReducer,
});
