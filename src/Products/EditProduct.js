import React from "react"
import { useDispatch } from "react-redux"
import { startEditProduct } from "../actions/ProductsAction"
import Products from "./Products"

const EditProduct = (props) => {
    const { _id, name, price, handleToggle } = props

    const dispatch = useDispatch()

    const formSubmit = (formData) => {
        console.log(_id, formData)
        dispatch(startEditProduct(formData, _id))
        handleToggle()
    }

    return (
        <div>
            Edit Product
            <Products 
                _id={_id}
                name={name}
                price={price}
                formSubmit={formSubmit}
            />
        </div>
    )
}

export default EditProduct