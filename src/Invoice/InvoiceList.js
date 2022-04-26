import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import InvoiceItem from "./InvoiceItem"


const InvoiceList = (props) => {

    const dispatch = useDispatch()

    const bills = useSelector(state => {
        return state.bills
    })

    // console.log('bills', bills.length)

    useEffect(() => {
        // dispatch(startGetInvoice())
    },[])

    // const result = bills.map(e => {
    //     return {...e}
    // }) 

    console.log('result', bills)



    return (
        <div>
            InvoiceList Component
            {/* { Object.keys(bills).map(e => {
                return <InvoiceItem key={e._id} {...e} />
            }) } */}
            { bills.map(e => {
                return <InvoiceItem key={e._id} {...e} />
            }) }
            {/* <InvoiceItem 

            /> */}
        </div>
    )
}

export default InvoiceList