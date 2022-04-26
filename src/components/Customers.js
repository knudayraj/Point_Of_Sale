import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { startAddingCustomers } from "../actions/customersAction";
import Button from '@material-ui/core/Button'
import bootstrap from '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Swal from 'sweetalert2'

const Customers = (props) => {
    const {formSubmit, _id, name : custName, mobile : custMobile, email : custEmail, user} = props
    const [name, setName] = useState(custName ? custName : '')
    const [mobile, setMobile] = useState(custMobile ? custMobile : '')
    const [email, setEmail] = useState(custEmail ? custEmail : '')

    const dispatch = useDispatch()

    const handleChange = (e) => {
        const inputValue = e.target.value
        if(e.target.name === 'name'){
            setName(inputValue)
        } else if(e.target.name === 'mobile'){
            setMobile(inputValue)
        } else if(e.target.name === 'email'){
            setEmail(inputValue)
        }
    }


    const handleSubmit = (e) => {
        e.preventDefault()

        const formData = {
            name : name ,
            mobile: mobile,
            email : email
        }
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Successfully Saved Customer ',
            showConfirmButton: false,
            timer: 1500
          })
        // console.log(formData)
        formSubmit(formData)
        // dispatch(startAddingCustomers(formData))
        setName('')
        setMobile('')
        setEmail('')
    }
    

    return (
        <div className="container mt-5">
            <h3> Add Customer </h3>
            <form onSubmit={handleSubmit}>
                <div className="form-floating mb-3">
                <input type="text" className="form-control" id="floatingInput" placeholder="Name" name="name" value={name} onChange={handleChange} required /> <br />
                <label htmlFor="floatingInput"> Name </label>
                </div>

                <div className="form-floating mb-3">
                <input type="number" className="form-control" id="floatingInput" placeholder="Mobile Number" name="mobile" value={mobile} onChange={handleChange} required /> <br />
                <label htmlFor="floatingInput"> Mobile Number </label>
                </div>

                <div className="form-floating mb-3">
                <input type="text" className="form-control" id="floatingInput" placeholder="Email" name="email" value={email} onChange={handleChange} required /> <br />
                <label htmlFor="floatingInput"> Email </label>
                </div>

                <Button variant="contained" color="primary" type="submit">        
                    Save
                </Button>

                {/* <input type="submit" value="Save" /> */}
                {/* <input type="reset" onClick={handleReset} /> */}
            </form>
        </div>
    )
}

export default Customers