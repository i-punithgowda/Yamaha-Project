import React from 'react'
import BikeImg from '../../assets/images/bikeInfo.png'

function HomeInfo() {
    return (
        <div className="home-info">
            <div className="title">
                <h3 className='showroom-name' >Bangalore Wheels</h3>
                <h2 className='company'>YAMAHA MOTOR CO., LTD</h2>
                <h3 className='desc'>Revs your heart</h3>
                <button className="btn-homeInfo">Contact us</button>
                <button className="btn-homeInfo">Watch video</button>
            </div>
            <div className="animation">
            <img src={BikeImg} />
            </div>
        </div>
    )
}

export default HomeInfo
