import axios from 'axios'

export const startAddingBills = (formData) => {
    return (dispatch) => {
        axios.post('http://dct-billing-app.herokuapp.com/api/bills', formData, {
            headers : {
                Authorization : `Bearer ${localStorage.getItem('token')}`
            } 
        })
        .then(respose => {
            console.log('startAddingBills', respose.data)
            const data = respose.data
            dispatch(cartItem(data))
        })
        .catch(err => {
            console.log(err.message) 
        })
    }
}

const cartItem = (data) => {
    return {
        type : "ADD_BILL",
        payload : data
    }
}


export const startRemoveBills = (_id) => {
    return (dispatch) => {
        axios.delete(`http://dct-billing-app.herokuapp.com/api/bills/${_id}`, {
            headers : {
                Authorization : `Bearer ${localStorage.getItem('token')}`
            }
        }) 
        .then(response => {
            console.log('startRemoveBills', response.data)
            const _id = response.data._id
            dispatch(removedItem(_id))

        })
        .catch(err => {
            console.log('startRemoveBills',err.message)
        })
    }
}

const removedItem = (_id) => {
    return {
        type : "REMOVE_BILL",
        payload : _id
    }
}


export const startGetBills = () => {
    return (dispatch) => {
        axios.get('http://dct-billing-app.herokuapp.com/api/bills/', {
            headers : {
                Authorization : `Bearer ${localStorage.getItem('token')}`
            }
        })
        .then(response => {
            console.log('startGetBills', response.data)
            const data = response.data
            dispatch(getBills(data))
        })
        .catch(err => {
            console.log('startGetBills',err.message)
        })
    }
}

const getBills = (data) => {
    return {
        type : "GET_BILL",
        payload : data
    }
}

export const startGetInvoice = () => {
    return (dispatch) => {
        axios.get('http://dct-billing-app.herokuapp.com/api/bills',{
            headers : {
                Authorization : `Bearer ${localStorage.getItem('token')}`
            }
        })
            .then(response => {
                // console.log(response.data)
                const invoice = response.data
                dispatch(getInvoice(invoice))
            })
            .catch(err => {
                console.log(err.message)
            })
    }
}

const getInvoice = (invoice) => {
    // console.log('invoice',invoice)
    return {
        type : "GET_BILL",
        payload : invoice
    }
}


export const startShowBill = (_id) => {
    return (dispatch) => {
        axios.get(`http://dct-billing-app.herokuapp.com/api/bills/${_id}`, {
            headers : {
                Authorization : `Bearer ${localStorage.getItem('token')}`
            }
        }) 
        .then(response => {
            console.log('startShowBill', response.data)
            const invoice = response.data
            dispatch(showItem(invoice))
        })
        .catch(err => {
            console.log('startShowBill', err.message)
        })
    }
}

const showItem = (invoice) => {
    return {
        type : "SHOW_INVOICE",
        payload : invoice
    }
}

// export const startAddingBills = () => {
//     return (dispatch) => {
//         axios.get('http://dct-billing-app.herokuapp.com/api/bills',{
//             headers : {
//                 Authorization : `Bearer ${localStorage.getItem('token')}`
//             }
//         })
//             .then(response => {
//                 console.log('startAddingBills',response.data)
//                 const invoice = response.data
//                 dispatch(cartItem(invoice))
//             })
//             .catch(err => {
//                 console.log(err.message)
//             })
//     }
// }

// const cartItem = (invoice) => {
//     // console.log('invoice',invoice)
//     return {
//         type : "GET_BILL",
//         payload : invoice
//     }
// }