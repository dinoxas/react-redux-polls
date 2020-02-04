import authedUser from "../reducers/authedUser";
import users from "../reducers/users";
import polls from "../reducers/polls";
import { combineReducers } from "redux";
import { loadingBarReducer } from "react-redux-loading";

export default combineReducers({
  authedUser,
  users,
  polls,
  loadingBar: loadingBarReducer
});
