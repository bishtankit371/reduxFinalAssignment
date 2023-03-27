import { createStore, applyMiddleware } from "redux";
import itemReducer from "./items_redux/itemReducer";
import thunk from "redux-thunk";

const store = createStore(itemReducer, applyMiddleware(thunk));

export default store;
