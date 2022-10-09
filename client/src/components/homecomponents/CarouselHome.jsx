import React from 'react'
import SimpleImageSlider from "react-simple-image-slider";
import { useState , useEffect} from 'react'

import Slider1 from '../../assets/images/slider1.jpg'
import Slider2 from '../../assets/images/slider2.jpg'
import Slider3 from '../../assets/images/slider3.jpg'






function CarouselHome() {

 

  const images = [
    { url: Slider1 },
    { url: Slider2 },
    { url: Slider3 },
    
  ];
  

 

  return (

    <div>
      <SimpleImageSlider
        width={650}
        height={300}
        images={images}
        showBullets={true}
        showNavs={true}
        loop={true}
        autoPlay={true}
      />
      </div>
  
    )
}

export default CarouselHome
