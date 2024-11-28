import React, {useEffect, useState} from 'react'
import {useNavigate} from "react-router-dom";
import {getAllLugares} from "../../Services/LugarService.js";

const ListLugar = () => {
    const navigate=useNavigate();
    const [lugar, setLugar] = useState([]);
    const [error,setError] = useState(null);
  useEffect( () =>
    {
     getAllLugares().then(res=>{
         setLugar(res.data)
         console.log(res);

     }).catch(err=>{
         console.log(err);
         setError("error al cargar los lugares");
     });
    },[]);
    const crearLugar=() =>
    {
        navigate("/crear-lugar");
    }
    return (
        <div className="container">
            <h2 className="text-center">Lista de Lugares</h2>
            <button className="btn btn-outline-dark mb-4" onClick={crearLugar}>
                Agregar Lugar
            </button>

            {error && (
                <div className="alert alert-danger" role="alert">
                    {error}
                </div>
            )}

            <div className="row justify-content-center align-items-center">
                <table className="table table-striped table-bordered mx-auto table-dark">
                    <thead>
                    <tr>
                        <th>ID</th>
                        <th>Pais</th>
                        <th>Region</th>
                        <th>Cuidad</th>
                    </tr>
                    </thead>
                    <tbody>
                    {lugar.map((lu) => (
                        <tr key={lu.id}>
                            <td>{lu.id}</td>
                            <td>{lu.pais}</td>
                            <td>{lu.region}</td>
                            <td>{lu.ciudad}</td>

                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};
export default ListLugar
