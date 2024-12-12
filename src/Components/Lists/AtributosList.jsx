import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { deleteAtributo, getAllAtributos } from '../../Services/AtributoService';

function AtributosList() {
    const navigate = useNavigate();
    const [atributos, setAtributos] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        getAllAtributos()
            .then(res => {
                setAtributos(res.data);
                console.log(res.data);
            })
            .catch(err => {
                console.error(err);
                setError("Error al cargar los atributos.");
            });
    });

    const crearAtributo = () => {
        navigate('/crear-atributo');
    };

    const eliminarAtributo = id => {
        deleteAtributo(id)
        .then( res => {
            console.log(res);
            alert('Atributo eliminado')
        })
        .catch(err => {
            console.error(err);
            alert(err.message)
        })
    }

    return (
        <div className="container">
            <h2 className="text-center">Lista de Flores</h2>
            <button className="btn btn-outline-dark mb-4" onClick={crearAtributo}>
                Agregar Atributo
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
                        <th>Acciones</th>
                    </tr>
                    </thead>
                    <tbody>
                    {atributos.map((atributo) => (
                        <tr key={atributo.id}>
                            <td>{atributo.id}</td>
                            <td>{atributo.name}</td>
                            <td>{atributo.description}</td>
                            <td><button className="btn btn-danger" onClick={() => {
                                eliminarAtributo(atributo.id)
                            }}>Eliminar</button></td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default AtributosList