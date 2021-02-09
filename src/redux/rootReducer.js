import { combineReducers } from "redux";
import { authReducer } from "./authReducer";
import { newsReducer } from "./newsReducer";

export const rootReducer = combineReducers({
    news: newsReducer,
    auth: authReducer
})