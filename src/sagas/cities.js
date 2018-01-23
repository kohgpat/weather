import nanoid from "nanoid";
import { all, put, takeLatest } from "redux-saga/effects";
import * as citiesActions from "../store/cities/actions";

const CITIES = [
  {
    id: 1,
    name: "Berlin",
    interval: 10000,
    temperature: "-10",
    condition: "rain"
  },
  {
    id: 2,
    name: "New York",
    interval: 50000,
    temperature: "-15",
    condition: "sunshine"
  },
  {
    id: 3,
    name: "London",
    interval: 100000,
    temperature: "-8",
    condition: "cloudy"
  }
];

// WORKERS
function* fetchCitiesAll(action) {
  yield put(citiesActions.citiesAllSuccess(CITIES));
};

// WATCHERS
function* citiesFlow() {
  yield takeLatest(citiesActions.CITIES_ALL, fetchCitiesAll);
}

export default function* cities() {
  yield all([citiesFlow()]);
}