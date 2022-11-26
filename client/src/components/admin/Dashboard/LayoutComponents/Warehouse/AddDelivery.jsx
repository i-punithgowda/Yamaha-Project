import React,{useState,useEffect} from 'react'
import axios from 'axios'
function AddDelivery() {

const [WID,setWID]=useState('')
const [BID,setBID]=useState('')
const [quantity,setQuantity]=useState('')
const [warehouse,setWarehouse]=useState([])
const [bikes,setBikes]=useState([])


const fetchBikes=async()=>{
    const response=await axios.post('http://localhost:4000/load-bike')
    setBikes(response.data)
    
}

const fetchWarehouse=async()=>{
    const response=await axios.post('http://localhost:4000/load-warehouse')
    setWarehouse(response.data)
    
}


const handleDeliverSave=async()=>{
    const response=await axios.post('http://localhost:4000/save-deliver',{
        WID:WID,
        BID:BID,
        quantity:quantity
    })
    if(response.data==false){
        alert("Unexpected error occured!!")
        setBID('')
        setWID('')
        setQuantity('')

    }else{
        alert("Delivered data inserted!")
        setBID('')
        setWID('')
        setQuantity('')
    }
}

useEffect(()=>{
fetchBikes()
fetchWarehouse()

},[])
    

    return (
        <div className="warehouse">
            <h3>Add delivery data</h3>
            <div className="input-fields">
                <div>
                    <select value={WID} onChange={(e)=>setWID(e.target.value)}>
                    {<option value="">Select Warehouse ID</option>}
                    {warehouse.map((item)=>{
                        return <option value={item.w_id} key={item.w_id}>{item.w_id}</option>
                    })}
                    </select>
                </div>

                <div>
                    <select value={BID} onChange={(e)=>setBID(e.target.value)}>
                        {<option value="">Select Bike ID</option>}
                       
                    {bikes.map((item)=>{
                        return <option value={item.b_id} key={item.b_id}>{item.b_id}</option>
                    })}
                    </select>
                </div>

                <div>
                    <input type="text" placeholder='Enter quantity' value={quantity} onChange={(e)=>setQuantity(e.target.value)} />
                </div>

                <div>
                    <button className='btn-save' onClick={handleDeliverSave}>Save</button>
                </div>
            </div>
        </div>
    )
}

export default AddDelivery
