import React, { useEffect } from 'react'
import { Table } from 'react-bootstrap'
import {  useDispatch, useSelector } from 'react-redux'
import { listarProducto } from '../redux/productsDuck'

const Listar = () => {
    const dispatch = useDispatch()
    const {productos} = useSelector(store => store.producto)
   // const { productos } = useSelector(store => store.producto)
    // const producto = useSelector(store => store)
    useEffect(() => {
        dispatch(listarProducto())
    }, [dispatch])

    return (
        <div>
            <button onClick={()=> dispatch(listarProducto())}>Listar Producto</button>
            <h1>Productos CampoStore</h1>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Nombre</th>
                        <th>Precio</th>
                        <th>Vendedor</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        
                        productos && productos.map(ele => (
                            <tr key={ele.id + ele.nombre + ele.precio + ele.vendedor}>
                                <td>{ele.id}</td>
                                <td>{ele.nombre}</td>
                                <td>{ele.precio}</td>
                                <td>{ele.vendedor}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </Table>
        </div>
    )
}

export default Listar
