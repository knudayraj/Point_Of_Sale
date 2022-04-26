import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { startGetCustomers } from "../actions/customersAction"
import CustItem from "./CustItem"
import ReactPaginate from 'react-paginate'

const CustomerList = (props) => {
    const [pageNumber, setPageNumber] = useState(0)


    const itemsPerPage = 5
    const pagesVisited = pageNumber * itemsPerPage

    const { search } = props

    const dispatch = useDispatch()

    const customers = useSelector(state => {
        return state.customers
    })
 
    useEffect(() => {
        dispatch(startGetCustomers())
    },[])


    const displayItems = customers.filter(e => {
        if(search == ''){
            return e
        } else if(e.name.toLowerCase().includes(search.toLowerCase())){
            return e
        }
    }).slice(pagesVisited, pageNumber + itemsPerPage).map(cust => {
            return (
                <CustItem key={cust._id} {...cust} />
            )
        }) 

        console.log(displayItems)

        const pageCount = Math.ceil(customers.length / itemsPerPage)

        const changePage = ({selected}) => {
            setPageNumber(selected)
        }

    return (
            <div className="row align-items-start mt-4">
            <h3>Lising customers - {customers.length} </h3> 
            { customers.length == 0 ? (
                <div>
                    <h3>No customers</h3>
                    <p> Add your customers </p>
                </div>
            ) : (
                <div>
                    { displayItems }
                    <div style={{display : "flex"}}>
                        <ReactPaginate 
                            previousLabel={"Previous"}
                            nextLabel={"Next"}
                            pageCount={pageCount}
                            onPageChange={changePage}  
                        />
                    </div>
                </div>
            )}
        </div>
    )
}

export default CustomerList