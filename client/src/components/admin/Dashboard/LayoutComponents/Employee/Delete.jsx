import React,{useState} from 'react'
import axios from 'axios'

function Delete() {
    
    const [eid,setEid]=useState('')

    const handleDeleteEmployee=async()=>{
        const response=await axios.post('http://localhost:4000/delete-employee',{
            eid:eid
        })

        if(response.data==false){

            alert("Unexpected error occured")
            setEid('')
        }else{
            alert("Employee data deleted")
            setEid('')
        }
    }

    return (
       <div className="employee">
        <h3>Delete employee</h3>

        <div className="input-fields">
            <input type="text" value={eid} placeholder="Enter Employee ID" onChange={(e)=>setEid(e.target.value)}  />
            <div>
                <button className="btn-save" onClick={handleDeleteEmployee}>Save</button>
            </div>
        </div>
       </div>
    )
}

export default Delete
