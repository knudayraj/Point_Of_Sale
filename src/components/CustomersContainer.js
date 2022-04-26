import React, { useState } from "react"
import { useSelector } from "react-redux"
import AddCust from "./AddCust"
import CustomerList from "./CustomerList"
import Customers from "./Customers"

const CustomerContainer = (props) => {
    
    const [ select, setSelect ] = useState('')
    const [search, setSearch] = useState('')

    const handleSelect = (e) => {
        const inputValue = e.target.value
        setSelect(inputValue)
        sortingData(inputValue)
    }

    const customers = useSelector(state => {
        return state.customers
    })

    const sortingData = (data) => {
        // console.log('data', data)
        if(data === ''){
            return [...customers]
        } else if(data === 'asc'){
            const ascending = customers.sort((a,b) => {
                return a.name.localeCompare(b.name)
            })
        } else if(data === 'dec'){
            const descending = customers.sort((a,b) => {
                return b.name.localeCompare(a.name)
            })
        }
    }

    const handleSearch = (e) => {
        const searchItem = e.target.value
        setSearch(searchItem)
    }


    return (
            <div className="container mt-5">
                <div>
                <form>
                <div className="row">
                    <div className="col">
                        <select className="form-select" value={select} onChange={handleSelect}> 
                            <option value="">sort by</option>
                            <option value="asc"> ascending </option>
                            <option value="dec"> descending </option>
                        </select>
                    </div>
                    <div className="col">
                        <input type="text" className="form-control" value={search} onChange={handleSearch} placeholder="search by name" />
                    </div>
                </div>
                </form>
                <div className="row mb-3">
                    <AddCust />
                    <CustomerList search={search} />
                </div>
                </div>
                
        </div>
    )
}

export default CustomerContainer