//constantes 
import { db } from "../firebase/firebaseConfig";
import types from "./types/types";


//reducer 
const productReducer = (state = {productForm: {}, productos:[]}, action) => {
    switch (action.type) {
        case types.registrar:
            return{
                ...state,
                productForm:{id: action.payload.id,
                nombre: action.payload.nombre,
                precio: action.payload.precio,
                vendedor: action.payload.vendedor}
            }
        case types.listar:
            return{
                ...state,
                productos: [...action.payload]
            }

        default:
            return state;
    }
}
export default productReducer


//actions
//asincronica

export const registroProducto = (id, nombre, precio, vendedor) => async (dispatch) => {
    console.log(id, nombre, precio, vendedor);
    const nuevoProducto = {
        id,
        nombre, 
        precio, 
        vendedor
    }
    //Agrega el objeto en la base de datos fireStore
    await db.collection('/Productos').add(nuevoProducto)
    console.log("subido")
    dispatch(registro(id,nombre,precio,vendedor));
    await dispatch(listarProducto())
}

//sincronica
export const registro = (id,nombre, precio, vendedor) =>{
    return {
        type: types.registrar,
        payload: {
            id, nombre, precio, vendedor
        }
    }
}

//Listar productos, obteneindo de fireStore
//asincrona
export const listarProducto = () => {
    return async (dispatch) => {
        const data = await db.collection('/Productos').get();
        console.log("obtendio")
        const producto = []
        //para extraer la data que necesito
        data.forEach(element => {
            producto.push({
                ...element.data()
            })
        });
        dispatch(listar(producto))
    }
}

//sincronica
export const listar = (productos) => {
    return {
        type: types.listar,
        payload: productos
    }
}
