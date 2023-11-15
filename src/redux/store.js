/*
Store:The Redux store brings together the state,actions and reducers that make up our app.
*/
import { applyMiddleware,   createStore } from "redux"
import { composeWithDevTools } from "redux-devtools-extension"
import thunk from "redux-thunk";

import rootReducer from "./reducers/index"

const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk))
);

export default store;