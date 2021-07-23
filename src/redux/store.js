import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";
import estudianteReducer from "./productsDuck";
import loguinReducer from "./loguinDucks";

const reducers = combineReducers({
    login: loguinReducer,
    producto: estudianteReducer
})
const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const store = createStore(
    reducers,    
    composeEnhancers(
        applyMiddleware(thunk)
    )
)

export default store