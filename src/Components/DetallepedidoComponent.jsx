import React, {useState} from 'react'
import {useNavigate} from "react-router-dom";
import {createDetallepedido} from "../Services/DetallepedidoService.js";

const DetallepedidoComponent = () => {
    const navigate = useNavigate();
    const [cantidad, setCantidad] = useState([]);
    const [florid, setFlorid] = useState([]);

    const [flordata, setFlordata] = useState([]);
    return (
        <div>DetallepedidoComponent</div>
    )
}
export default DetallepedidoComponent
