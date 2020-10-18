import { combineReducers } from "redux";
import { choiceReducer } from "./choiceReducer";
import { uiReducer } from "./uiReducer";

export const rootReducer = combineReducers({
    ui: uiReducer,
    Choice: choiceReducer
})