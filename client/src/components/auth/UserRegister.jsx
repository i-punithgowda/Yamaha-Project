import React, { useState, useEffect } from 'react'
import NavBar from '../homecomponents/NavBar'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import ImgRegister from '../../assets/images/registerImg.jpg'
import { GoogleLogin } from '@react-oauth/google';
import jwt_decode from "jwt-decode";

import './reg.css'
function UserRegister() {

    const [name, setName] = useState('')
    const [username,setUserName]=useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [addr, setAddr] = useState('')
    const [gender, setGender] = useState('')
    const [dob, setDOB] = useState('')
    const [city, setCity] = useState('')
    const [state, setState] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [passwordState, setPasswordState] = useState(false);
    const [confirmPasswordState, setConfirmPasswordState] = useState(false);
    const [checked,setChecked]=useState(true)

    const states = [
        "State",
        "Andhra Pradesh",
        "Arunachal Pradesh",
        "Assam",
        "Bihar",
        "Chhattisgarh",
        "Goa",
        "Gujarat",
        "Haryana",
        "Himachal Pradesh",
        "Jammu and Kashmir",
        "Jharkhand",
        "Karnataka",
        "Kerala",
        "Madhya Pradesh",
        "Maharashtra",
        "Manipur",
        "Meghalaya",
        "Mizoram",
        "Nagaland",
        "Odisha",
        "Punjab",
        "Rajasthan",
        "Sikkim",
        "Tamil Nadu",
        "Telangana",
        "Tripura",
        "Uttar Pradesh",
        "Uttarakhand",
        "West Bengal"]

const OnGoogleAuth=(credentialResponse)=>{
    
        var decoded = jwt_decode(credentialResponse.credential);
     
    console.log(decoded);
        
}
     
          


    return (
        <div className="auth-container">
            <div className="nav">
                <NavBar />
            </div>
            <div className="register-container">
                <div className="input-container">
                    <span style={{fontSize:'0.8rem'}}>Have an account ? <Link to="/userlogin" style={{textDecoration:'none'}} >Login </Link> </span>
                    <h5>Welcome to <span style={{ color: '#D61C4E' }}>Bangalore Wheels</span>! Lets Sign you up.</h5>
                    <div>
                        <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" />
                        <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
                        <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Phone" />
                    </div>
                   

                    <div className="gender">
                        Male
                        <input type="radio" name="gender" value="Male" onChange={(e) => setGender(e.target.value)} />
                        Female
                        <input type="radio" name="gender" value="Female" onChange={(e) => setGender(e.target.value)} />
                    </div>

                    <div className="gemeral-info">
                        <input type="text" onFocus={(e)=>e.target.type="date"} value={dob} onChange={(e) => setDOB(e.target.value)} placeholder="Date of birth" />
                        
                        <select value={state} onChange={(e) => setState(e.target.value)}>

                            {states.map((state) => {
                                return <option value={state} key={state}>{state}</option>
                            })}
                        </select>
                        <input type="text" placeholder='City' value={city} onChange={(e) => setCity(e.target.value(e))} />
                    </div>

                  
                 
                    <div>
                    <textarea value={addr} onChange={(e) => setAddr(e.target.value)} placeholder="Address"></textarea>
                    </div>

                   <div className="password">
                   <div className='pass-1'>
                        <input type={passwordState ? "text" : "password"} placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
                        <FontAwesomeIcon className="ico" icon={passwordState ? faEye : faEyeSlash} onClick={() => {
                            passwordState ? setPasswordState(false) : setPasswordState(true) 
                        }} />
                    </div>
                    <div className='pass-2'>
                        <input type={confirmPasswordState ? "text" : "password"} placeholder="Confirm password" onChange={(e) => setConfirmPassword(e.target.value)} />
                        <FontAwesomeIcon className="ico" icon={confirmPasswordState ? faEye : faEyeSlash}
                            onClick={() => {
                                confirmPasswordState ? setConfirmPasswordState(false) : setConfirmPasswordState(true)
                            }}
                        />
                    </div>
                   </div>

                            <div className="agreement">
                                <input type="checkbox" checked={checked} onChange={(e)=>setChecked(e.target.checked)} />
                                <span>I've read and agree with Terms and conditions and our privacy policy</span>
                            </div>

                    <div className="btn-auth">
                        <button >Register</button>
                    </div>
                    <div className="o-auth">
                    <GoogleLogin
                    
                    theme="filled_blue"
  onSuccess={(cred)=>OnGoogleAuth(cred)}
  onError={() => {
    alert('Login Failed');
  }}
/>
                    </div>

                </div>
                <div className="image-container">
                    <img src={ImgRegister} />
                </div>
            </div>
        </div>
    )
}

export default UserRegister
