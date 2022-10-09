
import React,{useState,useEffect}  from 'react';
import{BrowserRouter as Router  ,Routes , Route} from 'react-router-dom'
import Home from './components/Home'
import Error from './components/Error';
import User from './components/user/User';
import Admin from './components/admin/Admin';
import Adminlogin from './components/auth/Adminlogin';
import Userlogin from './components/auth/Userlogin';
import Loadingscreen from './components/Loadingscreen';
import UserRegister from './components/auth/UserRegister';
import Bikes from './components/user/Bikes'


function App() {
 
const [loading,setLoading]=useState(false);

useEffect(()=>{
setTimeout(()=>{
setLoading(false)
},5000)
},[])

 if(loading){
  return <Loadingscreen />
 }else{
 return (
    <Router>
    <Routes>
    <Route exact path="/" element={<Home />} />
    <Route exact path="/user" element={<User />} />
    <Route exact path="/admin" element={<Admin />} />
    <Route exact path="/userlogin" element={<Userlogin />} />
    <Route exact path="/adminlogin" element={<Adminlogin />} />
    <Route exact path="/userregister" element={<UserRegister />} />
    <Route exact path="/products/:name" element={<Bikes />} />
    <Route path="*" element={<Error />}/>
   </Routes>
   </Router>
   
 )
 }


}

export default App;
