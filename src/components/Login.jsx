import React from 'react'
import { Form, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
// import { useFirebaseApp } from "reactfire";
import {  loginEmailAndPassword, loginGoogle } from "../redux/loguinDucks";
import { useForm } from "../hooks/useForm";
import { Link } from 'react-router-dom';
// import {firebase} from '../firebase/firebaseConfig'
const Login = () => {
    const loginDispatch = useDispatch()
  
    const [formValues, handleInputChange] = useForm({
      email: '',
      password: ''
    });
    
    const {email, password} = formValues;
    
  
    // const firebase = useFirebaseApp()
    // console.log(firebase)
  
    const handleInputSubmit = async (e) =>{
      e.preventDefault()
      //inicio de sedion con ...
      loginDispatch(loginEmailAndPassword(email, password))
      //crea un nuevo usuario
    }
  
    const handleLoginGoogle = () => {
      loginDispatch(loginGoogle())
    }
    return (
        <div>
           <h1>Soy e login</h1> 
           <Form onSubmit={handleInputSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Correo</Form.Label>
            <Form.Control 
            type="email" 
            name='email'
            value={email}
            placeholder="Enter email" 
            onChange={handleInputChange}/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Contraseña</Form.Label>
            <Form.Control 
            type="password" 
            placeholder="Password"
            name='password'
            value={password}
            onChange={handleInputChange} />
            </Form.Group>
            <Button variant="primary" type="submit" >
            Enviar
            </Button>
            <div onClick={handleLoginGoogle}>
            <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="google button" />
            </div>
        </Form>
        <Link to='products'>
          productos
        </Link>
        </div>
    )
}

export default Login