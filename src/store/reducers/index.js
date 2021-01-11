import { combineReducers } from "redux";
import userReducer from "./UserReducer";

const rootReducer = combineReducers({
  userSession: userReducer,
});
export default rootReducer;
