import React from 'react'
import { Form, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { useForm } from '../hooks/useForm'
// import {firebase} from '../firebase/firebaseConfig'
import { registroEmailPasswordName, setError } from '../redux/registerDucks'
import {Link} from 'react-router-dom'
import validator from 'validator'

const Register = () => {
    const registerDispatch = useDispatch()
    const { msjError } = useSelector(store => store.ui)
    const [formValues, handleInputChange, reset] = useForm({
      email: '',
      password: '',
      name: ''
    });
    const {email, password, name} = formValues;
    const handleInputSubmit = (e) =>{
        e.preventDefault()
        if (formValidate()){
            registerDispatch(registroEmailPasswordName(email,password,name))
            reset()
        }
    }
    const handleValidateChange = (e) => {
        handleInputChange(e);
        formValidate()
    }
    const formValidate = () => {
        if(name.trim().length===0){
            registerDispatch(setError('Nombre requerido'))
            return false
        } else if(!validator.isEmail(email)){
            registerDispatch(setError('Email requerido'))
            return false
        }else if (validator.isStrongPassword(password, {
            minLength: 8, minLowercase: 1,
            minUppercase: 1, minNumbers: 1, minSymbols: 1
          })) {
          console.log("Contraseña fuerte")
        } else{
            registerDispatch(setError('Tu contraseña es muy debil'))
            return false
        }
        return true
    }
    return(
        <div>
            <h1>Registro</h1>
            {
                msjError && (
                    <div className="alert alert-danger" role="alert">
                        {msjError}
                    </div>
                )
            }
            <Form onSubmit={handleInputSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Nombre</Form.Label>
                <Form.Control 
                type="text" 
                name='name'
                value={name}
                placeholder="Enter your name" 
                onChange={handleValidateChange}
                />
            </Form.Group>
            <Form.Group>
                <Form.Label>Correo</Form.Label>
                <Form.Control 
                // type="email" 
                name='email'
                value={email}
                placeholder="Enter email" 
                onChange={handleValidateChange}
                />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Contraseña</Form.Label>
                <Form.Control 
                type="password" 
                placeholder="Password"
                name='password'
                value={password}
                onChange={handleValidateChange} 
                />
            </Form.Group>
            <Button  type="submit" >
            Registrarse
            </Button>
            </Form>
            <Link to='/login'>Login</Link>
        </div>
    )
}
export default Register
