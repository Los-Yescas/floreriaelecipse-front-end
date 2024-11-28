import React from 'react'
import FlowerList from './Lists/FlowerList'
import '../styles/home.css'

function Home() {
  
  return (
    <div className='bg-dark container text-center text-white home'>
      <h1>
        Floreria Eclipse
      </h1>
      <FlowerList/>
    </div>
  )
}

export default Home