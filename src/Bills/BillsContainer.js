import React, { useState} from 'react'
import { useDispatch, useSelector } from "react-redux"
import AllBillList from './AllBillList'
import BillsForm from './BillsForm'
import BillsList from '../extra/BillsList'

const BillsContainer = (props) => {

    const [select, setSelect] = useState('')
    const [search, setSearch] = useState('')
    
    const bills = useSelector(state => {
        return state.bills
    })

    const handleSelect = (e) => {
        const selected = e.target.value
        console.log(selected)
        setSelect(selected)
        sortingData(selected)
    }

    const sortingData = (data) => {
        if(data === ""){
            return [...bills]
        } else if(data === 'asc'){
            const ascending = bills.sort((a,b) => {
                return a.name.localeCompare(b.name) 
            })
        } else if(data === 'dsc'){
            const descending = bills.sort((a,b) => {
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
                <div class="row">
                    <div class="col">
                    <select className="form-select" value={select} onChange={handleSelect}>
                        <option value="">Sort By </option>
                        <option value="asc"> ascending </option>
                        <option value="dsc"> descending </option>
                    </select>
                </div>
                <div class="col">
                    <input className="form-control" type="number" value={search} onChange={handleSearch} placeholder="search by name"  />
                    </div>
                </div>
                </form>
                <BillsForm />
                <AllBillList search={search} select={select} />
                
            </div>
        </div>
        
    )
} 

export default BillsContainer