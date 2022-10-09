import React, { useState, useEffect } from 'react'
import NavBar from '../homecomponents/NavBar'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import loginImg from '../../assets/images/loginImg.jpg'
import UserAvatar from '../../assets/images/avatarUser.png'
import { GoogleLogin } from '@react-oauth/google';
import jwt_decode from "jwt-decode";


import './auth-login.css'
function UserLogin() {

    const [username, setUserName] = useState('')
    const [password, setPassword] = useState('')
    const [passwordState, setPasswordState] = useState(true);
    const [checked, setChecked] = useState(false)


    const userLogin = () => {

    }



    const OnGoogleAuth=(credentialResponse)=>{
    
        var decoded = jwt_decode(credentialResponse.credential);
     
    console.log(decoded);
        
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
                        <h3>Welcome back</h3>
                        <span style={{ fontSize: "0.9rem" }}>Please enter your details</span>
                    </div>
                    <div className="admin-img">
                        <img src={UserAvatar} style={{width:'100px'}}/>
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
                    <div className="validation">
                        <div >
                            <input type="checkbox" onChange={() => checked ? setChecked(false) : setChecked(true)} checked={checked}
                                style={{ marginRight: '5px' }}
                            />
                            <span class="remember">Remember me</span>
                        </div>
                        <Link to="/forgotpass" className='link-forgot'>Forgot password ?</Link>
                    </div>


                    <div className="btn-auth">
                        <button onClick={userLogin} >Login</button>

                    </div>
                    <div className="new-user">
                        <span className='login-new-user'>Dont have an account ? <Link to="/userregister" style={{ textDecoration: 'none' }}>Register</Link></span>
                    </div>

                    <div className="o-auth">
                        <GoogleLogin

                            theme="filled_blue"
                            onSuccess={(cred) => OnGoogleAuth(cred)}
                            onError={() => {
                                alert('Login Failed');
                            }}
                        />
                    </div>

                </div>
                <div className="login-image-container">
                    <img src={loginImg} alt="" />

                </div>
            </div>
        </div>
    )
}

export default UserLogin
