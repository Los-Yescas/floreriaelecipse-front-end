import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { deleteFlor, getAllFlores } from "../../Services/FlorService.js";
import { getData } from '../../Services/data.js';

const ListFlor = () => {
    const navigate = useNavigate();
    const [flores, setFlores] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        getData(getAllFlores, setFlores, setError)
    });

    const CrearFlor = () => {
        navigate('/crear-flor');
    };
    const eliminarFlor = florId => {
        deleteFlor(florId)
        .then(res => {
            console.log(res);
            alert('Flor eliminada')
        })
        .catch(err => {
            console.error(err);
            alert(err.message)
        })
    }

    return (
        <div className="container">
            <h2 className="text-center">Lista de Flores</h2>
            <button className="btn btn-outline-dark mb-4" onClick={CrearFlor}>
                Agregar Flor
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
                        <th>Nombre</th>
                        <th>Descripción</th>
                        <th>Precio</th>
                        <th>Stock</th>
                        <th>Atributos</th>
                        <th>Imagen</th>
                        <th>Acciones</th>
                    </tr>
                    </thead>
                    <tbody>
                    {flores.map((fl) => (
                        <tr key={fl.id}>
                            <td>{fl.id}</td>
                            <td>{fl.nombre}</td>
                            <td>{fl.descripcion}</td>
                            <td>${fl.precio.toFixed(2)}</td>
                            <td>{fl.stock}</td>
                            <td>{fl.atributos.map(atributo => `${atributo.name},`)}</td>
                            <td>
                                <img
                                    src={fl.imagen}
                                    alt={fl.nombre}
                                    style={{ width: "100px", height: "auto" }}
                                />
                            </td>
                            <td>
                                <button className="btn btn-danger" onClick={() => {eliminarFlor(fl.id)}}>Eliminar</button>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ListFlor;
