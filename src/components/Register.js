import React, { useState } from "react"
import { Formik, Form } from 'formik'
import { Link, Route } from 'react-router-dom'
import TextField from "./TextField";
import * as Yup from 'yup'
import { startRegisterUser } from '../actions/userAction'
import { useDispatch } from 'react-redux'
// import registerImg from '../Images/registerImg.svg'
import Button from '@material-ui/core/Button'
import Swal from 'sweetalert2'
import Login from "./Login";

const Register = (props) => {
    const [userName, setUserName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [businessName, setBusinessName] = useState('')
    const [address, setAddress] = useState('')

    const dispatch = useDispatch()
    
    
    const handleChange = (e) => {
        const inputValue = e.target.value
        if(e.target.name === 'userName' ){
            setUserName(inputValue)
        } else if(e.target.name === 'email' ){
            setEmail(inputValue)
        } else if(e.target.name === 'password' ){
            setPassword(inputValue)
        } else if(e.target.name === 'businessName' ){
            setBusinessName(inputValue)
        } else if(e.target.name === 'address' ){
            setAddress(inputValue)
        } 
    }

    const handleReset = (e) => {
        setUserName('')
        setEmail('')
        setPassword('')
        setBusinessName('')
        setAddress('')
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const formData = {
            username : userName,
            email : email,
            password : password,
            businessName : businessName,
            address : address
        }
        console.log(formData)
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Successfully Registered your ',
            showConfirmButton: false,
            timer: 1500
          })
        dispatch(startRegisterUser(formData))
        setUserName('')
        setEmail('')
        setPassword('')
        setBusinessName('')
        setAddress('')
        props.history.push('/login')
    }

    return (
        <div className="row">
            <div className="col ms-5 mt-5">
                {/* <img src={registerImg} width="800px" height="800px" /> */}
            </div>
            <div className="col mt-5" >
            <div className="container w-50 mt-5">
            
            <form onSubmit={handleSubmit}>
            <h4> Please Register </h4>
            <div class="form-floating mb-1">
                <input class="form-control" id="floatingInput" placeholder="username" type="text" name="userName" value={userName} onChange={handleChange} required />
                <label for="floatingInput">User Name</label>
            </div>

            <div class="form-floating mb-1">
                <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" name="email" value={email} onChange={handleChange} required />
                <label for="floatingInput">Email</label>
            </div>

            <div class="form-floating mb-1">
                <input class="form-control" id="floatingInput" placeholder="Password" type="text" name="password" value={password} onChange={handleChange} required />
                <label for="floatingInput"> Password </label>
            </div>

            <div class="form-floating mb-1">
                <input class="form-control" id="floatingInput" placeholder="BusinessName" type="text" name="businessName" value={businessName} onChange={handleChange} required />
                <label for="floatingInput"> BusinessName </label>
            </div>

            <div class="form-floating mb-2">
                <input class="form-control" id="floatingInput" placeholder="Address" type="text" name="address" value={address} onChange={handleChange} required />
                <label for="floatingInput"> Address </label>
            </div>

                {/* <label> User Name </label> <br />
                <input type="text" name="userName" value={userName} onChange={handleChange} required /> <br /> */}

                {/* <label> Email </label> <br />
                <input type="text" name="email" value={email} onChange={handleChange} required /> <br /> */}

                {/* <label> Password </label> <br />
                <input type="text" name="password" value={password} onChange={handleChange} required /> <br /> */}
                                
                {/* <label> BusinessName </label> <br />
                <input type="text" name="businessName" value={businessName} onChange={handleChange} required /> <br /> */}
                                
                {/* <label> Address </label> <br />
                <input type="text" name="address" value={address} onChange={handleChange} required /> <br /> */}

                <Button variant="contained" color="primary" type="submit">        
                    Register 
                </Button>

                <Button variant="contained" className="ms-2" color="secondary" type="reset" name="reset" onClick={handleReset} >        
                    Reset
                </Button>

                {/* <input type="submit" /><input type="reset" name="reset" onClick={handleReset} /> <br /> */}
            </form>    
            </div>
        </div>
        </div>
        )
    }

export default Register


    // const validate = Yup.object({
    //     userName : Yup.string()
    //         .max(15, 'userName is invalid')
    //         .required("userName is Required"),
    // email : Yup.string()
    //         .max(15, 'email is invalid')
    //         .required("email is Required"),
    // password : Yup.string()
    //         .max(8, 'password is invalid')
    //         .required("password is Required"),
    // businessName : Yup.string()
    //         .max(10, 'businessName is invalid')
    //         .required("businessName is Required"),
    // address : Yup.string()
    //         .max(15, 'address is invalid')
    //         .required("address is Required")
    // })

    // return (
        // <div>
        //     {/* <Formik 
        //         initialValues={{
        //             userName : "",
        //             email : "",
        //             password : "",
        //             businessName : "",
        //             address : ""
        //         }}
        //         validationSchema={validate}
        //     >
        //         {Formik => (
        //             <div>
        //                 <h1> Register with us </h1>
        //                 {/* { console.log(Formik.values)} */}
        //                 <Form>

        //                     <TextField label="UserName" name="userName" type="text" /> 
        //                     <TextField label="Email" name="email" type="email" /> 
        //                     <TextField label="Passowrd" name="password" type="password" /> 
        //                     <TextField label="BusinessName" name="businessName" type="text" /> 
        //                     <TextField label="Address" name="address" type="text" /> 
        //                     <input type="submit" /><input type="reset" /> <br />
                            
        //                 </Form>
        //             </div>
        //         )}
        //     // </Formik> */}
        // // </div>
    // )
// }
