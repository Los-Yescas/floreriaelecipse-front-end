import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createLugar } from '../../Services/LugarService.js'; // Ajusta la ruta según tu estructura
import { createAtributo } from '../../Services/AtributoService.js';

const AtributoForm = () => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const navigate = useNavigate();

    const [errors, setErrors] = useState({
        name: '',
        description: ''
    })

    const saveAtributo = (e) => {
        e.preventDefault();
        if(validateForm()){
            const atributo = { name, description};
    
            createAtributo(atributo)
                .then((response) => {
                    console.log(response.data);
                    navigate('/lists/atributos');
                })
                .catch((error) => console.error('Error creating atributo:', error));
        }else{
            alert('Formulario Incompleto')
        }
    }

    const validateForm = () => {
        let validate = true
        let copyErrors = errors
        if(name.trim()){
            copyErrors.name = ''
        }else{
            validate = false
            copyErrors.name = 'Nombre Faltante'
        }
        if(description.trim()){
            copyErrors.description = ''
        }else{
            validate = false
            copyErrors.description = 'Descripcion faltante'
        }
        setErrors(copyErrors)
        
        return validate
    }

    return (
        <div className="container grid">
            <div className="row">
                <div className="card">
                    <h2 className="text-center text-dark-emphasis">Añadir Atributo</h2>
                    <div className="card-body">
                        <form onSubmit={saveAtributo}>
                            <div className="form-group">
                                <label className="form-label">Nombre</label>
                                <input
                                    type="text"
                                    placeholder="Ingrese el nombre"
                                    name="nombre"
                                    className={`form-control ${errors.name? 'is-invalid' : ''}`}
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                />
                                 {errors.name && (<div className='invalid-feedback'>{errors.name}</div>)}
                            </div>

                            <div className="form-group mt-3">
                                <label className="form-label">Descripcion</label>
                                <input
                                    type="text"
                                    placeholder="Ingrese la descripcion"
                                    name="region"
                                    className={`form-control ${errors.description? 'is-invalid' : ''}`}
                                    value={description}
                                    onChange={(e) => setDescription(e.target.value)}
                                />
                                {errors.description && (<div className='invalid-feedback'>{errors.description}</div>)}
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