import React from "react";
import { useDispatch } from "react-redux";
import { startAddingCustomers } from "../actions/customersAction";
import Customers from "./Customers";

const AddCust = (props) => {
    // const { formSubmit } = props


    const dispatch = useDispatch()

    const formSubmit = (formData) => {
        dispatch(startAddingCustomers(formData))
    }

    return (
        <div>
            <Customers formSubmit={formSubmit} />
            {/* <TaskForm formSubmit={formSubmit} /> */}
        </div>
    )
}

export default AddCust