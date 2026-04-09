import React, { useState } from 'react';
import { Carousel, Container } from 'react-bootstrap';
import '../About.css'

function Boardslider() {


  return (
    <div>
      <Carousel className="slider">
        <Carousel.Item>
          <img className="d-block w-100 full zoom" src="/board/sliderboard.jpg" alt="Slide 1" />
          <div className='container'>
            <div className="carousel-caption caption-left">

              <h1 className='linedown'>BOARD OF<br></br> DIRECTORS

              </h1>
              <p className='linedown'>5 prominent members of the local business
                <br></br>community,all leaders in their industries.
              </p>

            </div>
          </div>

        </Carousel.Item>
        {/* <Carousel.Item>
        <img className="d-block w-100" src="slide2.jpg" alt="Slide 2" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src="slide3.jpg" alt="Slide 3" />
      </Carousel.Item> */}
      </Carousel>
    </div>
  );
}

export default Boardslider;