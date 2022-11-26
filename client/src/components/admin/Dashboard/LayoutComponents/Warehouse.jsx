import React,{useState} from 'react'
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import AddWarehouse from './Warehouse/AddWarehouse';
import DeleteWarehouse from './Warehouse/DeleteWarehouse';
import AddDelivery from './Warehouse/AddDelivery';

function Warehouse() {

    const [state,setState]=useState('AddW')




    return (
        <div className="common-subDashboard">
            <div className="prevToggler">
                <KeyboardArrowLeftIcon onClick={()=>setState(state === 'AddW' ? 'Del' : state==='Del' ? 'AddD' : state==='AddD' ? 'AddW' :  null)} />
            </div>
            <div className="container">

            {state ==='AddW' ? <AddWarehouse /> : state=== 'Del' ? <DeleteWarehouse /> : state==='AddD' ? <AddDelivery /> : null}

            </div>
            <div className="nextToggler">
            <KeyboardArrowRightIcon onClick={()=>setState(state === 'AddW' ? 'Del' : state==='Del' ? 'AddD' : state==='AddD' ? 'AddW' :  null)} />
            </div>
        </div>
    )
}

export default Warehouse
