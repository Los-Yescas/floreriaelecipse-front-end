import React, { useEffect, useState } from 'react'
import { getLugarById } from '../../Services/LugarService';

function FlowerInformation(props) {
  const [lugar, setLugar] = useState({})
  if (props.flor.origenId) {
    getLugarById(props.flor.origenId).
    then(res => {
      setLugar(res.data)
    })
  }
  function comprarFlor(){
    
    props.addFlor(props.flor, cantidad)
    setCantidad(1)
    props.cerrar()
  }
  function cancelar(){
    props.cerrar()
  }

  const [cantidad, setCantidad] = useState(1)
  return (
    <div className={`${props.flor.id? 'd-flex' : 'd-none' } information`}>
        <img src={props.flor.imagen} alt={props.flor.nombre} />
        <div className='information__text'>
            <h1>{props.flor.nombre}</h1>
            <p>{props.flor.descripcion}</p>
            <h3>{props.flor.precio} $</h3>
            <p>Stock: {props.flor.stock}</p>
            <div key={lugar.id} className="lugar">
              <h4>Pais: {lugar.pais}</h4>
              <h4>Region: {lugar.region}</h4>
              <h4>Ciudad: {lugar.ciudad}</h4>
            </div>
            <div className="atributos">
              <h2>Atributos: </h2>
              { 
                props.flor.id? 
                props.flor.atributos.map(atributo => (
                  <p key={`atributo-${atributo.id}`}><strong>{atributo.name}</strong>, {atributo.description}</p>
                ))
                : 
                ''
              }
            </div>
            <form onSubmit={e => {e.preventDefault()}}>
              <label className='form-label'>Cantidad</label>
              <input type="number" name='cantidad' value={cantidad} 
              onChange={
                e => {
                  const cantidad = e.target.value
                  if (cantidad < 0){
                    setCantidad(1)
                  }else if(cantidad > props.flor.stock){
                    setCantidad(props.flor.stock)
                  }else{
                    setCantidad(cantidad)
                  }
                }
                }
                onLoad={() => {setCantidad(1)}}
                />
              <button onClick={comprarFlor} className={`btn btn-success ${props.flor.stock <= 0? 'd-none' : ''}`}>Comprar</button>
              <button onClick={cancelar} className='btn btn-danger'>Cerrar</button>
            </form>

        </div>
    </div>
  )
}

export default FlowerInformation