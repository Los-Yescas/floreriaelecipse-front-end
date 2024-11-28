import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createLugar } from '../../Services/LugarService.js'; // Ajusta la ruta según tu estructura

const LugarComponent = () => {
    const [pais, setPais] = useState('');
    const [region, setRegion] = useState('');
    const [ciudad, setCiudad] = useState('');
    const navigate = useNavigate();

    const saveLugar = (e) => {
        e.preventDefault();
        const lugar = { pais, region, ciudad };

        createLugar(lugar)
            .then((response) => {
                console.log(response.data);
                navigate('/lists/lugares'); //
            })
            .catch((error) => console.error('Error creating lugar:', error));
    };

    return (
        <div className="container grid">
            <div className="row">
                <div className="card">
                    <h2 className="text-center text-dark-emphasis">Añadir Lugar</h2>
                    <div className="card-body">
                        <form onSubmit={saveLugar}>
                            <div className="form-group">
                                <label className="form-label">País</label>
                                <input
                                    type="text"
                                    placeholder="Ingrese el país"
                                    name="pais"
                                    className="form-control"
                                    value={pais}
                                    onChange={(e) => setPais(e.target.value)}
                                />
                            </div>

                            <div className="form-group mt-3">
                                <label className="form-label">Región</label>
                                <input
                                    type="text"
                                    placeholder="Ingrese la región"
                                    name="region"
                                    className="form-control"
                                    value={region}
                                    onChange={(e) => setRegion(e.target.value)}
                                />
                            </div>

                            <div className="form-group mt-3">
                                <label className="form-label">Ciudad</label>
                                <input
                                    type="text"
                                    placeholder="Ingrese la ciudad"
                                    name="ciudad"
                                    className="form-control"
                                    value={ciudad}
                                    onChange={(e) => setCiudad(e.target.value)}
                                />
                            </div>

                            <button type="submit" className="btn btn-outline-success mt-4">
                                Guardar Lugar
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LugarComponent;
