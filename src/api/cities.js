import axios from "axios";
import { ENDPOINT, API_KEY } from "../constants";

const cities = {
  find: city => {
    return axios.get(ENDPOINT + `/data/2.5/weather?APPID=${API_KEY}&units=metric&q=${city}`);
  }
};

export default cities;
