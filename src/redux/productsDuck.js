//constantes 
import { db } from "../firebase/firebaseConfig";
import { fileUpload } from "../helpers/fileUpload";
import { loadNotes } from "../helpers/loadNotes";
import types from "./types/types";


//reducer 
const productReducer = (state = {card: []}, action) => {
    switch (action.type) {
        case types.cardAddNew:
            return{
                ...state,
                card: [action.payload, ...state.card]
            }
            case types.cardLoad:
                return {
                    ...state,
                    card: [...action.payload]
                }
        default:
            return state;
    }
}
export default productReducer


//actions
//asincronica
//sincronica
// 
export const CardNew = (card,file) => {
    return async (dispatch, getSate) => {
        let fileUrl=[]
        const uid = getSate().auth.uid
      
        try {
            fileUrl = await fileUpload(file)
        } catch (error) {
            fileUrl = []
            console.log(error)
        }

        const newCard = {
            id: card.id,
            nombre: card.nombre,
            precio: card.precio,
            vendedor: card.vendedor,
            url: fileUrl
        }

        const docRef = await db.collection(`${uid}/Card/data`).add(newCard)
        // dispatch(addNewCard(docRef.id, newCard))
        console.log(docRef)
    }
}


export const addNewCard = (id, newCard) => ({
    type: types.cardAddNew,
    payload: {
    id, ...newCard
    }
})


// Listar productos, obteneindo de fireStore
// asincrona
export const ListarCard = (uid) => {
    return async (dispatch) => {
        const cards = await loadNotes(uid)
        dispatch(setNote(cards))
    }
}

export const setNote = (cards) => {
    return {
        type: types.cardLoad,
        payload: cards
    }
}