import { combineReducers } from "redux";

import cities from "./cities/reducers";

const rootReducer = combineReducers({ cities });

export default rootReducer;
