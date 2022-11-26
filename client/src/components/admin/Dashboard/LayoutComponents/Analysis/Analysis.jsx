import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './analysis.css'


function Analysis() {


    const [employee, setEmployee] = useState('')
    const [Accesory, setAccesory] = useState('')
    const [city, setCity] = useState('')
    const [custOrders, setCustOrders] = useState('')
    const [moped, setMoped] = useState('')
    const [bike, setBike] = useState('')
    const [accesorySum, setAccesorySum] = useState('')
    const [countBike, setCountBike] = useState("")
    const [countMoped, setCountMoped] = useState("")





    const retieveEmployee = async () => {
        const response = await axios.post('http://localhost:4000/get-emp')
        console.log(response.data[0])
        setEmployee(`${response.data[0].e_name} : ${response.data[0].e_id}`)
    }

    const retrieveAccesory = async () => {
        const response = await axios.post('http://localhost:4000/get-acc')
        console.log(response.data[0])
        setAccesory(`${response.data[0].a_name} : ${response.data[0].a_id}`)

    }

    const retrieveCity = async () => {
        const response = await axios.post('http://localhost:4000/get-city')
        console.log(response.data[0])
        setCity(`${response.data[0].city} : ${response.data[0].countVal}`)
    }


    const retrieveAccesorySum = async () => {
        const date1=window.prompt("Enter starting date , Format(YYYY-MM-DD)")
        const date2=window.prompt("Enter ending date, Format(YYYY-MM-DD)")
        const response = await axios.post('http://localhost:4000/get-accsum',{
            date1:date1,
            date2:date2
        })
        console.log(response.data[0])
        setAccesorySum(response.data[0].sum==null ? `0 ₹` :`${response.data[0].sum} ₹ `)
        if(response.data[0].sum===null){
            alert("Enter proper date ")
        }
    }


    const retrieveCustomers = async () => {
        const response = await axios.post('http://localhost:4000/get-maxcust')
        console.log(response.data[0])
        setCustOrders(`${response.data[0].c_name} : ${response.data[0].countVal}`)
    }


    const retrieveBikes = async () => {
        const response = await axios.post('http://localhost:4000/get-sumbike')
        console.log(response.data)

        setBike(`${response.data[0].type} : ${response.data[0].total} ₹`)
        setMoped(`${response.data[1].type} : ${response.data[1].total} ₹`)
    }

    const retrieveCount = async () => {
      
        const response = await axios.post('http://localhost:4000/get-countbike')
        console.log(response.data)
        setCountBike(`${response.data[0].type} : ${response.data[0].count} `)
        setCountMoped(`${response.data[1].type} : ${response.data[1].count} `)
    }

    return (
        <div className="analysis-queries">
            <h3>Data analysis</h3>
            <div className="widgets">
                <div className="widget">
                    <h6 class="widget-heading">Employee of the year</h6>
                    <h6>{employee}</h6>
                    <button className="btn-retrieve" onClick={retieveEmployee}>Retrieve employee</button>
                </div>
                <div className="widget">
                    <h6 class="widget-heading">Most recently sold accesory</h6>
                    <h6>{Accesory}</h6>
                    <button className="btn-retrieve" onClick={retrieveAccesory}>Retrieve accesory</button>
                </div>
                <div className="widget">
                    <h6 class="widget-heading">City with most customers</h6>
                    <h6>{city}</h6>
                    <button className="btn-retrieve" onClick={retrieveCity}>Retrieve city</button>
                </div>
                <div className="widget">
                    <h6 class="widget-heading">Customers with maximum order</h6>
                    <h6>{custOrders}</h6>
                    <button className="btn-retrieve" onClick={retrieveCustomers}>Retrieve customers</button>
                </div>
               <div className="second-row">
               <div className="widget">
                    <h6 class="widget-heading">Bike types - sum</h6>
                    <h6>{moped}</h6>
                    <h6>{bike}</h6>
                    <button className="btn-retrieve" onClick={retrieveBikes}>Retrieve bikes</button>
                </div>
                <div className="widget">
                    <h6 class="widget-heading">Accesory purchasal - sum</h6>
                    <h6>{accesorySum}</h6>
                    <button className="btn-retrieve" onClick={retrieveAccesorySum}>Retrieve Accesory sum</button>

                </div>
                <div className="widget">


                    <h6 class="widget-heading">Bike-moped count</h6>
                    <h6>{countBike}</h6>
                    <h6>{countMoped}</h6>
                    <button className="btn-retrieve" onClick={retrieveCount}>Retrieve count</button>

                </div>
               </div>
            </div>
        </div>
    )
}

export default Analysis
