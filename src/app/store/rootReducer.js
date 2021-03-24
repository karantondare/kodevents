import { combineReducers } from "redux";
import authReducer from "../../features/auth/authReducer";
import eventReducer from "../../features/events/eventReducer";
import profileReducer from "../../features/profiles/profileReducer";
import asyncReducer from "../async/asyncReducer";
import modalReducer from "../common/modals/modalReducer";

const rootReducer = combineReducers({
  event: eventReducer,
  modals: modalReducer,
  auth: authReducer,
  async: asyncReducer,
  profile: profileReducer,
});

export default rootReducer;
