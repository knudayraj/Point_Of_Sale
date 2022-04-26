import React from "react"
import { useSelector } from "react-redux"
import ReCharts from "../Bills/extra"
import ChartsB from "./ChartB"

const DashboardContainer = (props) => {

    const customers = useSelector(state => {
        return state.customers
    })

    const products = useSelector(state => {
        return state.products
    })

    const bills = useSelector(state => {
        return state.bills
    })

    const Revenues = bills.map(bill => {
        return bill.total
    })

    let sum = Revenues.reduce(function(a, b) { return a + b }, 0)

    // console.log('Revenus', Revenues, 'Sum', sum)

    const customer = [...bills].sort((a,b) => b.total - a.total).slice(0,5)

    console.log('customer', customer)

    // const customer = [...bills].sort((a,b) => b.total - a.total).slice(0,5)

//     <div class="card text-dark bg-light mb-3" style="max-width: 18rem;">
//   <div class="card-header">Header</div>
//   <div class="card-body">
//     <h5 class="card-title">Light card title</h5>
//     <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//   </div>
// </div>

            const result = customer.map((e,i) => {
                return customers.find(cust => {
                    return cust._id == e.customer && cust.name
                })
            }) 


            console.log('result', result.name)

    return (
            <div>
                <div className="d-flex justify-content-evenly mt-5">
                    <div className="card text-dark bg-light mb-5" style={{width : "13rem"}}>
                        <div className="card-header"> <h3 style={{textAlign : "center"}}> Customers </h3> </div>
                            <div className="card-body">
                                <h1 style={{textAlign : "center"}}> { customers.length } </h1>
                            </div>
                        </div>
                        <div className="card text-dark bg-light mb-5" style={{width : "13rem"}}>
                        <div className="card-header"> <h3 style={{textAlign : "center"}}> Products </h3> </div>
                            <div className="card-body">
                                <h1 style={{textAlign : "center"}}> { products.length } </h1>
                            </div>
                        </div>
                        <div className="card text-dark bg-light mb-5" style={{width : "13rem"}}>
                        <div className="card-header"> <h3 style={{textAlign : "center"}}> Purchases </h3> </div>
                            <div className="card-body">
                                <h1 style={{textAlign : "center"}}> { bills.length } </h1>
                            </div>
                        </div>
                        <div className="card text-dark bg-light mb-5" style={{width : "13rem"}}>
                        <div className="card-header"> <h3 style={{textAlign : "center"}}> Revenue </h3> </div>
                            <div className="card-body">
                                <h1 style={{textAlign : "center"}}> INR. {sum} </h1>
                            </div>
                        </div>
            </div>
            <div className="d-flex justify-content-evenly mt-5">
            <div className="card text-dark bg-light mb-3">
                        <div className="card-header"> <h1> Top 5 Customers </h1> </div>

                            <div className="card-body">
                                <table className="table">
                                    {/* <thead>
                                        <tr>
                                            <td> Name </td>
                                            <td> Amount </td>
                                        </tr>
                                    </thead> */}
                                    <tbody>
                                        <tr>
                                        { result.map((r,i) => {
                                            return <td key={i}> Name - {r.name} </td>
                                        }) }
                                        </tr>
                                        <tr>
                                        { customer.map((e,i) => {
                                            return <td key={i}> Amount - {e.total} </td>
                                        }) }
                                        </tr>
                                    </tbody>    
                                </table>
                            </div>
                        </div>
                </div>
                {/* <ReCharts /> */}
                <ChartsB />
            </div>
            )
}

export default DashboardContainer