import React, { useEffect, useState } from 'react'
import { getAllPedidos } from '../../Services/PedidoService'

function PedidosList() {

    const [pedidos, setPedidos] = useState([])

    const [error, setError] = useState(null);

    useEffect(() => {
        getAllPedidos()
        .then(res => {
            setPedidos(res.data);
            console.log(res.data);
        })
        .catch(err => {
            console.error(err);
            setError("Error al cargar los Pedidos.");
        })
    })
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
                        <th>Id Flor</th>
                        <th>Cantidad</th>
                        <th>Subtotal</th>
                        <th>Total</th>
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
                                        <td>{pedido.total}</td>
                                    </tr>
                                    {pedido.detalle.map( detalle => (
                                        <tr key={`DET-${detalle.id}`}>
                                        <td>-</td>
                                        <td>-</td>
                                        <td>{detalle.id}</td>
                                        <td>{detalle.florId}</td>
                                        <td>{detalle.cantidad}</td>
                                        <td>{detalle.subTotal}</td>
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