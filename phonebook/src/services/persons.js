import axios from "axios";
const baseURL = "http://localhost:3001/persons";

const getAll = () => {
  const request = axios.get(baseURL);
  return request.then((response) => response.data);
};

const create = (newPersonObj) => {
  const request = axios.post(baseURL, newPersonObj);
  return request.then((response) => response.data);
};

const deletePerson = (id) => {
  const request = axios.delete(baseURL, id);
  return request.then((response) => response.data);
};

// const deletePerson = (id) => {
//   return axios.delete(baseURL, id).then((response) => {
//     console.log(response);
//   });
// };

export default { getAll, create, deletePerson };
