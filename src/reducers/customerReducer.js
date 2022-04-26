const customerInitialValue = []

const CustomerReducer = (state = customerInitialValue, action) => {
    switch(action.type){
        case "GET_CUST" : {
            return [...action.payload]
        }
        case "ADD_CUST" : {
            return [...state, action.payload]
        }
        case "DELETE_CUST" : {
            return state.filter(e => {
                if(e._id !== action.payload){
                    return {...e}
                }
            })
        }
        case "EDIT_CUST" : {
            return state.map(ele => {
                if(ele._id == action.payload._id){
                    return {...action.payload}
                } else {
                    return {...ele}
                }
            })
        }
        default : {
            return [...state]
        }
    }
}

export default CustomerReducer

