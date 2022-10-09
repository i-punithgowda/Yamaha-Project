import React,{useState} from 'react'
import {Link} from 'react-router-dom'


function Nav() {
    
 


    return (
     <div className="nav">
      <div className="links">
      <Link to="/" className='link nav-link' >Home  </Link>
        <Link to="/userregister" className='link nav-link' >Register </Link>
        <Link to="/userlogin" className='link nav-link'>Login </Link>
        <Link to="/adminlogin" className='link nav-link'>Admin</Link>
      </div>
      
   
      
     </div>
    )
}

export default Nav
