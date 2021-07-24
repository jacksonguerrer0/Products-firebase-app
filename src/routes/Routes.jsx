import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Redirect, Switch } from 'react-router-dom'
import Products from '../container/Products'
import firebase from 'firebase'
import { useDispatch } from 'react-redux'
import { login } from '../redux/loguinDucks'
import PrivateRoute from './PrivateRoute'
import Register from '../components/Register'
import Login from '../components/Login'
import PublicRoute from './PublicRoute'


const Routes = () => {
    const [checking, setChecking] = useState(true)
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const dispatch = useDispatch()

    useEffect(() => {
        firebase.auth().onAuthStateChanged(async (user) => {
            console.log(user?.uid)
            if(user?.uid){
                dispatch(login( user.uid, user.email))
                setIsLoggedIn(true)
            }
            else{
                setIsLoggedIn(false)
            }
            setChecking(false)
        })
    }, [dispatch, setChecking])

    if(checking){
        return (
            <h2>Wait...</h2>
        )
    }
    return (
        <Router>
            <Switch>
                <PublicRoute 
                isAuthenticated={isLoggedIn}
                    exact
                    path="/auth/login"
                    component={ Login }
                />

                <PublicRoute 
                isAuthenticated={isLoggedIn}
                    exact
                    path="/auth/register"
                    component={ Register }
                />
                <PrivateRoute isAuthenticated={isLoggedIn} exact path='/' component={Products} />
                <Redirect to='/auth/login'/> 
            </Switch>
        </Router>
    )
}

export default Routes
