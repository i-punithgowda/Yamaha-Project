import React, { useState,useEffect } from 'react'
import axios from 'axios'

function AddBike() {

    const [wareHouseLoad,setWareHouseLoad]=useState([])

    const loadWarehouse=async()=>{
        const response=await axios.post('http://localhost:4000/load-warehouse/')
        setWareHouseLoad(response.data)
        console.log(wareHouseLoad)
    }

    useEffect(()=>{
        loadWarehouse()
        
    },[])

    const [bikeID,setbikeID]=useState('')
    const [bikeName,setBikeName]=useState('')
    const [bikeModel,setBikeModel]=useState('')
    const [bikeCC,setBikeCC]=useState('')
    const [bikeMileage,setBikeMileage]=useState('')
    const [bikeGear,setBikeGear]=useState('')
    const [bikePrice,setBikePrice]=useState('')
    const [quantity,setQuantity]=useState('')
    const [warehouse,setWareHouse]=useState('')
    const [bikeType,setBikeType]=useState('')


    async function handleSave(){

        const customerObj={
            bikeID:bikeID,
            bikeName:bikeName,
            bikeModel:bikeModel,
            bikePrice:bikePrice,
            quantity:quantity,
            warehouse:warehouse,
            bikeCC:bikeCC,
            bikeGear:bikeGear,
            bikeMileage:bikeMileage,
            bikeType:bikeType
        }

        const response = await axios.post('http://localhost:4000/save-bike',{
            data:customerObj
        })

        if(response.data==true){
            alert("Data inserted!")
            setbikeID('')
            setBikeName('')
            setBikeModel('')
            setBikePrice('')
            setQuantity('')
            setBikeCC('')
            setBikeGear('')
            setBikeMileage('')
            setWareHouse('')
            setBikeType('')
        }else{
            alert("Bike ID already exists")
            setbikeID('')
            setBikeName('')
            setBikeModel('')
            setBikePrice('')
            setQuantity('')
            setBikeCC('')
            setBikeGear('')
            setBikeMileage('')
            setWareHouse('')
            setBikeType('')
        }


    }

    


    return (
     <div className='add-bike'>
        

                <h3>Add bikes</h3>

        <div className="input-field">
        <input type="text" placeholder='Bike ID'  value={bikeID} onChange={(e)=>setbikeID(e.target.value)} />
        <input type="text"  placeholder='Bike name' value={bikeName} onChange={(e)=>setBikeName(e.target.value)} />
        <input type="text" placeholder='Bike Model'value={bikeModel} onChange={(e)=>setBikeModel(e.target.value)} />
        <input type="text" placeholder='Bike CC'value={bikeCC} onChange={(e)=>setBikeCC(e.target.value)} />
        <input type="text" placeholder='Bike Mileage'value={bikeMileage} onChange={(e)=>setBikeMileage(e.target.value)} />
        <input type="text" placeholder='Total Gears'value={bikeGear} onChange={(e)=>setBikeGear(e.target.value)} />
        <input type="text" placeholder='Bike Price' value={bikePrice} onChange={(e)=>setBikePrice(e.target.value)} />
        <input type="text" placeholder='Quantity' value={quantity} onChange={(e)=>setQuantity(e.target.value)} />
      
        <select onChange={(e)=>setWareHouse(e.target.value)} value={warehouse} name="wareHouse">
            {
                 <option value="">Select Warehouse ID</option>
            }
        {
            wareHouseLoad.map((item)=>{
                return  <option value={item.w_id} key={item.w_id}>{item.w_id}</option>
            })
        }
        </select>

        <select value={bikeType} onChange={(e)=>setBikeType(e.target.value)}>
            {<option value="">Select bike type</option>}
        <option value="bike">Bike</option>
        <option value="moped">Moped</option>
        </select>


        </div>
        
        <div className="">
            <button className='btn-save' onClick={handleSave}>Save</button>
        </div>

     </div>

    )
}

export default AddBike
