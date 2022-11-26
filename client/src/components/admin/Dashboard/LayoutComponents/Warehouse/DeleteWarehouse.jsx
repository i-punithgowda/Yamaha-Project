import React,{useState} from 'react'
import axios from 'axios'

function DeleteWarehouse() {

    const [wID,setWID]=useState('')

    const handleWarehouseDelete=async ()=>{
        const response=await axios.post('http://localhost:4000/del-warehouse',{
            wID:wID
        })

        if(response.data==false){
            alert("Entered Warehouse ID doesnr exists!!")
            setWID('')
        }else{
            alert("Ware house data deleted")
            setWID('')
        }
    }

    return (
        <div className="warehouse">
            <h3>Delete Warehouse</h3>
            <div className="input-fields">
                <input type="text" value={wID} onChange={(e)=>setWID(e.target.value)} placeholder="Enter warehouse ID" />
               <div>
               <button className='btn-save' onClick={handleWarehouseDelete}>Delete</button>
               </div>
            </div>
        </div>
    )
}

export default DeleteWarehouse
