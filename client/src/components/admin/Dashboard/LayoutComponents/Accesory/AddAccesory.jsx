import React, { useState , useEffect} from 'react'
import axios from 'axios'

function AddAccesory() {

    const [AccesoryID, setAccesoryID] = useState('')
    const [AccesoryName, setAccesoryName] = useState('')
    const [bikeID, setBikeID] = useState('')
    const [AccesoryPrice, setAccesoryPrice] = useState('')
    const [bikes,setBikes]=useState([])

    const loadWarehouse=async()=>{
        const response=await axios.post('http://localhost:4000/load-bike/')
        setBikes(response.data)
        
    }

    useEffect(()=>{
        loadWarehouse()
        
    },[])


    async function handleSave() {
        const AccessoryObj = {
            id: AccesoryID,
            name: AccesoryName,
            bid: bikeID,
            price: AccesoryPrice,


        }

        const response = await axios.post('http://localhost:4000/save-accesory', {
            data: AccessoryObj
        })
        if (response.data == true) {
            alert("Data inserted!")
            setAccesoryID('')
            setAccesoryName('')
            setBikeID('')
            setAccesoryPrice('')


        } else {
            alert("Unexpected error occured!")
            setAccesoryID('')
            setAccesoryName('')
            setBikeID('')
            setAccesoryPrice('')

        }

    }


    return (
        <div className='add-Accesory' style={{marginTop:"100px"}}>


            <h3>Add Accesorys</h3>

            <div className="input-field">
                <input type="text" placeholder='Accessory ID' value={AccesoryID} onChange={(e) => setAccesoryID(e.target.value)} />
                <input type="text" placeholder='Accessory name' value={AccesoryName} onChange={(e) => setAccesoryName(e.target.value)} />

                <input type="text" placeholder='Accessory Price' value={AccesoryPrice} onChange={(e) => setAccesoryPrice(e.target.value)} />
                <div>
                    <select value={bikeID} onChange={(e)=>setBikeID(e.target.value)}>
                    {<option value="">Select bike ID</option>}
                    {
            bikes.map((item)=>{
                return  <option value={item.b_id} key={item.b_id}>{item.b_id}</option>
            })
        }
                    </select>
                </div>
            </div>

            <div className="">
                <button className='btn-save' onClick={handleSave}>Save</button>
            </div>

        </div>

    )
}

export default AddAccesory
