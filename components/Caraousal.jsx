import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import image1 from '../Assets/image1.png';
import image2 from '../Assets/image2.png';
import image3 from '../Assets/image3.png';
import image4 from '../Assets/image4.png';
import image5 from '../Assets/image5.png';
import image6 from '../Assets/image6.png';




function Caraousal() {
    return(
      <div style={{paddingTop: '100px'}}>
       <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img style={{height: '600px',width:'250px',padding:'50px'}}
          className="d-block w-100"
          src={image1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h5 style={{padding:'5px',color:'white'}}>Adventure & Trekking</h5>
         
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img style={{height: '600px',width:'250px',padding:'50px'}}
          className="d-block w-100"
          src={image2}
          alt="Second slide"
        />
        <Carousel.Caption>
          <h5  style={{padding:'5px',color:'white'}}>Scenic Beauty of Beachside</h5>
         
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img style={{height: '600px',width:'250px',padding:'50px'}}
          className="d-block w-100"
          src={image3}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h5  style={{padding:'5px',color:'white'}}>Historical & Heritage sites</h5>
         
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img style={{height: '600px',width:'250px',padding:'50px'}}
          className="d-block w-100"
          src={image4}
          alt="Fourth slide"
        />
        <Carousel.Caption>
          <h5  style={{padding:'5px',color:'white'}}>Explore Hillstations</h5>
         
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img style={{height: '600px',width:'250px',padding:'50px'}}
          className="d-block w-100"
          src={image5}
          alt="Fifth slide"
        />
        <Carousel.Caption>
          <h5  style={{padding:'5px',color:'white'}}>Amazing Wildlife Scenes</h5>
         
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img style={{height: '600px',width:'250px',padding:'50px'}}
          className="d-block w-100"
          src={image6}
          alt="sixth slide"
        />
        <Carousel.Caption>
          <h5  style={{padding:'5px',color:'white'}}>Famous Pilgrimage Tour</h5>
         
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
      </div>
    )
}
export default  Caraousal ;
