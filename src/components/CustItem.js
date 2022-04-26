import React, { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { startDeleteCustomer } from "../actions/customersAction"
import EditCust from './EditCust'
import Button from '@material-ui/core/Button'
import Swal from 'sweetalert2'
import bootstrap from '../../node_modules/bootstrap/dist/css/bootstrap.min.css'

const CustItem = (props) => {
    const { _id, name, mobile, email, user } = props
    const [toggle, setToggle] = useState(false)

    const dispatch = useDispatch()

    const handleRemove = (_id) => {
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
                dispatch(startDeleteCustomer(_id))
              Swal.fire(
                'Deleted!',
                'Your Customer info has been deleted.',
                'success'
              )
            }
          })
    }

    const handleToggle = () => {
        setToggle(!toggle)
    }


    return (
        <div className="border mb-3">
            { toggle ? (
                <div>
                    <EditCust 
                        _id={_id}
                        name={name}
                        mobile={mobile}
                        email={email}
                        user={user}
                        handleToggle={handleToggle}
                    />
                    {/* <button onClick={handleToggle}> Cancel </button> */}
                    <Button variant="contained" className="mt-1 ms-4 mb-3" color="secondary" onClick={handleToggle}>        
                    Cancel
                </Button>
                </div>
            ) : (
                <div className="d-flex justify-content-evenly">
                <div className="container mt-2">
                    <div className="card w-50">
                        <div className="card-body">
                            <h5 className="card-title"> Name - {name} </h5>
                            <p className="card-text"> Mobile - {mobile} </p>
                            <p className="card-text"> Email - {email}  </p>
                            {/* <a href="#" class="btn btn-primary">Button</a> */}
                            <button style={{ alignItems : "center" }} className="btn btn-danger me-2" onClick={() => {
                        handleRemove(_id)
                    }} > remove </button>
                    <button className="btn btn-info " onClick={
                        handleToggle
                    }> Edit </button>
                        </div>
                    </div>
                </div>
                </div>
            )}
        </div>
        
    )
}

export default CustItem