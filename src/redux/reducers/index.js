import { combineReducers } from "redux";
import readyUsersReducer from "./readyUserReducer";

const rootReducer = combineReducers({
    readyUsers: readyUsersReducer,
});

export default rootReducer;
