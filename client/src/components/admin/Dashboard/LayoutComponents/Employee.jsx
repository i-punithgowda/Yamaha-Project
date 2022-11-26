import React,{useState} from 'react'
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import Add from './Employee/Add';
import Delete from './Employee/Delete';

function Employee() {

    const [state,setState]=useState('add')

    return (
        <div className="common-subDashboard">
            <div className="prevToggler">
                <KeyboardArrowLeftIcon onClick={()=>setState(state === 'add' ? 'del' : 'add')} />
            </div>
            <div className="container">

            {state ==='add' ? <Add /> : <Delete />}

            </div>
            <div className="nextToggler">
                <KeyboardArrowRightIcon onClick={()=>setState(state === 'add' ? 'del' : 'add')} />
            </div>
        </div>
    )
}

export default Employee
