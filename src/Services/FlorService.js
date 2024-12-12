import axios from "axios";
const RES_API_URL = "http://localhost:8080/api/flores";
export const getAllFlores = () =>axios(RES_API_URL);
export const createFlor = (flor) =>axios.post(RES_API_URL,flor);
export const deleteFlor = (flor) => axios.delete(`${RES_API_URL}/${flor}`)