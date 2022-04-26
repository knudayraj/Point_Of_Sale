import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { startUserAccount } from "../actions/userAction"

const Account = (props) => {


    const dispatch = useDispatch()

    
    const users = useSelector(state => {
        return state.users
    })

    // console.log('Account',users)

    const storedToken = localStorage.getItem('token')

    dispatch(startUserAccount(storedToken))


    return (
        <div className="mt-5" > 
            {/* <div class="card text-center" style={{ width : "50rem"}} > */}
            <div class="card text-center">
                <div class="card-body"> 
                <h1 class="card-title">Profile Details</h1>
                <h5 class="card-text"> USER NAME - {users.username } </h5>
                <h5 class="card-text"> EMAIL - { users.email } </h5>
                <h5 class="card-text"> BUSINESS NAME - { users.businessName } </h5>
                <h5 class="card-text"> ADDRESS - { users.address } </h5>
                </div> 
            </div>
        </div>
    )
}

export default Account