import React, { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { startAddingBills } from "../actions/BillsAction"
import BillsList from "../extra/BillsList"
import Button from '@material-ui/core/Button'
import Swal from 'sweetalert2'

const BillGen = (props) => {
    const { cart, custSelect, value,setCart} = props

    const dispatch = useDispatch()

    const [lineItems, setLineItems] = useState({product : "", quantity : ""})
    const [toggle, setToggle] = useState(true)

    const handleSubmit = () => {
        const result = cart.map(e => {
            return (
                {product : e.prodSelect,
                quantity : e.quantity}
            )
        })

        const formData = {
            value : value,
            customer : custSelect,
            lineItems : result
        }
        if(cart.length > 0){
            console.log('formData',formData)
        dispatch(startAddingBills(formData))
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Invoice Generated',
            showConfirmButton: false,
            timer: 1500
          })
        setCart('')
        } else {
            Swal.fire({
                position: 'center',
                icon: 'error',
                title: 'Cart is empty',
                showConfirmButton: false,
                timer: 1500
              })
        }
        // handleToggle()
    }

    const handleToggle = () => {
        setToggle(!toggle)
    }

    // handleToggle()

    const customers = useSelector(state => {
        return state.customers
    })

    const products = useSelector(state => {
        return state.products
    })

    return (
        <div className="ms-2">
            {/* <button onClick={handleSubmit}> Generate    Bill </button> */}
            <Button size="small" className="mt-2 ms-1" style={{backgroundColor : "green", color : "white", fontSize : "14px"}} variant="contained" type="submit" onClick={handleSubmit} > 
               Generate Bill
            </Button>
        </div>
    )
}

export default BillGen