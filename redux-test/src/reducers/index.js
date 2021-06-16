import CountReducer from "./counter";
import AccessRights from "./accessRights";
import { combineReducers } from "redux";

const allReducers=combineReducers({
    counter :CountReducer,
    accessRights : AccessRights
})
export default allReducers;