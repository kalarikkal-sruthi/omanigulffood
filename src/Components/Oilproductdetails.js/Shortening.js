



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

function Shortening() {

    const ref = useRef();
    const [isVisible, setIsVisible] = useState(false);
    const [showButton, setShowButton] = useState(false);


    const [selectedSize, setSelectedSize] = useState('20Kg');
    const [selectedZain, setSelectedZain] = useState('Z-20Kg');






    const handleSizeChange = (size) => {
        setSelectedSize(size);
    };
    const handleSizeChangeZain = (sizez) => {
        setSelectedZain(sizez);
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
                    <img className="d-block w-100 full zoom" src="/oilproduct-details/SHORTENING/BANNER/Shortening-Banner.jpg" alt="Slide 1" />
                    <div className='container'>
                        <div className="carousel-caption caption-left">

                            <h1 className='linedown' >SHORTENING
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
                                            <img src="/oilproduct-details/SHORTENING/LOGO/Logo  Al-Safa.png" alt="Slide 1" />
                                            <h1>SHORTENING</h1>

                                            <h6>Ingredients :</h6>
                                            <h6>Refined Palm Olein and its fractions, Antioxidant (E319)




                                            </h6>

                                            <br></br>
                                            <img className="detail-view" src="/oilproduct-details/SHORTENING/TABLE/Shortening Nutritional Table.jpg" alt="Slide 1" />
                                        </div>
                                        <div style={{ textAlign: "center" }} className="tab-main col-md-6 ">
                                            <Image src={getImageForSize(selectedSize)} alt="" />
                                            <Row className="py-3 px-0" >
                                                <div className="availabletin">
                                                    <span class="availablehead" style={{ fontWeight: 600 }}>Available Sku’s</span>:
                                                    <button onClick={() => handleSizeChange('20Kg')}>20Kg</button>

                                                </div>
                                            </Row>

                                        </div>
                                    </div>
                                </div>
                            </Tab.Pane>
                            <Tab.Pane eventKey="second">
                                <div className="container  py-5">


                                    <div className="row">
                                        <div className="col-md-6 product-details product-details-heading">
                                            <img   src="/oilproduct-details/SHORTENING/LOGO/Logo Zain.png" alt="Slide 1" />
                                            <h1>SHORTENING</h1>

                                            <h6>Ingredients :</h6>
                                            <h6>Refined Palm Olein and its fractions, Antioxidant (E319)




                                            </h6>

                                            <br></br>
                                            <img className="detail-view" src="/oilproduct-details/SHORTENING/TABLE/Shortening Nutritional Table.jpg" alt="Slide 1" />
                                        </div>
                                        <div style={{ textAlign: "center" }} className="tab-main col-md-6 ">
                                            <Image src={getImageForZain(selectedZain)} alt="" />
                                            <Row className="py-3 px-0" >
                                                <div className="availabletin">
                                                    <span class="availablehead" style={{ fontWeight: 600 }}>Available Sku’s</span>:
                                                    <button onClick={() => handleSizeChangeZain('20Kg')}>20Kg</button>

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
                                        
                                    }} src="/oilproduct-details/SHORTENING/LOGO/Logo  Al-Safa.png" alt="Slide 1" />
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item style={{ padding: '10px 5px ' }}>
                                <Nav.Link eventKey="second" style={{ background: "#fff", padding: "0px" }}>

                                    <img style={{
                                        width: '100%',
                                     
                                    }} src="/oilproduct-details/SHORTENING/LOGO/Logo Zain.png" alt="Slide 1" />
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
        case '20Kg':
            return '/oilproduct-details/SHORTENING/PRODUCT IMAGES/AL SAFA PRODUCT IMAGE/Al Safa Shortening 20Kg.jpg';

    }
};
const getImageForZain = (sizez) => {
    switch (sizez) {
        case 'Z-20Kg':
            return '/oilproduct-details/SHORTENING/PRODUCT IMAGES/ZAIN PRODUCT IMAGE/Zain Shortening 20Kg.jpg';

    }
};

export default Shortening