import { combineReducers, createStore } from "redux";
import infoReducer from "./reducers/infoReducer";

const rootReducer = combineReducers({
     infoReducer : infoReducer,
})

export const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())