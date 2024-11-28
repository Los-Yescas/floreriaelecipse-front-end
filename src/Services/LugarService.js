import axios from 'axios';
const RES_API_URL = "http://localhost:8080/api/lugares";
export const getAllLugares = () =>axios.get(RES_API_URL);
export const createLugar = (lugar) =>axios.post(RES_API_URL,lugar);
export const getLugarById = id => axios.get(RES_API_URL+ '/' + id)