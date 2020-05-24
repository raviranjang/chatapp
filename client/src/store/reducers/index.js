import { combineReducers } from "redux";

import { authReducer } from "./authReducer";
// import { messageListReducer } from './messageListReducer'

export default combineReducers({
  authReducer,
  // messageListReducer
});
