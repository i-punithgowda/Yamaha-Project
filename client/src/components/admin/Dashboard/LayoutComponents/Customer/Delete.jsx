import React, { useState } from 'react'
import axios from 'axios'



function Delete() {




    const [searchCust,setSearchCust]=useState('')

  async function handleDelete(){
   if(searchCust==""){
    alert("Enter customer ID")
   }else{
    const response=await axios.post('http://localhost:4000/del-customer',{
        cust:searchCust
    })
    if(response.data==true){
        alert("Customer data deleted")
        setSearchCust('')
    }else{
        alert("Unexpected error occured")
        setSearchCust('')
    }
   }
  }




    return (
        <div className="delete-customers">
            <h2>Delete customers</h2>

            <div className="delete-data">
                <input type="text" value={searchCust} onChange={(e)=>setSearchCust(e.target.value)} placeholder="Customer ID" />
                <div>
                <button onClick={handleDelete}>Delete</button>
                </div>
            </div>
        </div>
    )
}

export default Delete
