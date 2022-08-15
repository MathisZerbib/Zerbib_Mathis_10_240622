import data from "./data.json";

export const getLocations = () => {
    return data;

}


export const getLocationById = async (id) => {
  const response = getLocations();
  return response.filter(location => location.id === id);
}





