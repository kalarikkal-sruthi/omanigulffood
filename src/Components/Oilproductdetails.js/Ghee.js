


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

function Ghee() {

    const ref = useRef();
    const [isVisible, setIsVisible] = useState(false);
    const [showButton, setShowButton] = useState(false);


    const [selectedSize, setSelectedSize] = useState('1Kg');






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
                    <img className="d-block w-100 full zoom" src="/oilproduct-details/GHEE/BANNER/Ghee-Banner.jpg" alt="Slide 1" />
                    <div className='container'>
                        <div className="carousel-caption caption-left">

                            <h1 className='linedown' >GHEE
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
                                    }}  src="/oilproduct-details/GHEE/LOGO/Logo  A'Safwah.png" alt="Slide 1" />
                                            <h1>GHEE</h1>

                                            <h6>Ingredients :</h6>
                                            <h6>Palmoil and it's fractions,<br></br>
Ghee Flavour, Colour (Beta Carotene-E160A),<br></br>
Antioxidant (E319/E321).
                                            </h6>

                                            
                                            <img className="detail-view" src="/oilproduct-details/GHEE/TABLE/Ghee Table.jpg" alt="Slide 1" />
                                        </div>
                                        <div style={{ textAlign: "center" }} className="tab-main col-md-6 ">
                                            <Image src={getImageForSize(selectedSize)} alt="" />
                                            <Row className="py-3 px-0" >
                                                <div className="availabletin">
                                                    <span class="availablehead" style={{ fontWeight: 600 }}>Available Sku’s</span>:
                                                 
                                                    <button onClick={() => handleSizeChange('1Kg')}>1Kg</button>
                                                    <button onClick={() => handleSizeChange('2Kg')}>2Kg</button>
                                                    <button onClick={() => handleSizeChange('4Kg')}>4Kg</button>
                                                    <button onClick={() => handleSizeChange('16Kg')}>16Kg</button>

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
                                    }} src="/oilproduct-details/GHEE/LOGO/Logo  A'Safwah.png" alt="Slide 1" />
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
       
        case '1Kg':
            return '/oilproduct-details/GHEE/ASAFWAH PRODUCT IMAGES/ASafwah Ghee 1Kg.jpg';

            case '2Kg':
                return '/oilproduct-details/GHEE/ASAFWAH PRODUCT IMAGES/ASafwah Ghee 2Kg.jpg';

                case '4Kg':
                    return '/oilproduct-details/GHEE/ASAFWAH PRODUCT IMAGES/ASafwah Ghee 4kg.jpg';

                    case '16Kg':
                        return '/oilproduct-details/GHEE/ASAFWAH PRODUCT IMAGES/ASafwah Ghee 16Kg.jpg';
            
    }
};














export default Ghee