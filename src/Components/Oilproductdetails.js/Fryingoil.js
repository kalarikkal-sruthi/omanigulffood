import { BiArrowToTop } from "react-icons/bi";
import React, { useRef, useEffect, useState } from 'react';
import Topbar from '../Includes/Topbar'
import Aboutcompany from '../About/Aboutcompany'
import Aboutenquiry from '../About/Aboutenquiry'
import { Tab, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import { Button, Col, Row, Container, Carousel } from 'react-bootstrap'
import { Image } from 'react-bootstrap';
import Footer from "../Includes/Footer";

function Fryingoil() {

    const ref = useRef();
    const [isVisible, setIsVisible] = useState(false);
    const [showButton, setShowButton] = useState(false);


    const [selectedSize, setSelectedSize] = useState('17L');






    const handleSizeChange = (size) => {
        setSelectedSize(size);
    };



    const handleScroll = () => {
        if (window.pageYOffset > 100) {
            setShowButton(true);
        } else {

            setShowButton(false);
        }
    };


    const handleButtonClick = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    window.addEventListener('scroll', handleScroll);
    return (
        <div>
            <Topbar />
            <Carousel className="sliderimport">
                <Carousel.Item>
                    <img className="d-block w-100 full zoom" src="/oilproduct-details/FRYING OIL/BANNER/Frying-Oil-Banner.jpg" alt="Slide 1" />
                    <div className='container'>
                        <div className="carousel-caption caption-left">

                            <h1 className='linedown' style={{color:'black'}} >FRYING OIL
                            </h1>


                        </div>
                    </div>

                </Carousel.Item>
            </Carousel>







            <Tab.Container defaultActiveKey="first">

                <Row>
                    <Col sm={12}>
                        <Tab.Content>

                            <Tab.Pane eventKey="first">
                                <div className="container  py-5">


                                    <div className="row">
                                        <div className="col-md-6 product-details product-details-heading">
                                            <img style={{
                                       
                                        border: '1px solid #f2f2f2',
                                        borderRadius: '30px'
                                    }}  src="/oilproduct-details/FRYING OIL/LOGO/Logo Super Fry.png" alt="Slide 1" />
                                            <h1 >FRYING OIL</h1>

                                            <h6>Ingredients :</h6>
                                            <h6>D.F Olein (80%), Refined Sunflower Oil (20%),
                                                Emulsifier (E471), Antioxidant (E321),
                                                Antifoaming Agent (E900),<br></br>
                                                Vitamin A&D.




                                            </h6>

                                            <br></br>
                                            <img className="detail-view" src="/oilproduct-details/FRYING OIL/TABLE/Frying Oil Table.jpg" alt="Slide 1" />
                                        </div>
                                        <div style={{ textAlign: "center" }} className="tab-main col-md-6 ">
                                            <Image src={getImageForSize(selectedSize)} alt="" />
                                            <Row className="py-3 px-0" >
                                                <div className="availabletin">
                                                    <span class="availablehead" style={{ fontWeight: 600 }}>Available Sku’s</span>:
                                                    <button onClick={() => handleSizeChange('17L')}>17L</button>

                                                </div>
                                            </Row>

                                        </div>
                                    </div>
                                </div>
                            </Tab.Pane>





                        </Tab.Content>
                    </Col>
                </Row>

                <Row>
                    <Col sm={12}>

                        <Nav style={{ padding: '0px' }} variant="pills" className="d-flex justify-content-center">


                            <Nav.Item style={{ padding: '10px 5px ' }}>
                                <Nav.Link eventKey="first" style={{ background: "#fff", padding: "0px" }}>

                                    <img style={{
                                        width: '100%',
                                        border: '1px solid #f2f2f2',
                                        borderRadius: '30px'
                                    }} src="/oilproduct-details/FRYING OIL/LOGO/Logo Super Fry.png" alt="Slide 1" />
                                </Nav.Link>
                            </Nav.Item>



                        </Nav>

                    </Col>
                </Row>
            </Tab.Container >

            < Aboutenquiry />
            <Footer />



            {
                showButton && (
                    <button className="scroll-top-button" onClick={handleButtonClick}>

                        <BiArrowToTop />
                    </button>
                )
            }

        </div>
    )
}

<>
    <h1>Super Fry</h1>
    <span style={{ fontWeight: '600', marginRight: '10px', }}>Available Sku’s </span>
</>



const getImageForSize = (size) => {
    switch (size) {
        case '17L':
            return '/oilproduct-details/FRYING OIL/SUPER FRY PRODUCT IMAGES/Super Fry Frying Oil 17L.jpg';

    }
};














export default Fryingoil