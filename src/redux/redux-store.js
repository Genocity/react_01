import {combineReducers, createStore} from "redux";
import pageWrapperReducer from "./pageWrapperReducer";
import sidebarReducer from "./sidebarReducer";

let reducersBundle = combineReducers({
    pageWrapper: pageWrapperReducer,
    sidebar: sidebarReducer
});

let store = createStore(reducersBundle);

export default store;