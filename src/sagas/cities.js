import nanoid from "nanoid";
import { delay } from "redux-saga";
import {
  all,
  cancel,
  call,
  fork,
  put,
  select,
  take,
  takeEvery,
  takeLatest
} from "redux-saga/effects";
import * as citiesActions from "../store/cities/actions";
import * as citiesSelectors from "../store/cities/selectors";
import Api from "../api";

// WORKERS
function* citiesAll(action) {
  const cities = yield select(citiesSelectors.getCities);

  try {
    if (cities.length) {
      yield all(
        cities.map(city =>
          call(citiesAdd, {
            payload: {
              city: {
                name: city.name,
                interval: city.params.interval
              }
            }
          })
        )
      );
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
    // TODO: Uncomment
    // const refresh = yield fork(refreshCity, city);
    // const stopRefreshCity = yield take(citiesActions.CITIES_STOP_REFRESH);

    // if (stopRefreshCity.payload.city.id === city.id) {
    //   yield cancel(refresh);
    // }
  } catch (error) {
    console.log(error);
  }
}

function* citiesRemove(action) {
  yield put(citiesActions.citiesRemoveSuccess(action.payload.city));
  yield put(citiesActions.citiesStopRefresh(action.payload.city));
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
  yield takeEvery(citiesActions.CITIES_ADD, citiesAdd);
  yield takeLatest(citiesActions.CITIES_REMOVE, citiesRemove);
  yield takeLatest(citiesActions.CITIES_UPDATE, citiesUpdate);
}

export default function* cities() {
  yield all([citiesFlow()]);
}
