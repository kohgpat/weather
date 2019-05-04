import { applyMiddleware, compose, createStore } from "redux";
import { loadState } from "./localStorage";
import rootReducer from "./store/rootReducer";

const prealoadedState = loadState();

export default sagaMiddleware =>
  createStore(
    rootReducer,
    prealoadedState,
    compose(applyMiddleware(sagaMiddleware))
  );
