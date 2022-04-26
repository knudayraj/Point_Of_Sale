import axios from "axios"

export const startAddingCustomers = (formData) => {
    return (dispatch) => {
        axios.post('//dct-billing-app.herokuapp.com/api/customers', formData, {
            headers : {
                Authorization : `Bearer ${localStorage.getItem('token')}`
            }
        })
        .then(response => {
            const cust = response.data
            dispatch(addedCustomer(cust))
            console.log(response.data)
        })
        .catch(err => {
            console.log(err.message)
        })
    }
}

const addedCustomer = (cust) => {
    return {
        type : "ADD_CUST",
        payload : cust
    }
}

export const startGetCustomers = () => {
    return (dispatch) => [
        axios.get('//dct-billing-app.herokuapp.com/api/customers', {
            headers : {
                Authorization : `Bearer ${localStorage.getItem('token')}`
            }
        })
        .then(response => {
            const customers = response.data
            dispatch(getCustomer(customers))
            console.log(response.data)
        })
        .catch(err => {
            console.log(err.message)
        })
    ]
}

const getCustomer = (customers) => {
    return {
        type : "GET_CUST",
        payload : customers
    }
}

export const startDeleteCustomer = (_id) => {
    return (dispatch) => [
        axios.delete(`//dct-billing-app.herokuapp.com/api/customers/${_id}`,  {
            headers : {
                Authorization : `Bearer ${localStorage.getItem('token')}`
            }
        })
            .then(response => {
                console.log(response.data)
                const deleted = response.data
                dispatch(deletedCust(deleted._id))
            })
            .catch(err => {
                console.log(err.message)
            })
    ]
}

const deletedCust = (_id) => {
    return {
        type : "DELETE_CUST",
        payload : _id
    }
}

export const startEditCustomer = (formData, _id ) => {
    return (dispatch) => {
        axios.get(`//dct-billing-app.herokuapp.com/api/customers/${_id}`, {
            headers : {
                Authorization : `Bearer ${localStorage.getItem('token')}`
                }
            })
            .then(response => {
                // console.log('edit axios', response.data)
                const data = response.data
                    axios.put(`//dct-billing-app.herokuapp.com/api/customers/${data._id}`, formData, {
                    headers : {
                        Authorization : `Bearer ${localStorage.getItem('token')}`
                        }
                    })
                    .then(response => {
                    console.log(response.data)
                    const editcust = response.data
                    dispatch(editedCust(editcust))
                })
                .catch(err => {
               console.log(err.message)
                })
            })
            
            .catch(err => {
                console.log(err.message)
            })
        
    }
}

const editedCust = (editcust) => {
    return {
        type : "EDIT_CUST",
        payload : editcust
    }
}
