import React, {useState, useEffect} from 'react'
import { getAllFlores } from '../Services/FloresService'
import '../styles/list-styles.css'
import FlowerInformation from './hoovers/FlowerInformation'

function FlowerList(props) {
    const [flores, setFlores] = useState([{}])

  useEffect(() => {
    getAllFlores()
    .then(res => {
      setFlores(res.data)
    })
  }, [])
  const [currentFlor, setCurrentFlor] = useState({})
  function clearCurrentFlor(){
    setCurrentFlor({})
  }

  return (
    <>
      <FlowerInformation flor={currentFlor} cerrar={clearCurrentFlor} addFlor={props.addFlor}/>
      <div className='container list justify-content-center'>
          {
              flores.map(
                  (flor) => {
                      return (
                          <div className='list-element card text-white' key={flor.id} style={{
                            backgroundImage: `url(${flor.imagen})`
                          }} onClick={()=>{setCurrentFlor(flor)}}>
                              <h2>{flor.nombre}</h2>
                          </div>
                      )
                  }
              )
          }
      </div>
    </>
  )
}

export default FlowerList