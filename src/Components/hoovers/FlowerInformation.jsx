import React, { useEffect, useState } from 'react'
import { getLugarById } from '../../Services/LugarService';

function FlowerInformation(props) {
  const [lugar, setLugar] = useState({})
  return (
    <div className={`${props.flor.id? 'd-flex' : 'd-none' } information`}>
        <img src={props.flor.imagen} alt={props.flor.nombre} />
        <div className='information__text'>
            <h1>{props.flor.nombre}</h1>
            <p>{props.flor.descripcion}</p>
            <h3>{props.flor.precio} $</h3>
            <p>Stock: {props.flor.stock}</p>
            {//Falta mostrar los atributos y el lugar de origen
            }
            <button className='btn btn-success' onClick={() => {alert('Falta esto');props.cerrar()}}>Comprar</button>
            <button className='btn btn-danger' onClick={props.cerrar}>Cerrar</button>
        </div>
    </div>
  )
}

export default FlowerInformation