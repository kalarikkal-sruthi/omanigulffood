import React from 'react';
import { Carousel } from "react-bootstrap";
import Footer from '../Includes/Footer';
import Aboutenquiry from '../About/Aboutenquiry';
import Galleryvideo from './Galleryvideo';
import VideoApp from './Galleryvideo';

function Gallery() {
  return (
    <div>
      <Carousel className="sliderimport">
        <Carousel.Item>
          <img className="d-block w-100 full zoom" src="/aboutimages/Company.jpg" alt="Slide 1" />
          <div className='container'>
            <div className="carousel-caption caption-left">

              <h1 className='linedown' > GALLERY

              </h1>
              {/* <p className='linedown' style={{color:"#000"}}>He who has health has hope, and
                <br></br>he who has hope has everything</p> */}

            </div>
          </div>

        </Carousel.Item>
      </Carousel>

      <div className="container my-5">
        <div className="row">
          <div className='col-md-12'>
            <Galleryvideo />
          </div>

        </div>













      </div>
      <Aboutenquiry />
      <Footer />
    </div >
  )
}

export default Gallery