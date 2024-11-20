import axios from "axios";

const API = 'http://localhost:8080/api/flores'

function getAllFlores(){
    return axios.get(API)
}

export {getAllFlores}