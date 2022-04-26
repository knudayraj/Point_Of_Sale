import React from "react";
import homeImg from '../Images/homeImg.svg'

const Home = (props) => {
    return (
        <div className="container mt-5">
            <div className="row" >
            <div className="col mt-5 me-5">
                <img src={homeImg} />
            </div>
            <div className="col mt-5">
            {/* <div className="row" > */}
                <div className="col">
                    <div className="card text-dark bg-light mb-3"> 
                        <div className="card-body">
                            <h5 className="card-title"> Home </h5>
                        <p className="card-text">
                            User friendly Point-of-Sale & billing software to managing bills / sales. It will also generate numerous reports to give you a complete end-to-end visibility of all your operations.
                        </p>
                        <p>
                            <p>To check demo of application. Please use below given credentials.</p>
                            <b> Email : </b> acb12345@gmail.com
                        </p>
                        <p>
                            <b> Password : </b> acb12345
                        </p>
                        </div>
                    </div>                
                </div>
                <div className="col">
                <div className="card text-dark bg-light mb-3"> 
                        <div className="card-body">
                            <h5 className="card-title"> Customers </h5>
                        <p className="card-text">
                        Once you logged in, you can add customer by entering the required details. You can edit customer details and delete the customer. You can use the added customer while generating bills / Invoices.
                        </p>
                        <p>
                        You can also search for customers and sorting by their name. 
                        </p>
                        </div>
                    </div>                   
                </div>
                <div className="col">
                <div className="card text-dark bg-light mb-3"> 
                        <div className="card-body">
                            <h5 className="card-title"> Products </h5>
                            <p className="card-text">
                            Once you added customer, you can go ahead and add product details by entering the name and price. You can edit product details and also delete the products. You can use the added customer while generating bills / Invoices. 
                        </p>
                        <p>
                        You can also search for products and sorting by their name. 
                        </p>
                        </div>
                    </div>                   
                </div>
                {/* <div className="row" > */}
                <div className="col">
                <div className="card text-dark bg-light mb-3"> 
                        <div className="card-body">
                            <h5 className="card-title"> Profile </h5>
                        <p className="card-text">
                            Profile will give you info like Email, UserName, Business Name, Address.
                        </p>
                    </div>              
                </div>
                </div>
                <div className="col">
                <div className="card text-dark bg-light mb-3"> 
                        <div className="card-body">
                            <h5 className="card-title"> Dashboard </h5>
                        <p className="card-text">
                            Dashboard will give info about total sales and total customers and weekly sales etc..
                        </p>
                    </div>  
                    </div>         
                </div>
                <div className="col">
                <div className="card text-dark bg-light mb-3"> 
                        <div className="card-body">
                            <h5 className="card-title"> Bills </h5>
                        <p className="card-text">
                            In Bills you can create bill with and generate invoices for customer. With the help of customers and products which are added earlier will help you to create invoice / Bill. 
                        </p>
                    </div>  
                    </div>            
                </div>
                </div>
            </div>
            </div>

        // </div>
    )
}

export default Home