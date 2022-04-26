import React, { useState } from 'react' 
import { useDispatch, useSelector } from "react-redux" 
import { startGetInvoice } from '../actions/InvoceAction' 
import { startGetBills } from '../actions/BillsAction' 
import AllBillsItem from './AllBillsItem' 

const AllBillList = (props) => {  
    const { search } = props 

    const dispatch = useDispatch()  

    useState(() => { 
        dispatch(startGetInvoice()) 
    }) 

    const bills = useSelector(state => { 
        return state.bills 
    }) 


    return ( 
        <div className='mt-5'> 
            <h4>Listing bills - {bills.length} </h4> 
            { bills.filter(e => { 
                        if( search === "" ){ 
                            return e 
                        } else if(e.total.includes(search)){ 
                            return e 
                        } 
                    }).map((bill,i) => { 
                return <AllBillsItem 
                    key={i} 
                    {...bill} 
                /> 
            }) } 
        </div> 
    ) 
} 

export default AllBillList 