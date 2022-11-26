import React, { useState, useEffect } from 'react'
import axios from 'axios'


function Orders() {

    const [bikes, setBikes] = useState([])
    const [customers, setCustomers] = useState([])
    const [employees, setEmployees] = useState([])
    const [bid, setBid] = useState('')
    const [eid, setEid] = useState('')
    const [cid, setCid] = useState('')
    const [date, setDate] = useState('')
    const [state, setState] = useState('text')


    const fetchEmployees = async () => {
        const response = await axios.post('http://localhost:4000/load-employees/')
        setEmployees(response.data)
        console.log(response.data)
    }

    const fetchCustomers = async () => {
        const response = await axios.post('http://localhost:4000/load-customers/')
        setCustomers(response.data)
        console.log(response.data)
    }

    const fetchBikes = async () => {
        const response = await axios.post('http://localhost:4000/load-bike/')
        setBikes(response.data)
        console.log(response.data)
    }

    useEffect(() => {

        fetchEmployees()
        fetchCustomers()
        fetchBikes()

    }, [])


    const handleOrderSave = async () => {

        const response = await axios.post('http://localhost:4000/save-orders', {
            bid: bid,
            cid: cid,
            eid: eid,
            date: date
        })



        if (response.data == false) {
            alert("Unexpected error occured!")
            setBid('')
            setCid('')
            setEid('')
            setDate('')
        } else {
            alert("Order data saved!")
            setBid('')
            setCid('')
            setEid('')
            setDate('')
        }
    }


    return (
        <div className="orders">
            <h3>Enter new order details</h3>
            <div className="input-fields">
                <select value={cid} onChange={(e) => setCid(e.target.value)}>
                    {<option value="">Select customer ID</option>}
                    {
                        customers.length === 0 ? null : customers.map((customer) => {
                            return <option value={customer.c_id} key={customer.c_id}>{customer.c_id}</option>
                        })
                    }
                </select>

                <select value={eid} onChange={(e) => setEid(e.target.value)}>
                    {<option value="">Select employee ID</option>}
                    {
                        employees.length === 0 ? null : employees.map((employee) => {
                            return <option value={employee.e_id} key={employee.e_id}>{employee.e_id}</option>
                        })
                    }
                </select>

                <select value={bid} onChange={(e) => setBid(e.target.value)}>
                    {<option value="">Select Bike ID</option>}
                    {
                        bikes.length === 0 ? null : bikes.map((bike) => {
                            return <option value={bike.b_id} key={bike.b_id}>{bike.b_id}</option>
                        })
                    }
                </select>

                <div>
                    <input type={state}
                        onFocus={() => setState(state === 'text' ? 'date' : 'text')}
                        placeholder="Enter order date"
                        value={date}
                        onChange={(e) => setDate(e.target.value)} />
                </div>

                <div>
                    <button class="btn-save" onClick={handleOrderSave}>Save</button>
                </div>


            </div>
        </div>
    )
}

export default Orders
