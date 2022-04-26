import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom'
import storeConfig from './store/storeConfig'
import { Provider } from 'react-redux';


const store = storeConfig()
// console.log(store)

// console.log('state', store.getState())

store.subscribe(() => {
  // console.log('state updated', store.getState())
})

  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,

ReactDOM.render(
  <BrowserRouter >
  <Provider store={store}>
      <App />
  </Provider>
  </BrowserRouter>,
  document.getElementById('root')
)



