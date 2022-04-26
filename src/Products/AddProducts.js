import React from "react"
import { useDispatch } from "react-redux"
import { startAddingProducts } from "../actions/ProductsAction"
import Products from "./Products"

const AddProducts = (props) => {

    const dispatch = useDispatch()

    const formSubmit = (formData) => {
        dispatch(startAddingProducts(formData))
    }

    return (
        <div>
            <Products formSubmit={formSubmit} />
        </div>
    )
}

export default AddProducts