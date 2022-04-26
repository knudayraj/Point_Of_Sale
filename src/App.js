import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { useEffect, useState } from 'react';
import { startGetCustomers } from "../src/actions/customersAction";
import { startGetProducts } from "../src/actions/ProductsAction";
import { startGetInvoice } from "../src/actions/InvoceAction";
import { useDispatch } from 'react-redux';

const App = (props) => {
  const [userLoggin, setUserLoggin] = useState(false)

  const dispatch = useDispatch()

  const { store } = props

  // console.log('app', store)


  const handleLoggedin = () => {
    setUserLoggin(!userLoggin)
  }

  useEffect(() => {
    if(localStorage.getItem('token')){
      setUserLoggin(!userLoggin)
    }
  },[])

//   useEffect(() => {
//     if(userLoggin){
//         dispatch(startGetCustomers(), startGetProducts(), startGetBills())    
//     }
// },[])


  useEffect(() => {
      dispatch(startGetCustomers())

  },[])

  useEffect(() => {
    dispatch(startGetProducts())
},[])

  useEffect(() => {
    dispatch(startGetInvoice())
  },[])

  return (
    <div>
      
      {/* <h1>POS APP</h1> */}
      {/* <>
        <CssBaseline />
            <AppBar position="relative">
              <Toolbar>
                <ExposureIcon />
                  <Typography variant="h4">
                    POS App
                  </Typography>
                </Toolbar>
              </AppBar>
            </> */}
      <NavBar userLoggin={userLoggin} handleLoggedin={handleLoggedin} />
    </div>
  )
}

export default App;
