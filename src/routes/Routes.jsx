import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Login from '../components/Login'
import Register from '../components/Register'
import Products from '../container/Products'

const Routes = () => {
    return (
        <Router>
            <Switch>
                <Route path='/' exact component={Register}/>
                <Route exact path='/login' component={Login}/>
                <Route exact path='/products' component={Products} />
            </Switch>
        </Router>
    )
}

export default Routes
