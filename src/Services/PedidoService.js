import axios from "axios";
const RES_API_URL = "http://localhost:8080/api/pedidos";
export const getAllPedidos = () =>axios(RES_API_URL);
export const postPedido = pedido => axios.post(RES_API_URL, pedido)
export const deletePedido = pedido => axios.delete(`${RES_API_URL}/${pedido}`)