import React,{useState,useEffect} from 'react'
import { Link, useNavigate,useLocation } from 'react-router-dom'
import './user.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSignOut } from '@fortawesome/free-solid-svg-icons';
import userMaleAvatar from '../../assets/images/male.gif'
import userFemaleAvatar from '../../assets/images/female.gif'
import Fascino from '../../assets/images/Yamaha-bikes/fascino.jpg'
import FZ from '../../assets/images/Yamaha-bikes/fz.jpg'
import MT15 from '../../assets/images/Yamaha-bikes/mt15.jpg'
import R15 from '../../assets/images/Yamaha-bikes/r15.jpg'
import Ray from '../../assets/images/Yamaha-bikes/ray.jpg'
import Footer from '../../components/homecomponents/FooterHome'
import MT152 from '../../assets/images/Yamaha-bikes/mt15-2.jpg'
import R62 from '../../assets/images/Yamaha-bikes/r62.jpg'


function User() {

    const navigate=useNavigate()
    const location=useLocation()
    const [username,setUsername]=useState('')
   
    

    useEffect(()=>{
        setUsername(location.state.name)
        console.log(username)
    },[])

    
 



    return (
        <div className="user-home">
            <div className="products-container">
                <div className="header">
                    <h5>Bangalore wheels - <span style={{ color: 'red' }}>Yamaha</span></h5>
                    <div className="right-section" >
                        <img src={userMaleAvatar} alt="" />
                        <FontAwesomeIcon icon={faSignOut} onClick={()=>navigate("/")} />
                      <span
                       style={{marginLeft:'10px',cursor:'pointer'}}
                       onClick={(e)=>navigate("/profile",{state:{name:username}})}
                       > {username==='' ? null : username }</span>
                    </div>
                   
                </div>

                <div className='products-banner'>
                    <img src={R15} />
                    <div className="tag">
                        <h4>Yamaha - Revs your heart</h4>
                    </div>
                </div>

                
                
                <div className="user-footer">
                <Footer />
                </div>
            </div>
            

        </div>
    )
}

export default User
