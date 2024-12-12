import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import { createFlor } from "../../Services/FlorService.js";
import { getAllAtributos } from '../../Services/AtributoService.js';
import { createLugar } from '../../Services/LugarService.js';

const FlorComponent = () => {
    
    const navigate = useNavigate();
    const [nombre, setNombre] = useState("");
    const [descripcion, setDescripcion] = useState("");
    const [precio, setPrecio] = useState(0);
    const [imagen, setImagen] = useState("");
    const [stock, setStock] = useState(0);
    const [atributos, setAtributos] = useState([])

    const [listaAtributos, setListaAtributos] = useState([{}])

    //Lugar de Origen
    const [pais, setPais] = useState('');
    const [region, setRegion] = useState('');
    const [ciudad, setCiudad] = useState('');

    const [errors, setErrors] = useState({
        nombre: '',
        descripcion: '',
        precio: '',
        imagen: '',
        stock: '',
        pais: '',
        region: '',
        ciudad: ''
    })

    const saveFlor = (e) => { 
        e.preventDefault();
        if(validateForm()){
            const lugar = { pais, region, ciudad };
            createLugar(lugar)
                .then((response) => {
                    console.log(response.data);
                    const origenId = response.data.id
                    const flor = { 
                        nombre, 
                        precio, 
                        descripcion, 
                        imagen, 
                        stock,
                        origenId, 
                        atributos: atributos.map(atributo => {return {id: atributo} }) 
                    };
                        
                        
                    createFlor(flor)
                        .then(res => {
                            console.log(res);
                            navigate('/lists/flores');
                        })
                        .catch(err => {
                            console.log(err)
                            alert('Error creando Flor')
                        });
                })
                .catch((error) => {c
                    console.error('Error creating lugar:', error)
                    alert('Error creando lugar')
                });
        }else{
            alert('Formulario Incompleto')
        }
        
    };

    const validateForm = () => {
        let validate = true
        let copyErrors = errors
        if(nombre.trim()){
            copyErrors.nombre = ''
        }else{
            validate = false
            copyErrors.nombre = 'Nombre Faltante'
        }

        if(descripcion.trim()){
            copyErrors.descripcion = ''
        }else{
            validate = false
            copyErrors.descripcion = 'Descripcion Faltante'
        }

        if(precio > 0){
            copyErrors.precio = ''
        }else{
            validate =false
            copyErrors.precio = 'Precio Incorrecto'
        }

        if(imagen.trim()){
            copyErrors.imagen = ''
        }else{
            validate = false
            copyErrors.imagen = 'Imagen Faltante'
        }

        if(stock > 0){
            copyErrors.stock = ''
        }else{
            validate = false
            copyErrors.stock = 'Stock Incorrecto'
        }

        if(pais.trim()){
            copyErrors.pais = ''
        }else{
            validate = false
            copyErrors.pais = 'Pais faltante'
        }

        if(region.trim()){
            copyErrors.region = ''
        }else{
            validate = false
            copyErrors.region ='Region Faltante'
        }

        if(ciudad.trim()){
            copyErrors.ciudad = ''
        }else{
            validate = false
            copyErrors.ciudad = 'Ciudad Faltante'
        }
        
        setErrors(copyErrors)
        return validate
    }



    useEffect(() => {
        getAllAtributos().
        then(res => {
            setListaAtributos(res.data)
        })
    }, [])    

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
                                    className={`form-control ${errors.nombre? 'is-invalid' : ''}`}
                                    value={nombre}
                                    onChange={(e) => setNombre(e.target.value)}
                                />
                                {errors.nombre && (<div className='invalid-feedback'>{errors.nombre}</div>)}
                            </div>

                            <div className="form-group mt-3">
                                <label className="form-label">Descripción</label>
                                <input
                                    type="text"
                                    placeholder="Ingrese la descripción"
                                    name="descripcion"
                                    className={`form-control ${errors.descripcion? 'is-invalid' : ''}`}
                                    value={descripcion}
                                    onChange={(e) => setDescripcion(e.target.value)}
                                />
                                {errors.descripcion && (<div className='invalid-feedback'>{errors.descripcion}</div>)}
                            </div>

                            <div className="form-group mt-3">
                                <label className="form-label">Precio</label>
                                <input
                                    type="number"
                                    step="0.01"
                                    placeholder="Ingrese el precio (ej. 15.50)"
                                    name="precio"
                                    className={`form-control ${errors.precio? 'is-invalid' : ''}`}
                                    value={precio}
                                    onChange={(e) => setPrecio(e.target.value)}
                                />
                                {errors.precio && (<div className='invalid-feedback'>{errors.precio}</div>)}
                            </div>

                            <div className="form-group mt-3">
                                <label className="form-label">Imagen (URL)</label>
                                <input
                                    type="text"
                                    placeholder="Ingrese la URL de la imagen"
                                    name="imagen"
                                    className={`form-control ${errors.imagen? 'is-invalid' : ''}`}
                                    value={imagen}
                                    onChange={(e) => setImagen(e.target.value)}
                                />
                                {errors.imagen && (<div className='invalid-feedback'>{errors.imagen}</div>)}
                            </div>

                            <div className="form-group mt-3">
                                <label className="form-label">Stock</label>
                                <input
                                    type="number"
                                    placeholder="Ingrese la cantidad disponible"
                                    name="stock"
                                    className={`form-control ${errors.stock? 'is-invalid' : ''}`}
                                    value={stock}
                                    onChange={(e) => setStock(e.target.value)}
                                />
                                {errors.stock && (<div className='invalid-feedback'>{errors.stock}</div>)}
                            </div>
                            <div className="form-group">
                                <label className="form-label">País</label>
                                <input
                                    type="text"
                                    placeholder="Ingrese el país"
                                    name="pais"
                                    className={`form-control ${errors.pais? 'is-invalid' : ''}`}
                                    value={pais}
                                    onChange={(e) => setPais(e.target.value)}
                                />
                                {errors.pais && (<div className='invalid-feedback'>{errors.pais}</div>)}
                            </div>

                            <div className="form-group mt-3">
                                <label className="form-label">Región</label>
                                <input
                                    type="text"
                                    placeholder="Ingrese la región"
                                    name="region"
                                    className={`form-control ${errors.region? 'is-invalid' : ''}`}
                                    value={region}
                                    onChange={(e) => setRegion(e.target.value)}
                                />
                                {errors.region && (<div className='invalid-feedback'>{errors.region}</div>)}
                            </div>

                            <div className="form-group mt-3">
                                <label className="form-label">Ciudad</label>
                                <input
                                    type="text"
                                    placeholder="Ingrese la ciudad"
                                    name="ciudad"
                                    className={`form-control ${errors.ciudad? 'is-invalid' : ''}`}
                                    value={ciudad}
                                    onChange={(e) => setCiudad(e.target.value)}
                                />
                                {errors.ciudad && (<div className='invalid-feedback'>{errors.ciudad}</div>)}
                            </div>
                            <div className="form-group mt-3">
                                <label className="form-label">Atributos</label>
                                <select 
                                key='ATRIBUTOS'
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
                                            <option key={`ATR-${atributo.id}`} value={atributo.id}>
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

