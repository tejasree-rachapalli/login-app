const ActionTypes = {
  LOGIN_SUCCESS: "[User] login success",
  LOGIN_ERROR: "[User] login error",
  LOGOUT: "[User] logout",
};

const loginSuccess = (user) => {
  return { type: ActionTypes.LOGIN_SUCCESS, payload: user };
};
const loginError = (error) => {
  return { type: ActionTypes.LOGIN_ERROR, payload: error };
};
const logout = () => {
  return { type: ActionTypes.LOGOUT };
};

const UserActions = { logout, loginSuccess, loginError, ActionTypes };
export default UserActions;
