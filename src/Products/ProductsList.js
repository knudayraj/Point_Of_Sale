import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { startAddingProducts, startGetProducts } from "../actions/ProductsAction"
import ProductItem from "./ProductItem"

const ProductList = (props) => {

    const { search } = props

    const dispatch = useDispatch()

    const products = useSelector(state => {
        return state.products
    })

    // console.log('products', products.length)

    useEffect(() => {
        dispatch(startGetProducts())
    },[])



    return (
        <div className="container">
            <div className="mt-5">
            { products.length === 0 ? (
                <div>
                    <h3> No products found </h3>
                    <p> add your first product </p>
                </div>
            ) : (
                <div>
                    <h2> Listing of Products - {products.length} </h2>
                    { products.filter(e => {
                        if( search === "" ){
                            return e
                        } else if(e.name.toLowerCase().includes(search.toLowerCase())){
                            return e
                        }
                    }).map(prod => {
                        return <ProductItem key={prod._id} {...prod} />
                    }) }
                </div>
            ) }
        </div>
        </div>
    )
}

export default ProductList