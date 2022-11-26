import React,{useState} from 'react'
import axios from 'axios'

function AddWarehouse() {

    const [wID,setWID]=useState('')
    const [wname,setWname]=useState('')
    const [waddr,setWaddr]=useState('')
    const [wphone,setWphone]=useState('')


    const handleWarehouseSave=async()=>{
        const response=await axios.post('http://localhost:4000/save-warehouse',{
            wID:wID,
            wname:wname,
            waddr,waddr,
            wphone:wphone
        })

        if(response.data==false){
            alert("Unexpected error occured")
            setWID('')
            setWname('')
            setWaddr('')
            setWphone('')
        }else{
            alert("Warehouse data stored")
            setWID('')
            setWname('')
            setWaddr('')
            setWphone('')
        }
    }


    return (
        <div className="warehouse">
            <h3>Add warehouse</h3>
            <div className="input-fields">
                <input type="text" placeholder='Enter warehouse ID' value={wID} onChange={(e)=>setWID(e.target.value)}  />
                <input type="text" placeholder='Enter warehouse name' value={wname} onChange={(e)=>setWname(e.target.value)}  />
                <input type="text" placeholder='Enter warehouse location' value={waddr} onChange={(e)=>setWaddr(e.target.value)}  />
                <input type="text" placeholder='Enter warehouse phone' value={wphone} onChange={(e)=>setWphone(e.target.value)}  />

                <div><button className="btn-save" onClick={handleWarehouseSave}>Save</button></div>
           
            </div>
        </div>
    )
}

export default AddWarehouse
