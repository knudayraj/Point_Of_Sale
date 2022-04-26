import React, { useEffect } from "react";
import { Link, Route } from 'react-router-dom'
import BillsContainer from "../Bills/BillsContainer";
import InvoiceContainer from '../Invoice/InvoiceContainer'
import DashboardContainer from "../Dashboard/DashboardContainer";
import ProductsContainer from "../Products/ProductsContainer";
import Account from "./Account";
import Customers from "./Customers";
import CustomerContainer from "./CustomersContainer";
import Home from "./Home";
import Login from "./Login";
import Register from "./Register";
import { Typography, AppBar, Card, CardActions, CardContent, CardMedia, CssBaseline, Grid, Toolbar, Container } from '@material-ui/core'
import ExposureIcon from '@material-ui/icons/Exposure' 
import Button from '@material-ui/core/Button'
import PrivateRoute from "../Helpers/PrivateRoute"
import Swal from 'sweetalert2'
import { useDispatch, useSelector } from "react-redux";


const NavBar = (props) => {
    const { userLoggin, handleLoggedin} = props

    const dispatch = useDispatch()

    const handleLogOut = () => {
        Swal.fire({
            title: 'Are you sure?',
            text: "want to logout!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, logOut!'
          }).then((result) => {
            if (result.isConfirmed) {
                localStorage.removeItem('token')
                handleLoggedin()
              Swal.fire(
                'Successfully Logged Out.',
                'success'
              )
            }
          })
    }



    return (
        <div>
            { userLoggin ? (
                <div style={{position : "rellative"}}>
                        <CssBaseline />
                        <AppBar style={{position : "sticky"}}>
                            <Toolbar>
                                <Typography variant="h4">
                                <><Link to="/customers" style={{color : "white", textDecoration : "none", fontSize : "25px", padding : "25px"}}> Customers </Link></>
                                <><Link to="/products" style={{color : "white", textDecoration : "none", fontSize : "25px", padding : "25px"}}> Products </Link></>
                                <><Link to="/account" style={{color : "white", textDecoration : "none", fontSize : "25px", padding : "25px"}}> Profile </Link></>
                                <><Link to="/dashboard" style={{color : "white", textDecoration : "none", fontSize : "25px", padding : "25px"}}> Dashboard </Link></>
                                <><Link to="/bills" style={{color : "white", textDecoration : "none", fontSize : "25px", padding : "25px"}}> Bills </Link></>    
                                <><Link to="" style={{color : "white", textDecoration : "none", fontSize : "25px", padding : "25px"}} onClick={handleLogOut
                                }> logout </Link></>
                                </Typography>
                            </Toolbar>
                        </AppBar>
                    </div>
            ) : (
                <div style={{color: "white"}}>
                    <CssBaseline />
                        <AppBar style={{position : "fixed"}}>
                            <Toolbar>
                                <Typography variant="h4" >
                                <><Link to="/" style={{color : "white", textDecoration : "none", fontSize : "25px", padding : "23px"}} > Home </Link></>
                                <><Link to="/login" style={{color : "white", textDecoration : "none", fontSize : "23px", padding : "23px"}}> Login </Link></>
                                <><Link to="/register" style={{color : "white", textDecoration : "none", fontSize : "23px", padding : "23px"}}> Register </Link></>
                                </Typography>
                            </Toolbar>
                        </AppBar>
                    </div>
            )}


            <Route path="/" exact component={Home} />
            <Route path="/register" component={Register} />
            <Route path="/login" render={(props) => {
                return <Login 
                            {...props}
                            handleLoggedin={handleLoggedin}
                        />
            }} />
            <PrivateRoute path="/customers" component={CustomerContainer} />
            <PrivateRoute path="/products" component={ProductsContainer} />
            <PrivateRoute path="/account" component={Account} />
            <PrivateRoute path="/dashboard" component={DashboardContainer} />
            <PrivateRoute path="/bills" component={BillsContainer} />
        </div>
    )
}

export default NavBar