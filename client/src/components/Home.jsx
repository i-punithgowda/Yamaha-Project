import React from 'react'
import NavBar from '../components/homecomponents/NavBar'
import HomeInfo from './homecomponents/HomeInfo'
import CarouselHome from './homecomponents/CarouselHome'
import Cards from './homecomponents/Cards'
import TimelineComponent from './homecomponents/TimelineComponent'
import FooterHome from './homecomponents/FooterHome'


function Home() {
    return (
        <div className="home">
            <div className="nav">
            <NavBar />
            </div>
            
            <HomeInfo />

            <div className="slider">
            <CarouselHome />
            </div>

            <div >
            <Cards />
            </div>

            <div>
                <TimelineComponent />
            </div>

            <div>
                <FooterHome />
            </div>

            
      
        </div>
    )
}

export default Home
