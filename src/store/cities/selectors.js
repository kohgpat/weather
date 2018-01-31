export const getCities = state => state.cities.data.map(id => state.cities.entities[id]);
