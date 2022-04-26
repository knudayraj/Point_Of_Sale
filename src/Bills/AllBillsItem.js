import React,{useEffect, useRef, useState} from "react"
import { useDispatch, useSelector } from "react-redux"
import { startRemoveBills, startShowBill } from "../actions/BillsAction"
import Swal from 'sweetalert2'
import {useReactToPrint} from 'react-to-print'

const AllBillsItem = (props) => {
    const { _id, customer, lineItems, total, select } = props

    const dispatch = useDispatch()

    const handleRemove = (_id) => {
        console.log(_id)
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
                dispatch(startRemoveBills(_id))
              Swal.fire(
                'Deleted!',
                'Your Customer info has been deleted.',
                'success'
              )
            }
          })
    }

    const customers = useSelector(state => {
        return state.customers
    })

    const products = useSelector(state => {
        return state.products
    })

    const CustResult = customers.reverse().find(cust => {
        return cust._id == customer && cust.name
    })

    const bills = useSelector(state => {
        return state.bills
    })

    // console.log('CustResult',lineItems)

    const componentRef = useRef()
    const handlePrint = useReactToPrint({
        content : () => componentRef.current
    })

    return (
        <div>
            <div>
            <div className="container mb-3">
            <div className="card w-50" style={{textAlign : "justify"}}>
            <div className="card-body">
            <div ref={componentRef}>
            <h5 className="card-title"> Customer Name - {CustResult.name} </h5>
                        <table className="table">
                            <thead>
                                <tr>
                                    <th> SlNo </th>
                                    <th> Product </th>
                                    <th> Quantity </th>
                                    <th> Price </th>
                                    <th> Subtotal </th>
                                </tr>
                            </thead>
                            <tbody>
                                { lineItems.map((e,i) => {
                                    return (
                                        <tr>
                                            <td> {i + 1} </td>
                                            { products.map(prod => {
                                                 if(e.product == prod._id ){
                                                     return <td> {prod.name} </td>
                                                 }
                                            }) }
                                            <td> {e.quantity} </td>
                                            <td> {e.price} </td>
                                            <td> {e.subTotal} </td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </table>
            <div style={{textAlign : "center"}}>
                <h5 className="card-text" > Total - {total} </h5> 
                </div>
                </div>
                <h5> <button className="btn btn-info ms-5" onClick={() => {
                    handleRemove(_id)
                }}
                style={{color : "red"}}
                > Remove </button>
                {/* <button className="btn btn-secondary ms-1" onClick={() => {
                    handleShow(_id)
                }}> Print </button>  */}
                <button className="btn btn-secondary ms-1" onClick={handlePrint} > Invoice </button>
                </h5>
            </div>
            </div>
            </div>
            </div>
            </div>
    )
}

export default AllBillsItem
