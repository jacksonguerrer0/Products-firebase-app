import React from 'react'
import { Form, Button } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { useForm } from '../hooks/useForm'
// import {firebase} from '../firebase/firebaseConfig'
import { registroEmailPasswordName } from '../redux/loguinDucks'
const Register = () => {
    const registerDispatch = useDispatch()
    console.log(registerDispatch)
  
    const [formValues, handleInputChange, reset] = useForm({
      email: '',
      password: '',
      name: ''
    });
    
    const {email, password, name} = formValues;
    const handleInputSubmit = (e) =>{
        e.preventDefault()
        registerDispatch(registroEmailPasswordName(email,password,name))
        reset()
    }
    return(
        <div>
            <h1>Registro</h1>
            <Form onSubmit={handleInputSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Nombre</Form.Label>
                <Form.Control 
                type="text" 
                name='name'
                value={name}
                placeholder="Enter your name" 
                onChange={handleInputChange}
                />
            </Form.Group>
            <Form.Group>
                <Form.Label>Correo</Form.Label>
                <Form.Control 
                type="email" 
                name='email'
                value={email}
                placeholder="Enter email" 
                onChange={handleInputChange}
                />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Contraseña</Form.Label>
                <Form.Control 
                type="password" 
                placeholder="Password"
                name='password'
                value={password}
                onChange={handleInputChange} 
                />
            </Form.Group>
            <Button  type="submit" >
            Registrarse
            </Button>
            </Form>
        </div>
    )
}
export default Register
