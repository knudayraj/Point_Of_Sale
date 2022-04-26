import React, { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import DatePicker from 'react-date-picker'
import { startAddingBills } from "../actions/BillsAction"
import BillsList from "./BillsList"


const Bills = (props) => {

    const [custSelect, setCustSelect] = useState()
    const [prodSelect, setProdSelect] = useState()
    const [cartItem, setCartItem] = useState([])
    const [value, onChange] = useState(new Date())
    const [quantity, setQuantity] = useState(1) 


    const dispatch = useDispatch()

    const handleChange = (e) => {
        const selectedValue = e.target.value
        if(e.target.name === "custSelect"){
            setCustSelect(selectedValue)
            console.log(selectedValue)
        } else if(e.target.name === "prodSelect"){
            setProdSelect(selectedValue)
            console.log(selectedValue)
        }
    }

    const customers = useSelector(state => {
        return state.customers
    })

    const products = useSelector(state => {
        return state.products
    })

    const handleCart = (e) => {
        // const data = { 
        //     date : value,
        //     customer : custSelect,
        //     lineItems : {
        //         product : prodSelect,
        //         quantity
        //         }
        //     }
        // console.log('handleCart',data)
        // setCartItem([...cartItem, {...data} ])
        // setCustSelect('')
        // setProdSelect('')
    }
 
    const handleSubmit = (e) => {
        e.preventDefault()
        const formData = { 
            date : value,
            customer : custSelect,
            lineItems : {
                product : prodSelect,
                quantity
                }
            }
        console.log('handleCart',formData)
        dispatch(startAddingBills(formData))
        setCartItem([...cartItem, {...formData} ])
        setCustSelect('')
        setProdSelect('')

        // const formData = { 
        //     date : value,
        //     customer : custSelect,
        //     lineItems : {
        //         product : prodSelect,
        //         quantity
        //         }
        //     }
        // // console.log('formData',formData)
        // dispatch(startAddingBills(formData))
        // setCustSelect('')
        // setProdSelect('')
    }


    return (
        <div>
            <DatePicker onChange={onChange} value={value} />
            <form onSubmit={handleSubmit}>
                customers - { customers.length }
                <select value={custSelect} name="custSelect" onChange={handleChange} >
                    <option value=""></option>
                    { customers.map(cust => {
                        return <option key={cust._id} value={cust._id}> { cust.name } </option>
                    }) }
                </select> <br />
                products - { products.length }
                <select value={prodSelect} name="prodSelect" onChange={handleChange}>
                    <option value=""></option>
                    { products.map(prod => {
                        return <option key={prod._id} value={prod._id}> { prod.name } </option>
                    }) }
                </select>  <br />
                {/* <input onClick={handleCart} type="button" value="add to cart" />  */}
                {/* <input type="submit" value="add to cart" /> */}
                <Button size="small" className="mt-2 ms-1" variant="contained" color="secondary" type="submit" >          
                add to cart
            </Button>
            </form>
            {/* <BillsList 
                cartItem={cartItem}
            /> */}
        </div>
    )
}

export default Bills