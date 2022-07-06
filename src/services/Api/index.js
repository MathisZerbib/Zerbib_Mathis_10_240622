import axios from "axios";
// import db from "db.json";

const apiUrl = './db.json';
export const getLocations = () => {
  return axios.get(apiUrl);
}

// fakeApiOnline : https://mocki.io/v1/c48543ec-cc43-4d71-a2dd-87cb221ece0c