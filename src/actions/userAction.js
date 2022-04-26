import axios from 'axios'

export const startRegisterUser = (formData) => {
    return (dispatch) => {
        axios.post('//dct-billing-app.herokuapp.com/api/users/register',formData)
            .then(response => {
                console.log('startRegisterUser',response.data)
            })
            .catch(err => {
                alert(err.message)
            })
    }
}

export const startLoginUser = (formData, SuccessLogin) => {
    return (dispatch) => {
        axios.post('//dct-billing-app.herokuapp.com/api/users/login',formData)
            .then(response => {
                const token = response.data.token
                localStorage.setItem('token', `${token}` )
                // alert('successfully logged in')
                SuccessLogin()
            })
            .catch(err => {
                alert(err.message)
            })
    }
}

export const startUserAccount = (storedToken) => {
    return (dispatch) => {
        axios.get('//dct-billing-app.herokuapp.com/api/users/account', {
            headers : {
                Authorization : `Bearer ${storedToken}`
            }
        })
            .then(response => {
                // console.log(response.data)
                const users = response.data
                dispatch(setUsers(users))
            })
            .catch(err => {
                console.log(err.message)
            })
    }
}

const setUsers = (users) => {
    return {
        type : 'USERS_INFO',
        payload : users
    }
}
