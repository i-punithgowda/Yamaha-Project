import React, { useState } from 'react'
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import View from './Customer/View';
import Delete from './Customer/Delete';

function Customer() {

    const [state, setState] = useState('view')

    return (
        <div className="common-subDashboard">
            <div className="prevToggler">
                <KeyboardArrowLeftIcon onClick={()=>setState(state === 'view' ? 'del' : 'view')} />
            </div>
            <div className="container">

            {state ==='view' ? <View /> : <Delete />}

            </div>
            <div className="nextToggler">
                <KeyboardArrowRightIcon onClick={()=>setState(state === 'view' ? 'del' : 'view')} />
            </div>
        </div>
    )
}

export default Customer
