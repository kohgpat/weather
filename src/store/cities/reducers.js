import uniq from "lodash/uniq";
import * as actions from "./actions";

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
    ...CITIES.reduce((all, current, idx) => {
      all[current.id] = current;
      return all;
    }, {}),
  },
  data: uniq([
    ...state.data,
    ...CITIES.map(city => city.id)
  ])
});

export default cities;
