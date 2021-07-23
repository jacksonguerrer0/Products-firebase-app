import React from 'react'
import { Table } from 'react-bootstrap'
import { useSelector } from 'react-redux'

const Listar = () => {
    const { productos } = useSelector(store => store.producto)
    console.log(productos)
    return (
        <div>
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
                        productos
                        ?productos.map(ele => (
                            <tr key={ele.id}>
                                <td>{ele.id}</td>
                                <td>{ele.nombre}</td>
                                <td>{ele.precio}</td>
                                <td>{ele.vendedor}</td>
                            </tr>
                        ))
                        :<tr key="sinProductos">
                            <td>No hay productos</td>
                        </tr>
                    }
                </tbody>
            </Table>
        </div>
    )
}

export default Listar
