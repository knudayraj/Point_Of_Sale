import React, { useState } from "react"
import { useSelector } from "react-redux"
import BillGen from "./BillGen"
import Swal from 'sweetalert2'

const BillCart = (props) => {
    const { custSelect, id, prodSelect, quantity, removeItem, handleDecrement,handleIncrement } = props

    // const [quantity, setQuantity] = useState(qty)


    const customers = useSelector(state => {
        return state.customers
    })

    const products = useSelector(state => {
        return state.products
    })

    let decrement = (prodSelect) => {
        handleDecrement(prodSelect)
    }

    const increment = (prodSelect) => { 
        handleIncrement(prodSelect)
    }

    // if(quantity <= 1){
    //     handleDecrement = () => setQuantity(1)
    // }

    const handleRemove = (prodSelect) => {
        // console.log('prodSelect', prodSelect)
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
                removeItem(prodSelect)
              Swal.fire(
                'Deleted!',
                'Product has been deleted.',
                'success'
              )
            }
          })
        
    }

    return (
        <div className="mt-5 mb-5" >
            { products.map(e => {
                if(e._id === prodSelect){
                    return (
                        <>
                            <h4> {e.name} { e.price * quantity } </h4>
                            <button className="btn btn-secondary" onClick={() => {
                                decrement(prodSelect)
                            }} disabled={quantity <= 1 } > - </button>
                                { quantity }
                            <button className="btn btn-secondary me-1" onClick={() => {
                                increment(prodSelect)
                                }}> + </button>
                            <button className="btn btn-info" onClick={() => {
                                handleRemove(prodSelect)
                            }}> Remove </button>
                        </>
                    )
                }
            }) }
        </div>
    )
}

export default BillCart