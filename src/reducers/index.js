import authedUser from "../reducers/authedUser";
import users from "../reducers/users";
import polls from "../reducers/polls";
import { combineReducers } from "redux";

export default combineReducers({
  authedUser,
  users,
  polls
});
