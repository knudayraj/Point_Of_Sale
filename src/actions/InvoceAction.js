import axios from 'axios'


export const startGetInvoice = () => {
    const token = localStorage.getItem('token')
    return (dispatch) => {
        
        axios.get('//dct-billing-app.herokuapp.com/api/bills',{
            headers : {
                Authorization : `Bearer ${token}`
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

export const startRemoveBills = (_id) => {
    const token = localStorage.getItem('token')
    return (dispatch) => [
        axios.delete(`//dct-billing-app.herokuapp.com/api/bills/${_id}`, {
            headers : {
                Authorization : `Bearer ${token}`
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
    ]
}

const removedItem = (_id) => {
    return {
        type : "REMOVE_BILL",
        payload : _id
    }
}

export const startAddingBills = (formData) => {
    return (dispatch) => [
        axios.post('//dct-billing-app.herokuapp.com/api/bills', formData, {
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
    ]
}

const cartItem = (data) => {
    return {
        type : "ADD_BILL",
        payload : data
    }
}