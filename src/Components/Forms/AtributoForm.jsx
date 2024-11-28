import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createLugar } from '../../Services/LugarService.js'; // Ajusta la ruta según tu estructura
import { createAtributo } from '../../Services/AtributoService.js';

const AtributoForm = () => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const navigate = useNavigate();

    const saveAtributo = (e) => {
        e.preventDefault();
        const atributo = { name, description};

        createAtributo(atributo)
            .then((response) => {
                console.log(response.data);
                navigate('/lists/atributos');
            })
            .catch((error) => console.error('Error creating atributo:', error));
    };

    return (
        <div className="container grid">
            <div className="row">
                <div className="card">
                    <h2 className="text-center text-dark-emphasis">Añadir Lugar</h2>
                    <div className="card-body">
                        <form onSubmit={saveAtributo}>
                            <div className="form-group">
                                <label className="form-label">Nombre</label>
                                <input
                                    type="text"
                                    placeholder="Ingrese el nombre"
                                    name="nombre"
                                    className="form-control"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                />
                            </div>

                            <div className="form-group mt-3">
                                <label className="form-label">Descripcion</label>
                                <input
                                    type="text"
                                    placeholder="Ingrese la descripcion"
                                    name="region"
                                    className="form-control"
                                    value={description}
                                    onChange={(e) => setDescription(e.target.value)}
                                />
                            </div>

                            <button type="submit" className="btn btn-outline-success mt-4">
                                Guardar Atributo
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AtributoForm;