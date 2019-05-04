export const getUnits = state => state.settings.units;

export const isCelsius = state => getUnits(state) === "celcius";
export const isFahrenheit = state => getUnits(state) === "fahrenheit";
