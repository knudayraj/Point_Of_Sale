// const billsInitialValue = {
//     data : []
// }

const billsInitialValue = []

const InvoiceReducer = (state = billsInitialValue, action) => {
    switch(action.type) {
        case "GET_BILL" : {
            // return {...state, data :[...action.payload]}
            return [...state, ...action.payload]
        }
        case "REMOVE_BILL" : {
            return state.filter(e => {
                if(e._id !== action.payload){
                    return {...e}
                }
            })
        }
        case "ADD_BILL" : {
            return [...state, action.payload]
        }
        default : {
            return [...state]
        }
    }
}

export default InvoiceReducer