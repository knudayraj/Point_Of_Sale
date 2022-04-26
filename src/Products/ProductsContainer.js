import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import AddProducts from './AddProducts'
import Products from './Products'
import ProductList from './ProductsList'

const ProductsContainer = (props) => {

    const [select, setSelect] = useState('')
    const [search, setSearch] = useState('')
    
    const products = useSelector(state => {
        return state.products
    })

    const handleSelect = (e) => {
        const selected = e.target.value
        console.log(selected)
        setSelect(selected)
        sortingData(selected)
    }

    const sortingData = (data) => {
        if(data === ""){
            return [...products]
        } else if(data === 'asc'){
            const ascending = products.sort((a,b) => {
                return a.name.localeCompare(b.name)
            })
        } else if(data === 'dsc'){
            const descending = products.sort((a,b) => {
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
                    <select className='form-select' value={select} onChange={handleSelect}>
                        <option value="">Sort By </option>
                        <option value="asc"> ascending </option>
                        <option value="dsc"> descending </option>
                    </select>
                </div>
                <div class="col">
                    <input type="text" className="form-control" value={search} onChange={handleSearch} placeholder="search by name"  />
                    </div>
                </div>
            </form>
            </div>
            <div className="row">
                <AddProducts />
                <ProductList search={search} />
            </div>
        </div>
    )
}

export default ProductsContainer