import { all, put, takeLatest } from "redux-saga/effects";
import * as citiesActions from "../store/cities/actions";

// WORKERS
function* fetchCitiesAll(action) {
  yield put(citiesActions.citiesAllSuccess());
};

// WATCHERS
function* citiesFlow() {
  yield takeLatest(citiesActions.CITIES_ALL, fetchCitiesAll);
}

export default function* cities() {
  yield all([citiesFlow()]);
}