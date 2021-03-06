import { getInitialData } from "../utils/api";
import { receivePolls } from "../actions/polls";
import { receiveUsers } from "../actions/users";
import { setAuthedUser } from "../actions/authedUser";
import { showLoading, hideLoading } from "react-redux-loading";

const AUTHED_ID = "dinoxas";

export function handleInitialData() {
  return dispatch => {
    dispatch(showLoading());
    return getInitialData().then(({ users, polls }) => {
      dispatch(receivePolls(polls));
      dispatch(receiveUsers(users));
      dispatch(setAuthedUser(AUTHED_ID));
      dispatch(hideLoading());
    });
  };
}
