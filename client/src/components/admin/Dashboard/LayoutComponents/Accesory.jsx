import React, { useState } from 'react'
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import AddAccesory from './Accesory/AddAccesory';
import DeleteAccesory from './Accesory/DeleteAccessory';
import BuyAccesory from './Accesory/BuyAccesory';

function Accesory() {

    const [state, setState] = useState('add')

    return (
        <div className="common-subDashboard">
            <div className="prevToggler">
                <KeyboardArrowLeftIcon onClick={()=>setState(state === 'add' ? 'del' : state==="del" ? "buy" : state==="buy" ? "add" : "")} />
            </div>
            <div className="container">

            {state ==='add' ? <AddAccesory /> : state==="del" ? <DeleteAccesory /> : state==="buy" ?  <BuyAccesory/> : ""}

            </div>
            <div className="nextToggler">
            <KeyboardArrowRightIcon onClick={()=>setState(state === 'add' ? 'del' : state==="del" ? "buy" : state==="buy" ? "add" : "")} />
            </div>
        </div>
    )
}

export default Accesory
