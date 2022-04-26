import React, { useState } from "react"
import { useDispatch } from "react-redux"
import { startLoginUser } from "../actions/userAction"
import Button from '@material-ui/core/Button'
import loginImg from '../Images/loginImg.svg'
import Swal from 'sweetalert2'
import Register from './Register'
import { Link, Route } from 'react-router-dom'


const Login = (props) => {
    const {handleLoggedin} = props
    
const [email, setEmail] = useState('')
const [password, setPassword] = useState('')

const dispatch = useDispatch()

const handleChange = (e) => {
    const inputValue = e.target.value
    if(e.target.name === 'email' ){
        setEmail(inputValue)
    } else if(e.target.name === 'password' ){
        setPassword(inputValue)
    } 
}

const handleReset = (e) => {
    setEmail('')
    setPassword('')
}

const handleSubmit = (e) => {
    e.preventDefault()
    const formData = {
        email,
        password
    }
    // console.log(formData)
    dispatch(startLoginUser(formData, SuccessLogin))
}

const SuccessLogin = () => {
    Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Successfully Logged in ',
        showConfirmButton: false,
        timer: 1500
      })
    props.history.push('/components')
    handleLoggedin()
}


return (
    // <div className="container">
        <div className="row">
        <div className="col ms-5 mt-5">
            <img src={loginImg} />
        </div>
        <div className="col mt-5" >
            <div className="container w-50 mt-5">
            <form onSubmit={handleSubmit}>
            <h4> Please Login </h4>
            {/* <label> Email </label> <br />
            <input type="text" name="email" value={email} onChange={handleChange} required /> <br /> */}

            <div class="form-floating mb-1">
                <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" name="email" value={email} onChange={handleChange} required />
                <label for="floatingInput">Email address</label>
            </div>
            <div class="form-floating mb-3">
                <input type="password" class="form-control" id="floatingPassword" placeholder="Password" name="password" value={password} onChange={handleChange} required />
              <label for="floatingPassword">Password</label>
            </div>
            new to POS ? <Link to="/register"> Register now </Link> <br /><br />

            {/* <label> Password </label> <br />
            <input type="text" name="password" value={password} onChange={handleChange} required /> <br /> */}

            {/* <Button variant="contained" color="primary">        
                POS App
            </Button> */}
            <Button variant="contained" color="primary" type="submit">        
                    Login 
                </Button>
            <Button variant="contained" className="ms-2" color="secondary" type="reset" name="reset" onClick={handleReset} >        
                    Reset
                </Button>
            {/* <input type="submit" className="btn-success" /><input type="reset" className="btn-primary" name="reset" onClick={handleReset} /> <br /> */}
        </form> 
            </div>   
    </div>
    </div>
    // </div>
    )
}

export default Login