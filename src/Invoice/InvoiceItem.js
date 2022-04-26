import React from "react"
import { useDispatch } from "react-redux"

const InvoiceItem = (props) => {
    // console.log('InvoiceItem', props)
    const {_id, customer, lineItems} = props

    const dispatch = useDispatch()

    console.log("lineItems", lineItems)

    const handleRemove = (_id) => {
        console.log(_id)
        // dispatch(startRemoveBills(_id))
    }


    return (
        <div>
            InvoiceItem
            <h4> ID : {_id} </h4>
            <h3> Customer - {customer} </h3>
             { lineItems.map(e => {
                 return (
                     <div>
                         <p> Product - { e.product } </p>
                         <p> Quantity - { e.quantity } </p>
                         <p> Price - { e.price } </p>
                     </div>
                 )
             }) } 
             <button onClick={() => {
                 handleRemove(_id)
                 }} > remove </button>
        </div>
    )
}

export default InvoiceItem