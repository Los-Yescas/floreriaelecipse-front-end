import axios from "axios";
const RES_API_URL = "http://localhost:8080/api/pedidos";
export const getAllPedidos = () =>axios(RES_API_URL);