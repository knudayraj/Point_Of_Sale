const productInitialValue = []

const ProductReducer = (state = productInitialValue, action) => {
    switch(action.type){
        case "ADD_PROD" : {
            return [...state, action.payload]
        } 
        case "GET_PROD" : {
            return action.payload
        }
        case "REMOVE_PROD" : {
            return state.filter(e => {
                return e._id !== action.payload
            })
        }
        case "EDIT_PROD" : {
            return state.map(e => {
                if(e._id === action.payload._id){
                    return {...action.payload}
                } else {
                    return {...e}
                }
            })
        }
        default : {
            return [...state]
        }
    }
}

export default ProductReducer