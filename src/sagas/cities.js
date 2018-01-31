import nanoid from "nanoid";
import { delay } from "redux-saga";
import { all, call, spawn, put, select, takeLatest } from "redux-saga/effects";
import * as citiesActions from "../store/cities/actions";
import * as citiesSelectors from "../store/cities/selectors";
import Api from "../api";

// WORKERS
function* citiesAll(action) {
  const cities = yield select(citiesSelectors.getCities);

  try {
    if (cities.length) {
      const citiesNames = cities.map(city => city.name);
      const response = yield all(
        citiesNames.map(city => call(Api.cities.find, city))
      );
      yield put(
        citiesActions.citiesAllSuccess(response.map(city => city.data))
      );
      const refreshedCities = yield select(citiesSelectors.getCities);
      yield all(refreshedCities.map(city => spawn(refreshCity, city)));
    }
  } catch (error) {
    console.log(error);
  }
}

function* refreshCity(city) {
  try {
    while (true) {
      const refreshedCity = yield call(Api.cities.find, city.name);
      yield put(citiesActions.citiesUpdateSuccess(refreshedCity.data));
      yield call(delay, city.params.interval);
    }
  } catch (error) {
    console.log(error);
  }
}

function* citiesAdd(action) {
  try {
    const response = yield call(Api.cities.find, action.payload.city.name);
    const city = {
      ...response.data,
      params: {
        interval: action.payload.city.interval
      }
    };

    yield put(citiesActions.citiesAddSuccess(city));
    const refresh = yield spawn(refreshCity, city);
  } catch (error) {
    console.log(error);
  }
}

function* citiesRemove(action) {
  yield put(citiesActions.citiesRemoveSuccess(action.payload.city));
}

function* citiesUpdate(action) {
  try {
    const city = yield call(Api.cities.find, action.payload.city.name);
    yield put(citiesActions.citiesUpdateSuccess(action.payload.city));
  } catch (error) {
    console.log(error);
  }
}

// WATCHERS
function* citiesFlow() {
  yield takeLatest(citiesActions.CITIES_ALL, citiesAll);
  yield takeLatest(citiesActions.CITIES_ADD, citiesAdd);
  yield takeLatest(citiesActions.CITIES_REMOVE, citiesRemove);
  yield takeLatest(citiesActions.CITIES_UPDATE, citiesUpdate);
}

export default function* cities() {
  yield all([citiesFlow()]);
}
