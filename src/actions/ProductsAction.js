import axios from "axios"

export const startAddingProducts = (formData) => {
    return (dispatch) => {
        axios.post('http://dct-billing-app.herokuapp.com/api/products', formData, {
            headers : {
                Authorization : `Bearer ${localStorage.getItem('token')}`
            }
        })
        .then(response => {
            // console.log(response.data)
            const prod = response.data
            dispatch(addedProducts(prod))
        })
        .catch(err => {
            console.log(err.message)
        })
    }
}

const addedProducts = (prod) => {
    return {
        type : "ADD_PROD",
        payload : prod
    }
}

export const startGetProducts = () => {
    return (dispatch) => [
        axios.get('http://dct-billing-app.herokuapp.com/api/products', {
            headers : {
                Authorization : `Bearer ${localStorage.getItem('token')}`
            }
        })
            .then(response => {
                console.log('get',response.data)
                const prod = response.data
                dispatch(getProducts(prod))
            })
            .catch(err => {
                console.log(err.message)
            })
    ]
}

const getProducts = (prod) => {
    return {
        type : "GET_PROD",
        payload : prod
    }
}


export const startRemoveProduct = (_id) => {
    return (dispatch) => {
        axios.delete(`http://dct-billing-app.herokuapp.com/api/products/${_id}`,
        {
            headers : {
                Authorization : `Bearer ${localStorage.getItem('token')}`
            }
        })
        .then(response => {
            // console.log(response.data)
            const removed = response.data
            dispatch(removedProd(removed._id))
        })
        .catch(err => {
            console.log(err.message)
        })
    }
}

const removedProd = (_id) => {
    return {
        type : "REMOVE_PROD",
        payload : _id
    }
}

export const startEditProduct = (formData, _id) => {
    return (dispatch) => {
        axios.get(`http://dct-billing-app.herokuapp.com/api/products/${_id}`,{
            headers : {
                Authorization : `Bearer ${localStorage.getItem('token')}`
            }
        })
        .then(response => {
            const data = response.data 
                axios.put(`http://dct-billing-app.herokuapp.com/api/products/${data._id}`, formData, {
                    headers : {
                        Authorization : `Bearer ${localStorage.getItem('token')}`
                    }
                })
                .then(response => {
                    console.log('edit', response.data)
                    const prod = response.data
                    dispatch(finalProd(prod))
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

// export const startEditProduct = (formData, _id) => {
//     return (dispatch) => {
//         axios.get(`http://dct-billing-app.herokuapp.com/api/products/${_id}`,{
//             headers : {
//                 Authorization : `Bearer ${localStorage.getItem('token')}`
//             }
//         })
//             .then(response => {
//                 const data = response.data
//                 axios.put(`http://dct-billing-app.herokuapp.com/api//products/${data._id}`, formData,{
//                     headers : {
//                         Authorization : `Bearer ${localStorage.getItem('token')}`
//                     }
//                 })
//                 .then(response => {
//                     console.log('edit comp',response.data)
//                     const prod = response.data
//                     dispatch(finalProd(prod))
//                 })
//                 .catch(err => {
//                     console.log(err.message)
//                 })
//             })
//             .catch(err => {
//                 console.log(err.message)
//             })
//     }
// }



// const finalProd = (prod) => {
//     return {
//         type : "EDIT_PROD",
//         payload : prod
//     }
// }

const finalProd = (prod) => {
    return {
        type : "EDIT_PROD",
        payload : prod
    }
}
