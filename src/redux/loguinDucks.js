import types from "./types/types";
import { firebase, google } from '../firebase/firebaseConfig'
//constantes



//reducer
const loguinReducer = (state = {}, action) => {
    switch (action.type) {
        case types.login:
            return {...state,
                correo: action.payload.email,
                contraseña: action.payload.password
            }
        case types.logout:
            return {}
    
        default:
            return state;
    }
}

//actions
export const login = (email, password) => (
    {
        type: types.login,
        payload: {email, password}
    }
)

export const loginGoogle = () => (dispatch) =>{
    firebase.auth().signInWithPopup(google)
        .then(({user})=> {
            console.log(user)
            dispatch(
                login(user.email, user.displayName)
            )
    })
}
//registro con nombre correo y contraseña
export const registroEmailPasswordName = (email, password, name) => (dispatch) =>{
    console.log("xdxdxd"+email+password+name);

    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(async ({user})=>{
            await user.updateProfile({displayName: name});
            dispatch(login(user.uid, user.displayName))
        })
        .catch((error) => {
            console.log(error)
        })
}


export default loguinReducer