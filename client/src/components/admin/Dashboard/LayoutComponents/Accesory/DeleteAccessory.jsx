import React, { useState } from 'react'
import axios from 'axios'



function DeleteAccesory() {

    const [searchCust,setSearchCust]=useState('')

    async function handleDelete(){
        if(searchCust==""){
         alert("Enter bike ID")
        }else{
         const response=await axios.post('http://localhost:4000/del-acc',{
             acc:searchCust
         })
         if(response.data==true){
             alert("Accesory data deleted")
             setSearchCust('')
         }else{
             alert("Unexpected error occured")
             setSearchCust('')
         }
        }
       }


    return (
        <div className="delete-customers">
            <h2>Delete Accessory</h2>

            <div className="delete-data">
                <input type="text" value={searchCust} onChange={(e)=>setSearchCust(e.target.value)} placeholder="Accessory ID" />
                <div>
                <button onClick={handleDelete}>Delete</button>
                </div>
            </div>
        </div>
    )
}

export default DeleteAccesory