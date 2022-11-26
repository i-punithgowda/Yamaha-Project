import React,{useState,useEffect} from 'react'
import axios from 'axios'

function BuyAccesory() {


    const [aid,setAid]=useState('')
    const [cid,setCid]=useState('')
    const [dateP,setDate]=useState('')
    const [accesory,setAccesory]=useState([])
    const [customers,setCustomers]=useState([])
    const [state,setState]=useState('text')

const fetchCustomers=async()=>{
const response=await axios.post('http://localhost:4000/load-customers')
setCustomers(response.data)
}

const fetchAccesories=async()=>{
const response=await axios.post('http://localhost:4000/load-accesories')
setAccesory(response.data)
}

     useEffect(()=>{

        fetchCustomers()
        fetchAccesories()
    },[])


    const handleAccesoryPurchase = async()=>{
            const response=await axios.post('http://localhost:4000/save-purchase',{
                aid:aid,
                cid:cid,
                date:dateP
            })
            if(response.data==false){
                alert("Unexpected error occured")
                setAid('')
                setCid('')
                setDate('')
            }else{
                alert("Accesory purchasal information saved")
                setAid('')
                setCid('')
                setDate('')
            }
    }



    return (
        <div className="purchased-dataEntry" >
            <h3>Insert purchased accesory data</h3>
            <div className="input-fields">
               <select value={aid} onChange={(e)=>setAid(e.target.value)}>
                {<option value="" >Select Accesory ID</option>}
                {accesory.map((item)=>{
                    return <option value={item.a_id} key={item.a_id}>{item.a_id}</option>
                })}
               </select>

               <select value={cid} onChange={(e)=>setCid(e.target.value)}>
                {<option value="" >Select Customer ID</option>}
                {customers.map((item)=>{
                    return <option value={item.c_id} key={item.c_id}>{item.c_id}</option>
                })}
               </select>


                <input type={state} placeholder="Select purchased date" value={dateP} onFocus={()=>setState(state==="text" ? "date" : "text")} onChange={(e)=>setDate(e.target.value)} />

               <div> <button class="btn-save" onClick={handleAccesoryPurchase}>Save</button></div>
            </div>
        </div>
    )
}

export default BuyAccesory
