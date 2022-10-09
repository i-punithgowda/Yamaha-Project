import Card from 'react-bootstrap/Card';
import React from 'react';
import Slider1 from '../../assets/images/slider1.jpg'


function Cards() {
    return (
       <div className="card-container">

<Card style={{ width: '18rem' }}>
       <Card.Img variant="top" src={Slider1} />
       <Card.Body>
         <Card.Title>Bangalore Wheels</Card.Title>
         <Card.Text>
           Some quick example text to build on the card title and make up the
           bulk of the card's content.
         </Card.Text>
        
       </Card.Body>
     </Card>

     <Card style={{ width: '18rem' }}>
       <Card.Img variant="top" src={Slider1} />
       <Card.Body>
         <Card.Title>Why yamaha ?</Card.Title>
         <Card.Text>
           Some quick example text to build on the card title and make up the
           bulk of the card's content.
         </Card.Text>
        
       </Card.Body>
     </Card>


       </div>



    )
}

export default Cards
