import types from "./types/types";
import { firebase, google } from '../firebase/firebaseConfig'
//constantes

//reducer
const loguinReducer = (state = {}, action) => {
    switch (action.type) {
        case types.login:
            return {...state,
                uid: action.payload.uid,
                email: action.payload.email
            }
        default:
            return state;
    }
}

//actions
export const login = (uid, email) => (
    {
        type: types.login,
        payload: {uid, email}
    }
)

export const loginGoogle = () => (dispatch) =>{
    firebase.auth().signInWithPopup(google)
        .then(({user})=> {
            dispatch(
                login(user.uid, user.email)
            )
    })
}

//login con el email y password
export const loginEmailAndPassword = (email, password) => (dispatch) =>{
    console.log("estoy ingresando con email y password")
    return firebase.auth().signInWithEmailAndPassword(email, password)
        .then(({ user }) => {
            dispatch(login(user.uid, user.email))
            console.log(user)
            console.log("Inicio de sesion correcto")
            window.location.href = '/products'
        })
        .catch(error => {
            console.log( "Error sign"+ error + "usuario no registradp")
        })
}


export default loguinReducer