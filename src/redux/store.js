import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import { composeWithDevTools } from "redux-devtools-extension";
// import cakeReducer from "./cake/cakeReducer";
//commented bcz now we use rootReducer
import rootReducer from "./rootReducer";

// const store = createStore(cakeReducer);
// const store = createStore(rootReducer);
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(logger))
);

export default store;
