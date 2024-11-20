import React from 'react'

function Header() {
  return (
      <header className='d-flex justify-content-center py-3 bg-dark text-white'>
        <ul className="nav nav-pills">
          <li className="nav-item">
            <a href="#" className="nav-link active">Flores</a>
          </li>
        </ul>
      </header>
  )
}

export default Header