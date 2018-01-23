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
function* citiesAll(action) {
  yield put(citiesActions.citiesAllSuccess(CITIES));
}

function* citiesAdd(action) {
  const city = {
    ...action.payload.city,
    id: nanoid()
  };

  yield put(citiesActions.citiesAddSuccess(city));
}

function* citiesRemove(action) {
  yield put(citiesActions.citiesRemoveSuccess(action.payload.city));
}

// WATCHERS
function* citiesFlow() {
  yield takeLatest(citiesActions.CITIES_ALL, citiesAll);
  yield takeLatest(citiesActions.CITIES_ADD, citiesAdd);
  yield takeLatest(citiesActions.CITIES_REMOVE, citiesRemove);
}

export default function* cities() {
  yield all([citiesFlow()]);
}
