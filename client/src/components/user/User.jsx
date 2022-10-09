import React from 'react'
import { Link } from 'react-router-dom'
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



function User() {


    const arrayOfTrendingBikes = [{
        name: 'Yamaha fascino',
        src: Fascino
    }, {
        name: 'Yamaha FZ',
        src: FZ
    }, {
        name: 'Yamaha Ray',
        src: Ray
    },
    {
        name: 'Yamaha Ray',
        src: Ray
    },
    {
        name: 'Yamaha Ray',
        src: Ray
    },
    {
        name: 'Yamaha Ray',
        src: Ray
    },
    {
        name: 'Yamaha Ray',
        src: Ray
    },
    {
        name: 'Yamaha Ray',
        src: Ray
    },
    {
        name: 'Yamaha Ray',
        src: Ray
    }

    ]

    const arrayOfMostPurchaseBikes = [{
        name: 'Yamaha R15',
        src: R15
    }, {
        name: 'Yamaha MT15',
        src: MT15
    }, {
        name: 'Yamaha Fascino',
        src: Fascino
    },
    {
        name: 'Yamaha Fascino',
        src: Fascino
    },
    {
        name: 'Yamaha Fascino',
        src: Fascino
    },
    {
        name: 'Yamaha Fascino',
        src: Fascino
    },
    {
        name: 'Yamaha Fascino',
        src: Fascino
    },
    {
        name: 'Yamaha Fascino',
        src: Fascino
    },
    {
        name: 'Yamaha Fascino',
        src: Fascino
    },
    {
        name: 'Yamaha Fascino',
        src: Fascino
    },
    {
        name: 'Yamaha Fascino',
        src: Fascino
    },
    
    ]





    return (
        <div className="user-home">
            <div className="products-container">
                <div className="header">
                    <h5>Bangalore wheels - <span style={{ color: 'red' }}>Yamaha</span></h5>
                    <div className="right-section">
                        <img src={userMaleAvatar} alt="" />
                        <FontAwesomeIcon icon={faSignOut} />
                    </div>
                </div>

                <div className='products-banner'>
                    <img src={R15} />
                    <div className="tag">
                        <h4>Yamaha - Revs your heart</h4>
                    </div>
                </div>

                <div className="products-section">
                   <div className='trending'>
                   <h5>Trending bikes</h5>
                   </div>

<div className="trending-bikes">

{arrayOfTrendingBikes.map((bike)=>{
   return <div key={bike.name} className="each-card">
    <Link to={`/products/${bike.name}`}><img src={bike.src} className="img-product" /></Link>
    </div>
 })}
    
</div>

<div>
<div className='purchased'>
<h5>Most purchased bikes</h5>
</div>

<div className="most-purchased">
    {
        arrayOfMostPurchaseBikes.map((bike)=>{
            return <div key={bike.name} className="each-card">
             <Link to={`/products/${bike.name}`}><img src={bike.src} className="img-product" /></Link>
             </div>
          })}
</div>
             
    
</div>


                </div>
                <Footer />
            </div>
            

        </div>
    )
}

export default User
