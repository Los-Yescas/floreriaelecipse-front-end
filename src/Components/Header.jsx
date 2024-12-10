import React from 'react'

function Header() {
  return (
      <header className='d-flex justify-content-center py-3 bg-dark text-white'>
        <ul className="nav nav-pills">
          <li className="nav-item">
            <a href="/" className="nav-link active">Compra, Compra, Compra</a>  
          </li>
          <li className="nav-item">
            <a href="/lists/flores" className="nav-link">Lista Flores</a>
          </li>
          <li className="nav-item">
            <a href="/lists/lugares" className="nav-link">Lista Lugares</a>
          </li>
          <li className="nav-item">
            <a href="/lists/atributos" className="nav-link">Lista Atributos</a>
          </li>
          <li className="nav-item">
            <a href="/lists/pedidos" className="nav-link">Lista Pedidos</a>
          </li>
        </ul>
      </header>
  )
}

export default Header