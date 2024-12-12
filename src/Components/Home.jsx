import React, { useState } from 'react'
import FlowerList from './FlowerList'
import '../styles/home.css'
import Carrito from './Carrito'
import { postPedido } from '../Services/PedidoService'

function Home() {
  const [compras, setCompras] = useState([])


  function addFlorToCompra(flor, cantidad){
    const repeatedFlor = compras.find(element => element.flor.id == flor.id)
    if (repeatedFlor){
      alert('Ya compro este elemento')
      return
    }
    const newDetalle = {flor, cantidad, subTotal: flor.precio*cantidad}
    setCompras([...compras, newDetalle])
  }
  function removeFlorFromCompra(index){
    setCompras(compras.splice(0, index), compras.splice(index + 1, compras.length))
  }
  function comprar(){
    if(compras.length > 0){
      const newCompra = {
        codigo: "100",
        total: 0,
        detalle: compras.map(compra => {
          return {
            florId: compra.flor.id,
            cantidad: compra.cantidad,
            subTotal: compra.subTotal
          }
        })
      }
      postPedido(newCompra)
      .then(res => {
        console.log(res);  
        setCompras([])
      })
      alert('Compra Realizada')
      location.reload()
    }else{
      alert('Seleccione algo para comprar')
    }
  }
  
  return (
    <div className='bg-dark container text-center text-white home'>
      <Carrito compras={compras} comprar={comprar} remove={removeFlorFromCompra}/>
      <h1>
        Floreria Eclipse
      </h1>
      <FlowerList addFlor={addFlorToCompra}/>
    </div>
  )
}

export default Home