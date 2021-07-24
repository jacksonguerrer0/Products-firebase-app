// constantes
import types from "./types/types";
import { firebase } from '../firebase/firebaseConfig'
// import { login } from "./loguinDucks";

const initialState = {
    loading: false,
    msjError: null,
}
// reducer
const registerReducer = (state=initialState, action) => {
    switch (action.type) {
        case types.uiSetError:
            return {...state,
                msjError: action.payload,
            }
        case types.uiRemoveError:
            return {
                ...state,
                msjError: null
            }
        case types.uiStartLoading:
            return {
                ...state, loading: true
            }
        case types.uiRemoveLoading:
            return{
                ...state, loading: false
            }
        default:
            return state;
    }
}
export default registerReducer

// action
//registro con nombre correo y contraseña
export const registroEmailPasswordName = (email, password, name) => (dispatch) =>{
    console.log("Mi registro:"+email+password+name);

    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(async ({user})=>{
            await user.updateProfile({displayName: name});
            console.log(user)
        })
        .catch((error) => {
            console.log(error)
        })
}

export const setError = (error) =>{
    return {
        type: types.uiSetError,
        payload: error
    }
}
export const removeError = () => {
    return {
        type: types.uiSetError
    }
}
export const uiStartLoading = () =>{
    return {
        type: types.uiStartLoading
    }
}
export const uiRemoveLoading = () => {
    return {
        type: types.uiRemoveLoading
    }
}