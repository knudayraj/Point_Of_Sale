import React, { useState } from "react";
import Button from '@material-ui/core/Button'
import Swal from 'sweetalert2'

const Products = (props) => {
    const {formSubmit, name : prodName, price : prodPrice } = props
    const [name, setName] = useState(prodName ? prodName : '')
    const [price, setPrice] = useState(prodPrice ? prodPrice :'')

    const handleChange = (e) => {
        const inputValue = e.target.value
        if(e.target.name === "name"){
            setName(inputValue)
        } else if(e.target.name === "price"){
            setPrice(inputValue)
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Product added',
            showConfirmButton: false,
            timer: 1500
          })

        const formData = {
            name : name,
            price : price
        }
        console.log(formData)
        formSubmit(formData)
        setName('')
        setPrice('')
    }

    return (
        <div className="container mt-5">
            <form onSubmit={handleSubmit}>
            <h3> Add Product </h3>
            <div class="form-floating mb-3">
                <input type="text" className="form-control" id="floatingInput" placeholder="Name" name="name" value={name} onChange={handleChange} required /> 
                <label for="floatingInput" > Name </label>
                </div>

                <div class="form-floating mb-3">
                <input type="number" className="form-control" id="floatingInput" placeholder="Price" name="price" value={price} onChange={handleChange} required /> 
                <label for="floatingInput"> Price </label>
                </div>

                {/* <input type="submit" value="Save" variant="contained" color="primary" /> */}
                <Button variant="contained" color="primary" type="submit">        
                    Save
                </Button>
            </form>

        </div>
    )
}

export default Products