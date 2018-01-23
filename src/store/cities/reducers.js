import uniq from "lodash/uniq";
import * as actions from "./actions";

const initialState = {
  entities: {},
  data: []
};

const cities = (state = initialState, action) => {
  switch (action.type) {
    // ALL
    case actions.CITIES_ALL_SUCCESS: {
      return citiesAllSuccess(state, action);
    }
    // ADD
    case actions.CITIES_ADD_SUCCESS: {
      return citiesAddSuccess(state, action);
    }
    default: {
      return state;
    }
  }
};

// ALL
const citiesAllSuccess = (state, action) => ({
  ...state,
  entities: {
    ...state.entities,
    ...action.payload.cities.reduce((all, current, idx) => {
      all[current.id] = current;
      return all;
    }, {})
  },
  data: uniq([...state.data, ...action.payload.cities.map(city => city.id)])
});

// ADD
const citiesAddSuccess = (state, action) => ({
  ...state,
  entities: {
    ...state.entities,
    [action.payload.city.id]: {
      ...action.payload.city
    }
  },
  data: uniq([...state.data, action.payload.city.id])
});

export default cities;
