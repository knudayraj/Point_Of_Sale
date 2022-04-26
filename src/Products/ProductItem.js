import React, { useState } from "react"
import { useDispatch } from "react-redux"
import { startRemoveProduct } from "../actions/ProductsAction"
import EditProduct from "./EditProduct"
import Swal from 'sweetalert2'

const ProductItem = (props) => {
    const { _id, name, price } = props
    const [toggle, setToggle] = useState(false)

    const dispatch = useDispatch()

    const handleToggle = () => {
        setToggle(!toggle)
    }

    const handleRemove = (_id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
                dispatch(startRemoveProduct(_id))
              Swal.fire(
                'Deleted!',
                'Product has been deleted.',
                'success'
              )
            }
          })
    }

    return (
        <div>
            { toggle ? (
                <div>
                    <EditProduct 
                    _id={_id}
                    name={name}
                    price={price}
                    handleToggle={handleToggle}
                />
                <button onClick={handleToggle}> Cancel </button>
                </div>
            ) : (
                <div className="container">
                    <div class="card w-50">
                        <div class="card-body">
                            <h5 class="card-title"> Product Name - {name} </h5>
                            <p class="card-text"> Price - {price}  </p>
                    <button onClick={() => {
                        handleRemove(_id)
                    }} className="btn btn-danger me-2" > Remove </button>
                    <button className="btn btn-info" onClick={handleToggle}> Edit </button>
                        </div>
                    </div>
                </div>
            ) }
        </div>
    )
}

export default ProductItem