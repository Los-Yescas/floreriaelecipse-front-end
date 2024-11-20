import React, { useState } from 'react'

function FlowerInformation(props) {

  return (
    <div className={props.flor? 'd-block' : 'd-none' } information>
        <img src={props.flor.imagen} alt={props.flor.nombre} />
        <div>
            <h1>{props.flor.nombre}</h1>
            <p>{props.flor.descripcion}</p>
            <h3>{props.flor.precio} $</h3>
            <p>Stock: {props.flor.stock}</p>
            {//Falta mostrar los atributos y el lugar de origen
            }
            <button onClick={() => {alert('Falta esto');props.cerrar()}}>Comprar</button>
            <button onClick={props.cerrar}>Cerrar</button>
        </div>
    </div>
  )
}

export default FlowerInformation