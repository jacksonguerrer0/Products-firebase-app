import React from 'react'
import { Form, Button} from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import Listar from '../components/Listar';
import { useForm } from '../hooks/useForm';
import {  registroProducto } from '../redux/productsDuck';

const Products = () => {
    const registroDispatch = useDispatch()

    const [formValues, handleInputChange, reset] = useForm({
        id: "",
        nombre: "",
        precio: 0,
        vendedor: ""
    })
    const {id, nombre, precio, vendedor} = formValues;

    const handleRegistroSubmit = (e) => {
        e.preventDefault()
        registroDispatch(registroProducto(id, nombre, precio, vendedor))
        reset()
    }


    return (
        <div>
            <h1>CampoStore</h1>
            <Form onSubmit={handleRegistroSubmit}>
                <Form.Group className="mb-3" controlId="formBasicId">
                    <Form.Label>Id</Form.Label>
                    <Form.Control
                        type="text"
                        name="id"
                        onChange={handleInputChange}
                        value={id}
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicNombre">
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control
                        type="text"
                        name="nombre"
                        onChange={handleInputChange}
                        value={nombre}
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicApellido">
                    <Form.Label>Precio</Form.Label>
                    <Form.Control
                        type="number"
                        name="precio"
                        onChange={handleInputChange}
                        value={precio}
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicTelefono">
                    <Form.Label>Vendedor</Form.Label>
                    <Form.Control
                        type="text"
                        name="vendedor"
                        onChange={handleInputChange}
                        value={vendedor}
                    />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Guardar
                </Button>
            </Form>

            <Listar />
        </div>
    )
}

export default Products