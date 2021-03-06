import { createStore, compose, applyMiddleware, combineReducers } from "redux";
import { authReducer } from "./auth/reducers";
import logger from "redux-logger";
import thunk from "redux-thunk";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
  authStore: authReducer,
  // characterStore: characterReducer,
  // armouryStore: armouryReducer,
});

export const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk, logger))
);
