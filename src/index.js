import React from "react";
import ReactDOM from "react-dom";
import { applyMiddleware, compose, createStore } from "redux";
import { Provider } from "react-redux";
import createSagaMiddleware from "redux-saga";
import throttle from "lodash/throttle";
import { loadState, saveState } from "./localStorage";
import rootReducer from "./store/rootReducer";
import rootSaga from "./sagas/rootSaga";
import App from "./components/App";

const sagaMiddleware = createSagaMiddleware();
const prealoadedState = loadState();

const store = createStore(
  rootReducer,
  prealoadedState,
  compose(applyMiddleware(sagaMiddleware)),
);

store.subscribe(
  throttle(() => {
    saveState({
      cities: store.getState().cities
    });
  }, 1000)
);

sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("app")
);
