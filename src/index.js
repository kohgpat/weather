import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import createSagaMiddleware from "redux-saga";
import throttle from "lodash/throttle";
import { saveState } from "./localStorage";
import rootSaga from "./sagas/rootSaga";
import App from "./components/App";
import configureStore from "./configureStore";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore(sagaMiddleware);

store.subscribe(
  throttle(() => {
    saveState({
      cities: store.getState().cities,
      settings: store.getState().settings
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
