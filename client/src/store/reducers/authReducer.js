import * as actionTypes from "../actions/actionTypes";

const INITIAL_STATE = {
  token: "",
  userName: "",
  email: "",
  __id: ""
};

const authReducer = function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case actionTypes.LOGIN:
      return {
        ...state,
        ...action.data,
      };
    
    case actionTypes.LOGOUT:
      return {
        ...state,
        ...INITIAL_STATE,
      };
    default:
      return state;
  }
};

export { authReducer };
