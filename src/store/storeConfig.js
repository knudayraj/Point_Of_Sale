import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import UserReducer from '../reducers/userReducer'
import CustomerReducer from '../reducers/customerReducer'
import ProductReducer from '../reducers/productReducer'
import InvoiceReducer from '../reducers/InvoiceReducer'
import BillsReducer from '../reducers/BillsReducer'


const configStore = () => {
    const store = createStore(combineReducers({
        users : UserReducer,
        customers : CustomerReducer,
        products : ProductReducer,
        bills : BillsReducer
    }), applyMiddleware(thunk))
    return store
}

export default configStore 