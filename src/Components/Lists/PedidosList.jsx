import React, { useEffect, useState } from 'react'
import { deletePedido, getAllPedidos } from '../../Services/PedidoService'
import { getAllFlores } from '../../Services/FlorService';

function PedidosList() {

    const [pedidos, setPedidos] = useState([])
    const [flores, setFlores] = useState([])

    const [error, setError] = useState(null);

    useEffect(() => {
        getAllFlores()
        .then(res => {
            setFlores(res.data)
        })
        .catch(err => {
            console.error(err)
            setError(error + "Error al cargar las flores")
        })
        getAllPedidos()
        .then(res => {
            setPedidos(res.data);
        })
        .catch(err => {
            console.error(err);
            setError(error + "Error al cargar los Pedidos.");
        })
    }, [])

    const eliminarPedido = id => {
        deletePedido(id)
        .then(res => {
            console.log(res.data);
            alert('Pedido Eliminado')
            location.reload()
        })
        .catch(err => {
            console.error(err);
            alert('Error al eliminar')
        })
    }

  return (
    <div className='container'>
        <h2 className="text-center">Lista de Pedidos</h2>
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
                        <th>Codigo</th>
                        <th>Id Detalle</th>
                        <th>Flor</th>
                        <th>Precio</th>
                        <th>Cantidad</th>
                        <th>Subtotal</th>
                        <th>Total</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        pedidos.map(pedido => {
                            return (
                                <>
                                    <tr key={pedido.id}>
                                        <td>{pedido.id}</td>
                                        <td>{pedido.codigo}</td>
                                        <td>-</td>
                                        <td>-</td>
                                        <td>-</td>
                                        <td>-</td>
                                        <td>-</td>
                                        <td>{pedido.total}</td>
                                        <td><button className="btn btn-danger" onClick={
                                            () => {
                                                eliminarPedido(pedido.id)
                                            }
                                        }>Eliminar</button></td>
                                    </tr>
                                    {pedido.detalle.map( detalle => (
                                    <tr key={`DET-${detalle.id}`}>
                                        <td>-</td>
                                        <td>-</td>
                                        <td>{detalle.id}</td>
                                        <td>{flores.filter(flor => flor.id == detalle.florId)[0].nombre}</td>
                                        <td>{flores.filter(flor => flor.id == detalle.florId)[0].precio}</td>
                                        <td>{detalle.cantidad}</td>
                                        <td>{detalle.subTotal}</td>
                                        <td>-</td>
                                        <td>-</td>
                                    </tr>
                                    ))}
                                </>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default PedidosList