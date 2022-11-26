import React, { useState,useEffect } from 'react'
import VisibilityIcon from '@mui/icons-material/Visibility';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import TwoWheelerIcon from '@mui/icons-material/TwoWheeler';
import GroupIcon from '@mui/icons-material/Group';
import MT15 from '../../../../assets/images/Yamaha-bikes/mt15.jpg'
import R15 from '../../../../assets/images/Yamaha-bikes/r15.jpg'
import Fazer from '../../../../assets/images/Yamaha-bikes/fz.jpg'
import Jupyter from '../../../../assets/images/Yamaha-bikes/Jupiter.jpg'
import Chart from 'chart.js/auto';
import StreamingPlugin from 'chartjs-plugin-streaming';
import axios from 'axios';


import { Line } from "react-chartjs-2";



Chart.register(StreamingPlugin);

function Home() {
    
 
const [state,setState]=useState('')
const [ttlBikes,setTtlBikes]=useState('')
const [ttlCustomers,setTtlCustomers]=useState('')
const [ttlOrders,setTtlOrders]=useState('')
const [ttlSales,setTtlSales]=useState('')
const [prefferedBike,setPrefferedBike]=useState('')
const [preferredModel,setPrefferedModel]=useState('')




async function fetchDashboardData(){
    const response= await axios.post('http://localhost:4000/dashboard/')
    setTtlCustomers(response.data[0].customer)
    setTtlBikes(response.data[1].bike)
    setTtlOrders(response.data[2].orders)
    setTtlSales(response.data[3].sales)
    setPrefferedBike(response.data[4].preffered.b_name)
    setPrefferedModel(response.data[4].preffered.b_model)
    console.log(response.data)
    }
    
    useEffect(()=>{
    fetchDashboardData()
    },[])


const data = {
    labels: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri"],
    datasets: [
      {
        label: "Bike sales",
        data: [100000, 95000, 400000, 74000, 90000, 10000],
        fill: false,
        backgroundColor: "rgba(75,192,192,0.2)",
        borderColor: "rgba(75,192,192,1)"
      },
      {
        label: "Moped sales",
        data: [80000, 95000, 200100, 800000, 150400, 283000],
        fill: false,
        borderColor: "#742774"
      }
    ]
  };

    return (
        <div className="dashboard-home">
            <div className="upper-section">
                <div className="performance-data">
                    <div className="statistics-banner">
                        <div className="icon">
                            <VisibilityIcon />
                        </div>
                        <div className="statistics-data">
                            <span>{ttlOrders==="" ? null : ttlOrders}</span>
                            <span>Total Orders</span>
                        </div>
                    </div>


                    <div className="statistics-banner">
                        <div className="icon">
                           <ShoppingCartIcon />
                        </div>
                        <div className="statistics-data">
                        <span>{ttlSales==="" ? null : ttlSales}</span>
                            <span>Total Sales</span>
                        </div>
                    </div>



                    <div className="statistics-banner">
                        <div className="icon">
                            <TwoWheelerIcon />
                        </div>
                        <div className="statistics-data">
                        <span>{ttlBikes==="" ? null : ttlBikes}</span>
                            <span>Total Bikes</span>
                        </div>
                    </div>



                    <div className="statistics-banner">
                        <div className="icon">
                            <GroupIcon />
                        </div>
                        <div className="statistics-data">
                        <span>{ttlCustomers===""  ? null : ttlCustomers}</span>
                            <span>Total Users</span>
                        </div>
                    </div>


                </div>
                <div className="sales">
                    <div className="sales-header">
                        <span>Most preffered by customers</span>
                        <span className='sales-profit'>{prefferedBike} {preferredModel}</span>
                    </div>
                    <div className="sales-img">
                   <img src={preferredModel=='R15' ? R15 : preferredModel=='Fazer' ? Fazer : preferredModel=='MT15' ?  MT15 : preferredModel=='Jupyter' ? Jupyter: null} alt="" />
                    </div>

                </div>
            </div>
            <div className="lower-section">
           <div className="graph">
           <Line data={data} />
           </div>
          
             
            </div>

        </div>
    )
}

export default Home
