import React, { useState, useEffect } from 'react'
import NavBar from '../homecomponents/NavBar'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import loginImg from '../../assets/images/adminLogin.jpg'
import AdminAvatar from '../../assets/images/avatarAdmin.png'


import './auth-login.css'
function AdminLogin() {

    const [username, setUserName] = useState('')
    const [password, setPassword] = useState('')
    const [passwordState, setPasswordState] = useState(true);
    const [checked, setChecked] = useState(false)


    const userLogin = () => {

    }



 


    return (
        <div className="auth-container">
            <div className="nav">
                <NavBar />
            </div>
            <div className="login-container">
                <div className="login-input-container">
                    <span>Bangalore wheels - <Link to="/" style={{ color: "red", textDecoration: 'none' }}>Yamaha</Link></span>
                    <div className="container-heading">
                        <h3>Welcome back admin</h3>
                        <span style={{ fontSize: "0.9rem" }}>Please enter your details</span>
                    </div>

                    <div className="admin-img">
                        <img src={AdminAvatar} alt="" />
                    </div>

                    <div className="form">
                        <input type="text" value={username} placeholder="Username" onChange={(e) => setUserName(e.target.value)} className="inputField" />
                        <div> <input className="inputField"
                            type={passwordState ? "password" : "text"} value={password} placeholder="Password"
                            onChange={(e) => setPassword(e.target.value)}
                            style={{ width: "300px" }}
                        />
                            <FontAwesomeIcon onClick={() => {
                                passwordState ? setPasswordState(false) : setPasswordState(true)
                            }
                            }
                                icon={passwordState ? faEye : faEyeSlash}
                                className="ico"
                            />
                        </div>

                    </div>
                   

                    <div className="btn-auth">
                        <button onClick={userLogin} >Login</button>
                    </div>
                   

                  
                </div>
                <div className="login-image-container">
                    <img src={loginImg} alt="" />

                </div>
            </div>
        </div>
    )
}

export default AdminLogin
