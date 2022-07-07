import axios from "axios";
// import db from "db.json";

const apiUrl = './db.json';
export const getLocations = () => {
  return axios.get(apiUrl);
}


export const getLocationById = async (id) => {
  const response = await axios.get("../db.json");
  return response.data.filter(location => location.id === id);
}

// fakeApiOnline : https://mocki.io/v1/c48543ec-cc43-4d71-a2dd-87cb221ece0c