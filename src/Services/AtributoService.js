import axios from "axios";
const RES_API_URL = "http://localhost:8080/api/atributos";
export const getAllAtributos=()=>axios.get(RES_API_URL)