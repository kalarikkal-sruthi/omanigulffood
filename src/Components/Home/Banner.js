import React from 'react'
import { Carousel } from "react-bootstrap";

function Banner() {
  return (
    <div>

       <Carousel>
      <Carousel.Item >
        <img
          className="d-block w-100" style={{marginTop:'92px'}}
          src='images/banner/slider1.jpeg'
          alt="First slide"
        />
        <Carousel.Caption>
           {/* <div className="image-text">
            <img
              className=""
              src='images/banner/sliderlogo.png'
              alt="Third slide"
            />
            <h6 className='linedown'>WELCOME TO</h6>
            <h1 className='linedown'>OMANI GULF FOOD COMPANY</h1>
          </div > */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
            className="d-block w-100" style={{marginTop:'92px'}}             
          src='images/banner/Slider-1.jpg'
          alt="Second slide"
        />

        {/* <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption> */}
      </Carousel.Item>
     
    </Carousel>
      {/* <Carousel>
        <Carousel.Item className="image-container">
          <img
            className="d-block w-100"
            
            src='images/banner/slider1.jpeg'
            alt="Third slide"
          />
          <div className="image-text">
            <img
              className=""
              src='images/banner/sliderlogo.png'
              alt="Third slide"
            />
            <h6>WELCOME TO</h6>
            <h1>OMANI GULF FOOD COMPANY</h1>
          </div >
        </Carousel.Item>
        <Carousel.Item className="image-container">
          <img
            className="d-block w-100"
            
            src='images/banner/slider2.jpeg'
            alt="Third slide"
          />
       
        </Carousel.Item>
      </Carousel> */}
    </div>
  )
}

export default Banner