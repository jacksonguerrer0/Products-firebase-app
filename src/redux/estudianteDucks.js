//constantes 
import types from "./types/types";


//reducer 
const estudianteReducer = (state = [], action) => {
    switch (action.type) {
        case types.registrar:
            return{
                id: "",
                nombre: "",
                apellido: "",
                telefono: ""
            }
        // case types.listar:
        //     return 
        default:
            return state;
    }
}

export default estudianteReducer

//actions