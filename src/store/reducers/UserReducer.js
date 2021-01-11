import UserActions from "../actions/UserActions";

const initalState = { user: null, error: null };

function userReducer(storeData = initalState, action) {
  switch (action.type) {
    case UserActions.ActionTypes.LOGIN_SUCCESS:
      return { error: null, user: action.payload };
    case UserActions.ActionTypes.LOGIN_ERROR:
      return { user: null, error: action.payload };
    case UserActions.ActionTypes.LOGOUT:
      return initalState;
    default:
      return initalState;
  }
}
export default userReducer;
