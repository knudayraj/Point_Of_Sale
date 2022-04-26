import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { startGetBills, startRemoveBills } from "../actions/BillsAction"

const BillsList = (props) => {
    const { _id, name, price, custSelect, BillsList,lineItems } = props

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(startGetBills())
    },[])

    const bills = useSelector(state => {
        return state.bills
    })

    const products = useSelector(state => {
        return state.products
    })

    const customers = useSelector(state => {
        return state.customers
    })

   

    console.log('BillsList', bills)
    // console.log('customers', products)

   

    // const result = bills.map(e => {
    //     return e.map(b => {
    //         // console.log('inside B',b._id)
    //     })
    // })

    // console.log('result',result)

    const handleRemove = (_id) => {
        // console.log(_id)
        dispatch(startRemoveBills(_id))
    }

    return (
        <div>
            Bills list
            {/* {name} */}
            { bills.map(bill => {
                return (
                    <div>
                        <h3> customer Name -  { bill.customer } Total bill Amount - {bill.total} </h3>
                        {bill.lineItems.map(e => {
                            return <h4> {e.product == _id ? name : e.product} - {e.price} - {e.subTotal} </h4>
                        })}
                        <button onClick={() => {
                            handleRemove(bill._id)
                        }}> remove </button>
                    </div>
                )
            }) }
            
        </div>
    )
}

export default BillsList