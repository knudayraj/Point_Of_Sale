import React from "react"
import { useDispatch } from "react-redux"
import { startEditCustomer } from "../actions/customersAction"
import Customers from "./Customers"

const EditCust = (props) => {
    const { _id, name, mobile, email, user, handleToggle } = props

    const dispatch = useDispatch()

    const formSubmit = (formData) => {
        dispatch(startEditCustomer(formData, _id))
        console.log(_id)
        handleToggle()
    }

    return (
        <div>
            <Customers 
                _id={_id}
                name={name}
                mobile={mobile}
                email={email}
                user={user}
                formSubmit={formSubmit}
            />
            
        </div>
    )
}

export default EditCust