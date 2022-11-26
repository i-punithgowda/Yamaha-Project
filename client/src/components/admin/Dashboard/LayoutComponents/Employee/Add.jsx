import React,{useState} from 'react'
import axios from 'axios'

function Add() {


    const [eid,setEid]=useState('')
    const [ename,setEname]=useState('')
    const [dob,setDob]=useState('')
    const [phone,setPhone]=useState('')
    const [salary,setSalary]=useState('')
    const [addr,setAddr]=useState('')
    const [state,setState]=useState('text')

    const handleEmployeeSave=async()=>{
        const response=await axios.post('http://localhost:4000/save-employee',{
            eid:eid,
            ename:ename,
            dob:dob,
            phone:phone,
            salary:salary,
            addr:addr
        })

        if(response.data==false){
            alert("Unexpected error occured")
            setEid('')
            setEname('')
            setDob('')
            setPhone('')
            setSalary('')
            setAddr('')
        }else{
            alert("Employee data inserted !")
            setEid('')
            setEname('')
            setDob('')
            setPhone('')
            setSalary('')
            setAddr('')
        }

    }

    return (
        <div className="employee">
            <h3>Add employee</h3>
            <div className="input-fields">
            <input type="text" placeholder="Employee ID"  value={eid} onChange={(e)=>setEid(e.target.value)} />
            <input type="text" placeholder="Employee Name"  value={ename} onChange={(e)=>setEname(e.target.value)} />
            <input type={state} onFocus={()=>setState(state==="text" ?  "date" : "text")} placeholder="Employee DOB"  value={dob} onChange={(e)=>setDob(e.target.value)} />
            <input type="text" placeholder="Employee Phone"  value={phone} onChange={(e)=>setPhone(e.target.value)} />
            <input type="text" placeholder="Employee Salary"  value={salary} onChange={(e)=>setSalary(e.target.value)} />
            <input type="text" placeholder="Employee Address"  value={addr} onChange={(e)=>setAddr(e.target.value)} />

            <div>
                <button className='btn-save' onClick={handleEmployeeSave}>Save</button>
            </div>
            </div>
        </div>
    )
}

export default Add
