import React, { useState, useEffect } from 'react'
import NavBar from '../homecomponents/NavBar'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { faEyeSlash } from '@fortawesome/free-solid-svg-icons';


import './auth-login.css'
function UserLogin() {

    const [username, setUserName] = useState('')
    const [password, setPassword] = useState('')
    const [passwordState, setPasswordState] = useState(false);

    

    return (
        <div className="auth-container">
            <div className="nav">
                <NavBar />
            </div>
            <div className="login-container">
                <div className="input-container">
                    

                        
                 

                </div>
                <div className="image-container">
                   
                </div>
            </div>
        </div>
    )
}

export default UserLogin
