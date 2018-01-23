export const CITIES_ALL = "CITIES_ALL";
export const citiesAll = () => ({
  type: CITIES_ALL
});

export const CITIES_ALL_SUCCESS = "CITIES_ALL_SUCCESS";
export const citiesAllSuccess = cities => ({
  type: CITIES_ALL_SUCCESS,
  payload: {
    cities
  }
});

export const CITIES_ADD = "CITIES_ADD";
export const citiesAdd = city => ({
  type: CITIES_ADD,
  payload: {
    city
  }
});

export const CITIES_ADD_SUCCESS = "CITIES_ADD_SUCCESS";
export const citiesAddSuccess = city => ({
  type: CITIES_ADD_SUCCESS,
  payload: {
    city
  }
});

export const CITIES_REMOVE = "CITIES_REMOVE";
export const citiesRemove = city => ({
  type: CITIES_REMOVE,
  payload: {
    city
  }
});

export const CITIES_REMOVE_SUCCESS = "CITIES_REMOVE_SUCCESS";
export const citiesRemoveSuccess = city => ({
  type: CITIES_REMOVE_SUCCESS,
  payload: {
    city
  }
});
