import React from 'react'
import { useParams } from 'react-router-dom'
import './bikes.css'
import HamburgerMenu from 'react-hamburger-menu'
import MaleProfileAvatar from '../../assets/images/male.gif'
import FemaleProfileAvatar from '../../assets/images/female.gif'
import ProductImage from '../../assets/images/Yamaha-bikes/mt15.jpg'
import Image1 from '../../assets/images/Yamaha-bikes/fz1.jpg'
import Image2 from '../../assets/images/Yamaha-bikes/fz3.jpg'
import Image3 from '../../assets/images/Yamaha-bikes/mt15-2.jpg'
import Image4 from '../../assets/images/Yamaha-bikes/r1-2.jpg'
import Image5 from '../../assets/images/Yamaha-bikes/fazer.jpg'
import Image6 from '../../assets/images/Yamaha-bikes/r1.jpg'

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

                <div className="product-animator">
                    <div className="column-1">
                        <img src={Image6} alt="" />
                        <img src={Image2} alt="" />
                        <img src={Image3} alt="" />
                    </div>
                    <div className="column-2">
                        <img src={Image4} alt="" />
                        <img src={Image5} alt="" />
                        <img src={Image1} alt="" />
                    </div>
                </div>


            </div>

        </div>
    )
}

export default Bikes
