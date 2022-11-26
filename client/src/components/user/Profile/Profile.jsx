import React,{useEffect,useState} from 'react'
import { useLocation } from 'react-router-dom'
function Profile() {

    const location=useLocation()
    const [username,setUsername]=useState('')
    useEffect(()=>{
        setUsername(location.state.name)
    })

    return (
        <h1>{username}</h1>
    )
}

export default Profile
