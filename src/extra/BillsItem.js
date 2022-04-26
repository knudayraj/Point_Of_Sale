import React, { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { startRemoveBills } from "../actions/BillsAction"
import FinalBill from "./FinalBill"

const BillsItem = (props) => {
    const { _id, customer, lineItems } = props
    const [count, setCount] = useState(1)

    const dispatch = useDispatch()
 
    let handleDecrement = () => {
        setCount(count - 1)
    }

    const handleIncrement = () => { 
        setCount(count + 1)
    }

    if(count <= 1){
        handleDecrement = () => setCount(1)
    }

    const customers = useSelector(state => {
        return state
    })

    console.log('customers bills', customers)

    const products = useSelector(state => {
        return state.products
    })

    console.log('products bills', products)

    // const result = lineItems.map(e => {
    //     console.log(e.quantity)
    // })
    // console.log(lineItems )

    const handleSubmit = (e) => {

    }

    const handleRemove = (_id) => {
        console.log('handleRemove',_id)
        dispatch(startRemoveBills(_id))
    }

    return (
            <div>
                    { customers.find(cust => {
                        return (
                            <div>
                                <h4 key={cust._id}> { cust._id == customer && cust.name } </h4>
                                {/* <p> {console.log/('map', lineItems)} </p>
                                {lineItems.map(e => {
                                    return <p> { e._product } </p>
                                } )} */}
                            </div>
                        )
                    }) }  
                    { products.map(prod => {
                        return <h4 key={prod._id}> { prod._id === lineItems.product && prod.name }  </h4>
                    }) }
                    <button onClick={handleDecrement}>-</button> 
                        {count} 
                    <button onClick={handleIncrement}>+</button>
                    <button onClick={() => {
                        handleRemove(_id)
                    }}> Remove </button>
            </div>
    )
}

export default BillsItem