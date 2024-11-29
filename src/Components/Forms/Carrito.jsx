import React from 'react'
import carrito from '../../assets/cart.png'

function Carrito(props) {
  return (
    <div id="carrito">
      <img src={carrito} alt="carrito"  />
      <div id="lista-carrito">
        <table className='table bg-dark'>
          <thead>
            <tr>
                <th>Flor</th>
                <th>Precio</th>
                <th>Cantidad</th>
                <th>Subtotal</th>
            </tr>
          </thead>
          <tbody>
            {
              props.compras.map((compra, index) => (
                <tr key={index}>
                  <td>{compra.flor.nombre}</td>   
                  <td>{compra.flor.precio}</td>
                  <td>{compra.cantidad}</td>
                  <td>{compra.subTotal}</td>
                  <td><button className='btn btn-danger' onClick={() => {props.remove(index)}}>Eliminar</button></td>
                </tr>
              ))
            }
          </tbody>
        </table>
        <button className='btn btn-success' onClick={props.comprar}>Comprar</button>
      </div>
      </div>
  )
}

export default Carrito