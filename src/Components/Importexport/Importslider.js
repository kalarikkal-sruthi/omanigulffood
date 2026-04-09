import React, { useState } from 'react';
import { Carousel, Container } from 'react-bootstrap';
import '../About.css'

function Importslider() {
    return (
        <div> <Carousel className="sliderimport">
            <Carousel.Item>
                <img className="d-block w-100 full zoom" src="/import/import.jpg" alt="Slide 1" />
                <div className='container'>
                    <div className="carousel-caption caption-left">

                        <h1 className='linedown'>IMPORT & <br></br>EXPORT

                        </h1>
                        {/* <p className='linedown'>We have been delivering nutritious and delicious
                            <br></br> cooking oils to the consumers.</p> */}

                    </div>
                </div>

            </Carousel.Item>
            {/* <Carousel.Item>
        <img className="d-block w-100" src="slide2.jpg" alt="Slide 2" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src="slide3.jpg" alt="Slide 3" />
      </Carousel.Item> */}
        </Carousel></div>
    )
}

export default Importslider