import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import { createFlor } from "../../Services/FlorService.js";
import { getAllAtributos } from '../../Services/AtributoService.js';

const FlorComponent = () => {
    
    const navigate = useNavigate();
    const [nombre, setNombre] = useState("");
    const [descripcion, setDescripcion] = useState("");
    const [precio, setPrecio] = useState(0);
    const [imagen, setImagen] = useState("");
    const [stock, setStock] = useState(0);
    const [lugar, setLugar] = useState("");
    const [atributos, setAtributos] = useState([])

    const [listaAtributos, setListaAtributos] = useState([{}])
    useEffect(() => {
        getAllAtributos().
        then(res => {
            setListaAtributos(res.data)
        })
    }, [])

    const saveFlor = (e) => { 
        e.preventDefault();
        const flor = { nombre, descripcion, precio, imagen, stock,
             origenId: lugar, 
            atributos: atributos.map(atributo => {return {id: atributo} }) };
        console.log(flor);
        
        createFlor(flor)
            .then(res => {
                console.log(res);
                navigate('/lists/flores');
            })
            .catch(err => console.log(err));
    };

    return (
        <div className="container grid">
            <div className="row">
                <div className="card">
                    <h2 className="text-center text-dark-emphasis">Añadir Tipo de flor</h2>
                    <div className="card-body">
                        <form onSubmit={saveFlor}>
                            <div className="form-group">
                                <label className="form-label">Nombre</label>
                                <input
                                    type="text"
                                    placeholder="Ingrese el nombre de la flor"
                                    name="nombre"
                                    className="form-control"
                                    value={nombre}
                                    onChange={(e) => setNombre(e.target.value)}
                                />
                            </div>

                            <div className="form-group mt-3">
                                <label className="form-label">Descripción</label>
                                <input
                                    type="text"
                                    placeholder="Ingrese la descripción"
                                    name="descripcion"
                                    className="form-control"
                                    value={descripcion}
                                    onChange={(e) => setDescripcion(e.target.value)}
                                />
                            </div>

                            <div className="form-group mt-3">
                                <label className="form-label">Precio</label>
                                <input
                                    type="number"
                                    step="0.01"
                                    placeholder="Ingrese el precio (ej. 15.50)"
                                    name="precio"
                                    className="form-control"
                                    value={precio}
                                    onChange={(e) => setPrecio(e.target.value)}
                                />
                            </div>

                            <div className="form-group mt-3">
                                <label className="form-label">Imagen (URL)</label>
                                <input
                                    type="text"
                                    placeholder="Ingrese la URL de la imagen"
                                    name="imagen"
                                    className="form-control"
                                    value={imagen}
                                    onChange={(e) => setImagen(e.target.value)}
                                />
                            </div>

                            <div className="form-group mt-3">
                                <label className="form-label">Stock</label>
                                <input
                                    type="number"
                                    placeholder="Ingrese la cantidad disponible"
                                    name="stock"
                                    className="form-control"
                                    value={stock}
                                    onChange={(e) => setStock(e.target.value)}
                                />
                            </div>
                            <div className="form-group mt-3">
                                <label className="form-label">Id del lugar</label>
                                <input
                                    type="number"
                                    placeholder="Ingrese el id del lugar de origen"
                                    name="lugarId"
                                    className="form-control"
                                    value={lugar}
                                    onChange={(e) => setLugar(e.target.value)}
                                />
                            </div>
                            <div className="form-group mt-3">
                                <label className="form-label">Atributos</label>
                                <select 
                                name="atributos" 
                                id="atributos-input"
                                multiple={true}
                                value={atributos}
                                onChange={
                                    event => {
                                        const options = [...event.target.selectedOptions]
                                        const values = options.map(option => option.value)
                                        setAtributos(values);
                                    }
                                }
                                className='form-select'
                                >
                                    {
                                        listaAtributos.map(atributo => (
                                            <option key={atributo.id} value={atributo.id}>
                                                {atributo.name}
                                            </option>
                                        ))
                                    }
                                </select>
                            </div>

                            <button type="submit" className="btn btn-outline-success mt-4">
                                Guardar Flor
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FlorComponent;

