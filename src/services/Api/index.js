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