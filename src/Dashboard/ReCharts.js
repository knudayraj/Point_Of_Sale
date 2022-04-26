import React,{useState, useEffect} from 'react'
import { useSelector } from 'react-redux';
import {
  BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from 'recharts';

const ReCharts = props => {

    const bills = useSelector((state)=>{
        return state.bills
      })

    const [data, setData] = useState([])

    useEffect(() => {
        const result = bills.map((ele)=>{
           return {date:ele.slice(0,10), total:ele.total}
        })
        setData(result)

    },[bills])
    
        // console.log('in', data);
        useEffect(()=>{

            data >0 && data.reduce((prev, curr)=>{
                // if(prev.date == curr.date){
                    console.log('prev',prev.date);
                    // return prev.tototal=prev.total+curr.total
                // }
            })
        },[bills])
        
    // const data1 = {
        //     date:date
        // }
        
        // console.log(data);
    
    const data1 = [
        {
          name: 'Page A', pv: 2400, amt: 2400,
        },
        {
          name: 'Page B', pv: 1398, amt: 2210,
        },
        {
          name: 'Page C', uv: 2000, pv: 9800, amt: 2290,
        },
        {
          name: 'Page D', uv: 2780, pv: 3908, amt: 2000,
        },
        {
          name: 'Page E', uv: 1890, pv: 4800, amt: 2181,
        },
        {
          name: 'Page F', uv: 2390, pv: 3800, amt: 2500,
        },
        {
          name: 'Page G', uv: 3490, pv: 4300, amt: 2100,
        },
      ];
  return (
    <BarChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 5, right: 30, left: 20, bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3" />
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="total" fill="#8884d8" />
      </BarChart>
  )
}


export default ReCharts