import React, { useState } from 'react';
import { Carousel, Container } from 'react-bootstrap';
import '../About.css'

function Aboutslider({ text }) {


  return (
    <div>
      <Carousel className="slider">
        <Carousel.Item>
          <img className="d-block w-100 full zoom" src="/aboutimages/Company.jpg" alt="Slide 1" />
          <div className='container'>
            <div className="carousel-caption caption-left">

              <h1 className='linedown'>ABOUT <br></br> COMPANY

              </h1>
              <p className='linedown'>We have been delivering nutritious and delicious
                <br></br> cooking oils to the consumers.</p>

            </div>
          </div>

        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Aboutslider;