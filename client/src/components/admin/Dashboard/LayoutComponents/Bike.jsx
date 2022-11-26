import React, { useState } from 'react'
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import Add from './Bike/AddBike';
import Delete from './Bike/DeleteBike';
import Orders from './Bike/Orders';
import ViewAllOrders from './Bike/ViewAllOrders';

function Bike() {

    const [state, setState] = useState('add')

    return (
        <div className="common-subDashboard">
            <div className="prevToggler">
                <KeyboardArrowLeftIcon onClick={()=>setState(state === 'add' ? 'del' :  state==='del' ? "orders" : state==="orders" ? "view" : state==="view" ? "add" : null)} />
            </div>
            <div className="container">

            {state ==='add' ? <Add /> : state==='del' ? <Delete /> :state==='orders' ? <Orders /> : <ViewAllOrders />}

            </div>
            <div className="nextToggler">
            <KeyboardArrowRightIcon onClick={()=>setState(state === 'add' ? 'del' :  state==='del' ? "orders" : state==="orders" ? "view" : state==="view" ? "add" : null)} />
            </div>
        </div>
    )
}

export default Bike
