import nanoid from "nanoid";
import { all, call, put, takeLatest } from "redux-saga/effects";
import * as citiesActions from "../store/cities/actions";
import Api from "../api";

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
    },
    {
      id: 4,
      name: "Ulan-Ude",
      interval: 100000,
      temperature: "-8",
      condition: "cloudy"
    }
];

// WORKERS
function* citiesAll(action) {
  try {
    if (CITIES.length) {
      const citiesNames = CITIES.map(city => city.name);
      const cities = yield all(
        citiesNames.map(city => call(Api.cities.find, city))
      );
      yield put(citiesActions.citiesAllSuccess(cities.map(city => city.data)));
    }
  } catch (error) {
    console.log(error);
  }
}

function* citiesAdd(action) {
  try {
    const city = yield call(Api.cities.find, action.payload.city.name);
    yield put(citiesActions.citiesAddSuccess(city.data));
  } catch (error) {
    console.log(error);
  }
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
