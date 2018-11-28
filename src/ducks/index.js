import { combineReducers } from "redux";

import homeReducer from "./home";

const RootReducer = combineReducers({
    homeReducer: homeReducer
});

export default RootReducer;
