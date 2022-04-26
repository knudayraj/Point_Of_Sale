const billsInitialValue = []

// const BillsReducer = (state = billsInitialValue, action) => {
//     switch(action.type){
//         case "GET_BILLS" : {
//             return [action.payload]
//         }
        // case "ADD_BILL" : {
        //     return [...state, action.payload]
        // }
        // case "REMOVE_BILL" : {
        //     return state.filter(e => {
        //         if(e._id !== action.payload){ 
        //             return {...e}
        //         }
        //     })
        // }
//         default : {
//             return [...state]
//         }
//     } 
// }

const BillsReducer = (state = billsInitialValue, action) => {
    switch(action.type){
        case "GET_BILL" : {
            // return {...state, data :[...action.payload]}
            return [...state, ...action.payload]
        }
        // case "GET_BILL" : {
        //     return action.payload
        // }
        case "ADD_BILL" : { 
            return [...state, action.payload]
        }
        case "REMOVE_BILL" : {
            return state.filter(e => {
                if(e._id !== action.payload){ 
                    return {...e}
                }
            })
        }
        case "SHOW_INVOICE" : {
            return action.payload
        }
        default : {
            return [...state]
        }
    }
}

export default BillsReducer