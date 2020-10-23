import { combineReducers } from "redux";
import { choiceReducer } from "./choiceReducer";

export const rootReducer = combineReducers({
    choice: choiceReducer
})