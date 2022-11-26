import React, { useEffect } from 'react'
import Dashboard from './Dashboard/Dashboard'
import './dashboard.css'

function Admin() {

    useEffect(()=>{
        localStorage.setItem("dashboardState","home")
    },[])

    return (
        <div className="admin-dashboard">
            <Dashboard />
        </div>
    )
}

export default Admin
