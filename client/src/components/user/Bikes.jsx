import React from 'react'
import { useParams,useNavigation } from 'react-router-dom'
import './bikes.css'
import HamburgerMenu from 'react-hamburger-menu'
import MaleProfileAvatar from '../../assets/images/male.gif'
import FemaleProfileAvatar from '../../assets/images/female.gif'
import ProductImage from '../../assets/images/Yamaha-bikes/mt15.jpg'


function Bikes() {

    const params = useParams()



    return (
        <div className="container-product">

            <div className="product">
                <div className="product-data">

                    <div className="header">

                        <div className="heading">
                            <h5>Bangalore Wheels - <span style={{ color: "red" }}>Yamaha</span></h5>
                        </div>

                        <div className="avatar">
                            <img src={MaleProfileAvatar} alt="" />
                        </div>


                    </div>

                <div className="product-info">
                    <h1>{params.name}</h1>
                    <h4>On road price : 50000 $</h4>


                    <div className="product-img">
                        <img src={ProductImage} alt="" />
                    </div>

                </div>

                </div>

                <div className="product-description">
                   
                </div>


            </div>

        </div>
    )
}

export default Bikes
