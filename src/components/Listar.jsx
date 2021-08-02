import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap'
import {  useDispatch, useSelector } from 'react-redux'
import { listarProducto } from '../redux/productsDuck'

const autor = () => ({
    nombre: 'jackson'
})
export { cantidad }


const Listar = ({defaultCard = []}) => {

    // const { card } = useSelector(store => store.producto)
    const [card, setCard] = useState(defaultCard)

    return (
        <div>
            <h2>{autor().nombre}</h2>
            <h1>Productos CampoStore</h1>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Imagen</th>
                        <th>Nombre</th>
                        <th>Precio</th>
                        <th>Vendedor</th>
                        <th>Accion</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        
                        card && card.map(ele => (
                            <tr key={ele.id} className='product'>
                                <td>{ele.id}</td>
                                {console.log(ele.url)}
                                <td><img src={ele.url} alt="" style={{width: '100px'}}/></td>
                                <td>{ele.nombre}</td>
                                <td>{ele.precio}</td>
                                <td>{ele.vendedor}</td>
                                <td>
                                    <button>Editar</button>
                                    <button>Eliminar</button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </Table>
        </div>
    )
}

export default Listar
