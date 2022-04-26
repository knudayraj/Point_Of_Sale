import React, { useState } from "react"
import BillsItem from "./BillsItem"

const BillsCart = (props) => {
    // const { date, customer } = props
    const { cartItems } = props
    console.log('BillsCart', cartItems )
    // custSelect, prodSelect, value, handleSubmit,


 
    // const [count, setCount] = useState(1)
    // const [cust, setCust] = useState(custSelect)
    // const [prod, setProd] = useState(prodSelect)
    // let counter = 0
 
    // let handleDecrement = () => {
    //     // setCount(count - 1)
    // }

    // const handleIncrement = () => {
    //     setCount(count + 1)
    // }

    // if(count <= 1){
    //     handleDecrement = () => setCount(1)
    // }

    // const carts = (formData) => {

    // }

    return (
        <div>
            { cartItems.map((e,i) => {
                return (
                    <div>
                        <BillsItem key={i} {...e} />
                        {/* <li> {e.customer} - {e.lineItems.prodSelect} </li>
                <button onClick={handleDecrement}>-</button>
                    { count } 
                <button onClick={handleIncrement}>+</button> */}
                    </div>
                )
            }) }
            {/* {customer} */}
            
        </div>
    )
}

export default BillsCart