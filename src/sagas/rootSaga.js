import { all } from "redux-saga/effects";
import cities from "./cities";

export default function* rootSaga() {
  yield all([cities()]);
}
