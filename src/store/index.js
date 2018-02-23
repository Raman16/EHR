import { createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import promiseMiddleware from "redux-promise-middleware";
import { createLogger } from "redux-logger";
import { loadingBarMiddleware } from "react-redux-loading-bar";
import rootReducer from "./reducers";

const loggerMiddleware = createLogger({
  collapsed: false,
  duration: true,
  diff: false
});

const loadingBarConfig = {
  promiseTypeSuffixes: ["PENDING", "FULFILLED", "REJECTED"]
};

export default function configureStore(preloadedState) {
  return createStore(
    rootReducer,
    preloadedState,
    applyMiddleware(
      promiseMiddleware(),
      loadingBarMiddleware(loadingBarConfig),
      thunkMiddleware,
      loggerMiddleware
    )
  );
}
