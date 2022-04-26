import React, { useState } from "react"
import DatePicker from 'react-date-picker'
import { useSelector } from "react-redux"
import BillCart from "./BillCart"
import BillGen from "./BillGen"
import BillsList from "../extra/BillsList"
import Button from '@material-ui/core/Button'

const BillsForm = (props) => {

    const [value, onChange] = useState(new Date())
    const [custSelect, setCustSelect] = useState('')
    const [prodSelect, setProdSelect] = useState('')
    const [cart, setCart] = useState([])
    const [toggle, setToggle] = useState(false)
    const [qty, setQty] = useState(1)

    const customers = useSelector(state => {
        return state.customers
    })

    const products = useSelector(state => {
        return state.products
    })

    const handleCust = (e) => {
        // console.log(e.target.value)
        setCustSelect(e.target.value)
    }

    const handleProd = (e) => {
        // console.log('handleProd', e.target.value)
        setProdSelect(e.target.value)
        // const _id = e.target.value
    }

    const removeItem = (prodSelect) => {
        const result = cart.filter(e => {
            return e.prodSelect !== prodSelect
        })
        setCart(result)
    }


    
    let handleDecrement = (prodSelect) => {
        // console.log('billsForm', prodSelect)
        setQty(qty - 1)
        let result = cart.filter(ele => {
            if(ele.prodSelect === prodSelect){
                return {...ele, quantity : ele.quantity = ele.quantity - 1}
            } else {
                return {...ele, quantity : ele.quantity}
            }
        })
        setCart(result)
        // setQuantity(quantity - 1)
    }

    const handleIncrement = (prodSelect) => { 
        // console.log('billsForm', prodSelect)
        let result = cart.map(ele => {
            if(ele.prodSelect === prodSelect){
                return {...ele, quantity : ele.quantity + 1}
            } else {
                return {...ele, quantity : ele.quantity}
            }
        })
        
        setCart(result)
        setQty(qty + 1)
    }

    if(qty <= 1){
        handleDecrement = () => setQty(1)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if(!cart.find((e) => e.prodSelect === prodSelect)) {
            setCart([...cart, { prodSelect : prodSelect, quantity : 1}])
        } else {
            alert('Item is already in the cart. Increasing quantity')
            handleIncrement(prodSelect)
        }
        setProdSelect('')
    }

    // console.log('prodSelect',cart)

    return (
        <div>
            <div className="container mt-5">
            <h3> Create New Bill </h3>
            <form onSubmit={handleSubmit}>
                <DatePicker className="form-control" onChange={onChange} value={value} required /> < br/>
                <select className="form-control" value={custSelect} onChange={handleCust} required>
                    <option value=""> select Customer </option>
                    { customers.map((cust,i) => {
                        return <option value={cust._id} key={i}> { cust.name } </option>
                    }) }
                </select> <br />
                <select className="form-control" value={prodSelect} onChange={handleProd} required >
                    <option> select product </option>
                    { products.map(prod => {
                        return <option value={prod._id}> { prod.name } </option>
                    }) }
                </select> <br />
                <Button variant="contained" color="primary" style={{backgroundColor : "orange"}} type="submit">        
                    add to cart
                </Button>
                {/* <input type="submit" value="add to cart" /> */}
            </form>
            </div>
            <div>
            <BillGen 
                cart={cart}
                custSelect={custSelect}
                value={value}
                setCart={setCart}
                />
            </div>
            
                {/* { products.map(e => {
                    return <BillsList 
                            key={e._id}
                            {...e}
                            custSelect={custSelect}
                        />
                        }
                    ) } */}
            { cart.length === 0 ? (
                <div className="ms-2 mt-5">
                    <h4> Bills is Empty </h4>
                    <p> Please add your first Bill </p>
                </div>
            ) : (
                <div>
            { cart.map((e,i) => {
                return <BillCart 
                    key={i}
                    {...e}
                    custSelect={custSelect}
                    removeItem={removeItem}
                    handleIncrement={handleIncrement}
                    handleDecrement={handleDecrement}
                />
            }) }

                </div>
            ) }
        </div>
    )
}

export default BillsForm