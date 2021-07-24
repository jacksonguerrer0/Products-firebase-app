import types from "./types/types";
import { firebase, google } from '../firebase/firebaseConfig'
import { uiStartLoading } from "./registerDucks";
//constantes

//reducer
const loguinReducer = (state = {}, action) => {
    switch (action.type) {
        case types.login:
            return {...state,
                uid: action.payload.uid,
                email: action.payload.email
            }
        case types.logout:
            return {}
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
            window.location.href='/';
            dispatch(
                login(user.uid, user.email)
            )
    })
}

//login con el email y password
export const loginEmailAndPassword = (email, password) => (dispatch) =>{
    return firebase.auth().signInWithEmailAndPassword(email, password)
        .then(({ user }) => {
            dispatch(uiStartLoading())
            dispatch(login(user.uid, user.email))
            console.log("Inicio de sesion correcto")
            window.location.href='/';
        })
        .catch(error => {
            console.log( "Error sign"+ error + "usuario no registradp")
            dispatch(uiStartLoading())
        })
}

//cerrar sesion
export const eventLogout = () => {
    return async (dispatch) => {
        await firebase.auth().signOut();
        dispatch( logout() )
    }
}

export const logout = () => ({
    type: types.logout
})



export default loguinReducer