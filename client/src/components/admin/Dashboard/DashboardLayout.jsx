import React,{useState,useEffect} from 'react'
import {Link} from 'react-router-dom'
import ImageAdmin from '../../../assets/images/maleAvatar.png'
import HomeIcon from '@mui/icons-material/Home';
import GroupIcon from '@mui/icons-material/Group';
import TwoWheelerIcon from '@mui/icons-material/TwoWheeler';
import ConstructionIcon from '@mui/icons-material/Construction';
import LogoutIcon from '@mui/icons-material/Logout';
import Home from './LayoutComponents/Home';
import Customer from './LayoutComponents/Customer';
import Bike from './LayoutComponents/Bike';
import Accesory from './LayoutComponents/Accesory';
import axios from 'axios';
import FactoryIcon from '@mui/icons-material/Factory';
import { useNavigate } from 'react-router-dom';
import Warehouse from './LayoutComponents/Warehouse';
import BadgeIcon from '@mui/icons-material/Badge';
import Employee from './LayoutComponents/Employee';
import LineAxisIcon from '@mui/icons-material/LineAxis';
import Analysis from './LayoutComponents/Analysis/Analysis';

function DashboardLayout() {

const [state,setState]=useState('customer')
const navigate=useNavigate()



    return (
      <div className="dashboard">
            <div className="dashboard-sidebar">
            <div className="header">
            <span className="dashboard-header">Bangalore wheels - <Link to="/" style={{ color: "red", textDecoration: 'none' }}>Yamaha</Link></span>
            </div>
            <div className="adminDetails">
                <div className="adminAvatar">
                    <img src={ImageAdmin} alt="" />
                    <div className="adminData">
                        Punith Gowda S P
                        ADMIN
                    </div>
                </div>
                
            </div>
            <div className="dashboard-components">
                    <div className="dashboard-component-home components hover-effect" onClick={()=>setState("home")}>
                      <div className="icon">
                      <HomeIcon />
                      </div>
                        Dashboard
                    </div>
                    <div className="dashboard-component-customer components hover-effect" onClick={()=>setState("customer")}>
                       <div className="icon">
                       <GroupIcon />
                       </div>
                        Customers
                    </div>
                    <div className="dashboard-component-bikes components hover-effect" onClick={()=>setState("bike")}>
                        <div className="icon">
                        <TwoWheelerIcon />
                        </div>
                        Bikes
                    </div>

                    <div className="dashboard-component-accesories components hover-effect" onClick={()=>setState("accesory")}>
                        <div className="icon">
                        <ConstructionIcon />
                        </div>
                        Accesories
                    </div>

                    <div className="dashboard-component-accesories components hover-effect" onClick={()=>setState("employee")}>
                        <div className="icon">
                        <BadgeIcon />
                        </div>
                        Employee
                    </div>

                    <div className="dashboard-component-accesories components hover-effect" onClick={()=>setState("warehouse")}>
                        <div className="icon">
                        <FactoryIcon />
                        </div>
                        Warehouse
                    </div>
                    <div className="dashboard-component-accesories components hover-effect" onClick={()=>setState("analysis")}>
                        <div className="icon">
                        <LineAxisIcon />
                        </div>
                        Analysis
                    </div>

            

                </div>
                <div className="admin-signout hover-effect" onClick={()=>navigate("/")}>
               
                <div className="icon" >
                <LogoutIcon />
                </div>
                Logout
                
              
            </div>
        </div>

        <div className="dashboard-layout">
            {state !=null  && state=="home" ? <Home /> :
             state !=null  && state=="customer" ? <Customer />  :
            state !=null  && state=="bike" ? <Bike /> : 
            state !=null  && state=="accesory" ? <Accesory />  : 
            state !=null  &&  state=="warehouse" ? <Warehouse /> :
            state !=null && state=="employee" ? <Employee /> :
            state !=null && state=="analysis" ? <Analysis />:
            null 
            }
            
        </div>

      </div>
      
    )
}

export default DashboardLayout
