

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

function Cookingoil() {
    const ref = useRef();
    const [isVisible, setIsVisible] = useState(false);
    const [showButton, setShowButton] = useState(false);



    const [selectedSize, setSelectedSize] = useState('750ML');
    const [selectednoof, setSelectednoof] = useState('N-750ML');
    const [selectedzain, setSelectedzain] = useState('Z-1.8L');
    const [selectedalmanal, setSelectedalmanal] = useState('A-750ML');
    const [selectedshifa, setSelectedshifa] = useState('S-1.8L');



    const [selectedsalalah, setSelectedsalalah] = useState('SA-1.5L');



    const [selectedalbarkat, setSelectedalbarkat] = useState('AL-750ML');
    const [selectedsultanah, setSelectedsultanah] = useState('SL-1.8L');

    const [selectedasaadah, setSelectedasaadah] = useState('AS-750ML');
    const [selectedluliya, setSelectedluliya] = useState('LU-1.5L');

    const handleSizeChange = (size) => {
        setSelectedSize(size);
    };
    const handleSizeChangenoof = (sizen) => {
        setSelectednoof(sizen);
    };
    const handleSizeChangezain = (sizez) => {
        setSelectedzain(sizez);
    };
    const handleSizeChangealmanal = (sizea) => {
        setSelectedalmanal(sizea);
    };
    const handleSizeChangeshifa = (sizes) => {
        setSelectedshifa(sizes);
    };
    const handleSizeChangesalalah = (sizesalalah) => {
        setSelectedsalalah(sizesalalah);
    };
    const handleSizeChangealbarkat = (sizeal) => {
        setSelectedalbarkat(sizeal);
    };
    const handleSizeChangesultanah = (sizesl) => {
        setSelectedsultanah(sizesl);
    };

    const handleSizeChangeasaadah = (sizeas) => {
        setSelectedasaadah(sizeas);
    };

    const handleSizeChangeluliya = (sizelu) => {
        setSelectedluliya(sizelu);
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
                    <img className="d-block w-100 full zoom" src="/oilproduct-details/COOKING OIL/BANNER/Cooking-Oil-Banner.jpg" alt="Slide 1" />
                    <div className='container'>
                        <div className="carousel-caption caption-left" style={{ color: "#000" }}>

                            <h1 style={{ color: "#000" }} className='linedown' >COOKING OIL

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
                                            }} src="/oilproduct-details/COOKING OIL/LOGO/Sunlife Logo.png" alt="Slide 1" />
                                            <h1>COOKING OIL<br></br></h1>

                                            <h6>Ingredients :

                                                D.F Olein (70%), Refined Sunflower Oil (30%),
                                                Antioxidant (E319), <br></br> Vitamin A&D.


                                            </h6>
                                            <br></br>
                                            <img className="detail-view" src="/oilproduct-details/COOKING OIL/TABLE/Cooking Table.jpg" alt="Slide 1" />
                                        </div>
                                        <div style={{ textAlign: "center" }} className="tab-main col-md-6 ">

                                            <Image src={getImageForSize(selectedSize)} alt="" />



                                            <Row className="py-3 px-0" >
                                                <div className="availabletin">
                                                    <span class="availablehead" style={{ fontWeight: 600 }}>Available Sku’s</span>:
                                                    <button onClick={() => handleSizeChange('750ML')}>750ML</button>
                                                    <button onClick={() => handleSizeChange('1L')}>1L</button>
                                                    <button onClick={() => handleSizeChange('1.5L')}>1.5L</button>
                                                    <button onClick={() => handleSizeChange('1.8L')}>1.8L</button>
                                                    {/* <button onClick={() => handleSizeChange('3L')}>3L</button> */}
                                                    <button onClick={() => handleSizeChange('4L')}>4L</button>
                                                    <button onClick={() => handleSizeChange('5L')}>5L</button>
                                                    <button onClick={() => handleSizeChange('20L')}>20L</button>
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
                                            <img style={{
                                                border: '1px solid #f2f2f2',
                                                borderRadius: '30px'
                                            }} src="/oilproduct-details/COOKING OIL/LOGO/Sahi Logo.png" alt="Slide 1" />
                                            <h1>COOKING OIL<br></br></h1>

                                            <h6>Ingredients :

                                                D.F Olein (70%), Refined Sunflower Oil (30%),
                                                Antioxidant (E319), <br></br> Vitamin A&D.


                                            </h6>
                                            <br></br>
                                            <img className="detail-view" src="/oilproduct-details/COOKING OIL/TABLE/Cooking Table.jpg" alt="Slide 1" />
                                        </div>
                                        <div style={{ textAlign: "center" }} className="tab-main col-md-6 ">
                                            <Image src={getImageForNoof(selectednoof)} />
                                            <Row className="py-3 px-0" >
                                                <div className="availabletin">


                                                    <span style={{ fontWeight: 600 }}>Available Sku’s</span>:
                                                    <button onClick={() => handleSizeChangenoof('N-750ML')}>750ML</button>
                                                    <button onClick={() => handleSizeChangenoof('N-1.5L')}>1.5L</button>
                                                    <button onClick={() => handleSizeChangenoof('N-1.8L')}>1.8L</button>
                                                    <button onClick={() => handleSizeChangenoof('N-5L')}>5L</button>


                                                </div>
                                            </Row>

                                        </div>
                                    </div>
                                </div>
                            </Tab.Pane>



                            <Tab.Pane eventKey="third">
                                <div className="container  py-5">
                                    <div className="row">
                                        <div className="col-md-6 product-details product-details-heading">
                                            <img style={{
                                                border: '1px solid #f2f2f2',
                                                borderRadius: '30px'
                                            }} src="/oilproduct-details/COOKING OIL/LOGO/Logo  Diyah.png" alt="Slide 1" />
                                            <h1>COOKING OIL<br></br></h1>

                                            <h6>Ingredients :

                                                D.F Olein (70%), Refined Sunflower Oil (30%),
                                                Antioxidant (E319), <br></br> Vitamin A&D.


                                            </h6>
                                            <br></br>
                                            <img className="detail-view" src="/oilproduct-details/COOKING OIL/TABLE/Cooking Table.jpg" alt="Slide 1" />
                                        </div>
                                        <div style={{ textAlign: "center" }} className="tab-main col-md-6 ">
                                            <Image src={getImageForZain(selectedzain)} />
                                            <Row className="py-3 px-0" >
                                                <div className="availabletin">

                                                    <span style={{ fontWeight: 600 }}>Available Sku’s</span>:
                                                    <button onClick={() => handleSizeChangezain('Z-1.8L')}>1.8L</button>
                                                    <button onClick={() => handleSizeChangezain('Z-5L')}>5L</button>


                                                </div>
                                            </Row>

                                        </div>
                                    </div>
                                </div>
                            </Tab.Pane>



                            <Tab.Pane eventKey="fourth">
                                <div className="container  py-5">
                                    <div className="row">
                                        <div className="col-md-6 product-details product-details-heading">
                                            <img style={{
                                                border: '1px solid #f2f2f2',
                                                borderRadius: '30px'
                                            }} src="/oilproduct-details/COOKING OIL/LOGO/Logo  No 1.png" alt="Slide 1" />
                                            <h1>COOKING OIL<br></br></h1>

                                            <h6>Ingredients :

                                                D.F Olein (70%), Refined Sunflower Oil (30%),
                                                Antioxidant (E319), <br></br> Vitamin A&D.


                                            </h6>
                                            <br></br>
                                            <img className="detail-view" src="/oilproduct-details/COOKING OIL/TABLE/Cooking Table.jpg" alt="Slide 1" />
                                        </div>



                                        <div style={{ textAlign: "center" }} className="tab-main col-md-6 ">
                                            <Image src={getImageForAlmanal(selectedalmanal)} />
                                            <Row className="py-3 px-0" >
                                                <div className="availabletin">

                                                    <span style={{ fontWeight: 600 }}>Available Sku’s</span>:
                                                    <button onClick={() => handleSizeChangealmanal('A-750ML')}>750ML</button>
                                                    <button onClick={() => handleSizeChangealmanal('A-1.5L')}>1.5L</button>
                                                    <button onClick={() => handleSizeChangealmanal('A-1.8L')}>1.8L</button>



                                                </div>
                                            </Row>
                                        </div>
                                    </div>
                                </div>
                            </Tab.Pane>



                            <Tab.Pane eventKey="five">

                                <div className="container  py-5">
                                    <div className="row">
                                        <div className="col-md-6 product-details product-details-heading">
                                            <img style={{
                                                border: '1px solid #f2f2f2',
                                                borderRadius: '30px'
                                            }} src="/oilproduct-details/COOKING OIL/LOGO/Logo  Salalah.png" alt="Slide 1" />
                                            <h1>COOKING OIL<br></br></h1>

                                            <h6>Ingredients :

                                                D.F Olein (70%), Refined Sunflower Oil (30%),
                                                Antioxidant (E319), <br></br> Vitamin A&D.


                                            </h6>
                                            <br></br>
                                            <img className="detail-view" src="/oilproduct-details/COOKING OIL/TABLE/Cooking Table.jpg" alt="Slide 1" />
                                        </div>
                                        <div style={{ textAlign: "center" }} className="tab-main col-md-6 ">
                                            <Image src={getImageForShifa(selectedshifa)} />
                                            <Row className="py-3 px-0" >
                                                <div className="availabletin">

                                                    <span style={{ fontWeight: 600 }}>Available Sku’s</span>:
                                                    <button onClick={() => handleSizeChangeshifa('S-1.8L')}>1.8L</button>
                                                    <button onClick={() => handleSizeChangeshifa('S-5L')}>5L</button>

                                                </div>
                                            </Row>
                                        </div>
                                    </div>
                                </div>
                            </Tab.Pane>



                            <Tab.Pane eventKey="six">

                                <div className="container  py-5">
                                    <div className="row">
                                        <div className="col-md-6 product-details product-details-heading">
                                            <img style={{
                                                border: '1px solid #f2f2f2',
                                                borderRadius: '30px'
                                            }} src="/oilproduct-details/COOKING OIL/LOGO/Logo  Zeenath.png" alt="Slide 1" />
                                            <h1>COOKING OIL<br></br></h1>

                                            <h6>Ingredients :

                                                D.F Olein (70%), Refined Sunflower Oil (30%),
                                                Antioxidant (E319), <br></br> Vitamin A&D.


                                            </h6>
                                            <br></br>
                                            <img className="detail-view" src="/oilproduct-details/COOKING OIL/TABLE/Cooking Table.jpg" alt="Slide 1" />
                                        </div>
                                        <div style={{ textAlign: "center" }} className="tab-main col-md-6 ">
                                            <Image src={getImageForSalalah(selectedsalalah)} />
                                            <Row className="py-3 px-0" >
                                                <div className="availabletin">
                                                    <span style={{ fontWeight: 600 }}>Available Sku’s</span>:
                                                    <button onClick={() => handleSizeChangesalalah('SA-1.5L')}>1.5L</button>
                                                    <button onClick={() => handleSizeChangesalalah('SA-1.8L')}>1.8L</button>



                                                </div>
                                            </Row>
                                        </div>
                                    </div>
                                </div>





                            </Tab.Pane>
                            <Tab.Pane eventKey="seven">

                                <div className="container  py-5">
                                    <div className="row">
                                        <div className="col-md-6 product-details product-details-heading">
                                            <img style={{
                                                border: '1px solid #f2f2f2',
                                                borderRadius: '30px'
                                            }} src="/oilproduct-details/COOKING OIL/LOGO/Logo  Sultanah.png" alt="Slide 1" />
                                            <h1>COOKING OIL<br></br></h1>

                                            <h6>Ingredients :

                                                D.F Olein (85%), Refined Sunflower Oil (15%),
                                                Antioxidant (E319), <br></br> Vitamin A&D.


                                            </h6>
                                            <br></br>
                                            <img className="detail-view" src="/oilproduct-details/COOKING OIL/TABLE/Cooking Table.jpg" alt="Slide 1" />
                                        </div>
                                        <div style={{ textAlign: "center" }} className="tab-main col-md-6 ">
                                            <Image src={getImageForAlbarkat(selectedalbarkat)} />
                                            <Row className="py-3 px-0">
                                                <div className="availabletin">


                                                    <span style={{ fontWeight: 600 }}>Available Sku’s</span>:
                                                    <button onClick={() => handleSizeChangealbarkat('AL-750ML')}>750ML</button>
                                                    <button onClick={() => handleSizeChangealbarkat('AL-1.5L')}>1.5L</button>
                                                    <button onClick={() => handleSizeChangealbarkat('AL-1.7L')}>1.7L</button>
                                                    <button onClick={() => handleSizeChangealbarkat('AL-1.8L')}>1.8L</button>

                                                    <button onClick={() => handleSizeChangealbarkat('AL-4L')}>4L</button>



                                                </div>
                                            </Row>
                                        </div>
                                    </div>
                                </div>

                            </Tab.Pane>




                            <Tab.Pane eventKey="eight">

                                <div className="container  py-5">
                                    <div className="row">
                                        <div className="col-md-6 product-details product-details-heading">
                                            <img style={{
                                                border: '1px solid #f2f2f2',
                                                borderRadius: '30px'
                                            }} src="/oilproduct-details/COOKING OIL/LOGO/Logo Al-Barakat.png" alt="Slide 1" />
                                            <h1>COOKING OIL<br></br></h1>

                                            <h6>Ingredients :

                                                D.F Olein (85%), Refined Sunflower Oil (15%),
                                                Antioxidant (E319), <br></br> Vitamin A&D.


                                            </h6>
                                            <br></br>
                                            <img className="detail-view" src="/oilproduct-details/COOKING OIL/TABLE/Cooking Table.jpg" alt="Slide 1" />
                                        </div>
                                        <div style={{ textAlign: "center" }} className="tab-main col-md-6 ">
                                            <Image src={getImageForSultanah(selectedsultanah)} />
                                            <Row className="py-3 px-0">
                                                <div className="availabletin">

                                                    <span style={{ fontWeight: 600 }}>Available Sku’s</span>:

                                                    <button onClick={() => handleSizeChangesultanah('SL-750ML')}>750ML</button>
                                                    <button onClick={() => handleSizeChangesultanah('SL-1.5L')}>1.5L</button>
                                                    <button onClick={() => handleSizeChangesultanah('SL-1.8L')}>1.8L</button>
                                                    <button onClick={() => handleSizeChangesultanah('SL-4L')}>4L</button>

                                                    <button onClick={() => handleSizeChangesultanah('SL-5L')}>5L</button>





                                                </div>
                                            </Row>
                                        </div>
                                    </div>
                                </div>

                            </Tab.Pane>
                            <Tab.Pane eventKey="nine">

                                <div className="container  py-5">
                                    <div className="row">
                                        <div className="col-md-6 product-details product-details-heading">
                                            <img style={{
                                                border: '1px solid #f2f2f2',
                                                borderRadius: '30px'
                                            }} src="/oilproduct-details/COOKING OIL/LOGO/Logo  Dana.png" alt="Slide 1" />
                                            <h1>COOKING OIL<br></br></h1>

                                            <h6>Ingredients :

                                                D.F Olein (85%), Refined Sunflower Oil (15%),
                                                Antioxidant (E319), <br></br> Vitamin A&D.


                                            </h6>
                                            <br></br>
                                            <img className="detail-view" src="/oilproduct-details/COOKING OIL/TABLE/Cooking Table.jpg" alt="Slide 1" />
                                        </div>
                                        <div style={{ textAlign: "center" }} className="tab-main col-md-6 ">
                                            <Image src={getImageForASaadah(selectedasaadah)} />
                                            <Row className="py-3 px-0">
                                                <div className="availabletin">

                                                    <span style={{ fontWeight: 600 }}>Available Sku’s</span>:
                                                    <button onClick={() => handleSizeChangeasaadah('AS-750ML')}>750ML</button>
                                                    <button onClick={() => handleSizeChangeasaadah('AS-1.5L')}>1.5L</button>
                                                    <button onClick={() => handleSizeChangeasaadah('AS-1.8L')}>1.8L</button>






                                                </div>
                                            </Row>
                                        </div>
                                    </div>
                                </div>

                            </Tab.Pane>
                            <Tab.Pane eventKey="ten">
                                <div className="container  py-5">
                                    <div className="row">
                                        <div className="col-md-6 product-details product-details-heading">
                                            <img style={{
                                                border: '1px solid #f2f2f2',
                                                borderRadius: '30px'
                                            }} src="/oilproduct-details/COOKING OIL/LOGO/Logo  Luliya.png" alt="Slide 1" />
                                            <h1>COOKING OIL<br></br></h1>

                                            <h6>Ingredients :

                                                D.F Olein (85%), Refined Sunflower Oil (15%),
                                                Antioxidant (E319), <br></br> Vitamin A&D.


                                            </h6>
                                            <br></br>
                                            <img className="detail-view" src="/oilproduct-details/COOKING OIL/TABLE/Cooking Table.jpg" alt="Slide 1" />
                                        </div>
                                        <div style={{ textAlign: "center" }} className="tab-main col-md-6 ">
                                            <Image src={getImageForLuliya(selectedluliya)} />
                                            <Row className="py-3 px-0">
                                                <div className="availabletin">

                                                    <span style={{ fontWeight: 600 }}>Available Sku’s</span>:
                                                    <button onClick={() => handleSizeChangeluliya('LU-1.5L')}>1.5L</button>






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
                                    }} src="/oilproduct-details/COOKING OIL/LOGO/Sunlife Logo.png" alt="Slide 1" />
                                </Nav.Link>
                            </Nav.Item>


                            <Nav.Item style={{ padding: '10px 5px' }}>
                                <Nav.Link eventKey="second" style={{ background: "#fff", padding: "0px" }}>
                                    <img style={{
                                        width: '100%',
                                        border: '1px solid #f2f2f2',
                                        borderRadius: '30px'
                                    }} src="/oilproduct-details/COOKING OIL/LOGO/Sahi Logo.png" alt="Slide 1" />
                                </Nav.Link>
                            </Nav.Item>


                            <Nav.Item style={{ padding: '10px 5px' }}>
                                <Nav.Link eventKey="third" style={{ background: "#fff", padding: "0px" }}>
                                    <img style={{
                                        width: '100%',
                                        border: '1px solid #f2f2f2',
                                        borderRadius: '30px'
                                    }} src="/oilproduct-details/COOKING OIL/LOGO/Logo  Diyah.png" alt="Slide 1" />
                                </Nav.Link>
                            </Nav.Item>

                            <Nav.Item style={{ padding: '10px 5px' }}>
                                <Nav.Link eventKey="fourth" style={{ background: "#fff", padding: "0px" }}>

                                    <img style={{
                                        width: '100%',
                                        border: '1px solid #f2f2f2',
                                        borderRadius: '30px'
                                    }} src="/oilproduct-details/COOKING OIL/LOGO/Logo  No 1.png" alt="Slide 1" />
                                </Nav.Link>
                            </Nav.Item>

                            <Nav.Item style={{ padding: '10px 5px' }}>
                                <Nav.Link eventKey="five" style={{ background: "#fff", padding: "0px" }}>
                                    <img src="/oilproduct-details/COOKING OIL/LOGO/Logo  Salalah.png" alt="Slide 1" />

                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item style={{ padding: '10px 5px' }}>
                                <Nav.Link eventKey="six" style={{ background: "#fff", padding: "0px" }}>
                                    <img style={{
                                        width: '100%',
                                        border: '1px solid #f2f2f2',
                                        borderRadius: '30px'
                                    }} src="/oilproduct-details/COOKING OIL/LOGO/Logo  Zeenath.png" alt="Slide 1" />

                                </Nav.Link>
                            </Nav.Item>

                            <Nav.Item style={{ padding: '10px 5px' }}>
                                <Nav.Link eventKey="seven" style={{ background: "#fff", padding: "0px" }}>

                                    <img src="/oilproduct-details/COOKING OIL/LOGO/Logo  Sultanah.png" alt="Slide 1" />
                                </Nav.Link>
                            </Nav.Item>











                            <Nav.Item style={{ padding: '10px 5px' }}>
                                <Nav.Link eventKey="eight" style={{ background: "#fff", padding: "0px" }}>

                                    <img src="/oilproduct-details/COOKING OIL/LOGO/Logo Al-Barakat.png" alt="Slide 1" />
                                </Nav.Link>
                            </Nav.Item>






                            <Nav.Item style={{ padding: '10px 5px' }}>
                                <Nav.Link eventKey="nine" style={{ background: "#fff", padding: "0px" }}>

                                    <img style={{
                                        width: '100%',
                                        border: '1px solid #f2f2f2',
                                        borderRadius: '30px'
                                    }} src="/oilproduct-details/COOKING OIL/LOGO/Logo  Dana.png" alt="Slide 1" />
                                </Nav.Link>
                            </Nav.Item>







                            <Nav.Item style={{ padding: '10px 5px' }}>
                                <Nav.Link eventKey="ten" style={{ background: "#fff", padding: "0px" }}>

                                    <img src="/oilproduct-details/COOKING OIL/LOGO/Logo  Luliya.png" alt="Slide 1" />
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
    <span style={{ fontWeight: '600', marginRight: '10px', }}>Available Sku’s </span>
</>
const getImageForSize = (size) => {
    switch (size) {
        case '750ML':
            return '/oilproduct-details/COOKING OIL/PRODUCT IMAGES/SUNLIFE/Sunlife Cooking oil 750ml.jpg';
        case '1L':
            return '/oilproduct-details/COOKING OIL/PRODUCT IMAGES/SUNLIFE/Sunlife Cooking oil 1L.jpg';
        case '1.5L':
            return '/oilproduct-details/COOKING OIL/PRODUCT IMAGES/SUNLIFE/Sunlife Cooking oil 1p5L.jpg';

        case '1.8L':
            return '/oilproduct-details/COOKING OIL/PRODUCT IMAGES/SUNLIFE/Sunlife Cooking oil 1p8L.jpg';


        // case '3L':
        // return '/oilproduct-details/COOKING OIL/PRODUCT IMAGES/SUNLIFE/Sunlife Cooking oil 1p8L.jpg';
        case '4L':
            return '/oilproduct-details/COOKING OIL/PRODUCT IMAGES/SUNLIFE/Sunlife Cooking oil 4L.jpg';
        case '5L':
            return '/oilproduct-details/COOKING OIL/PRODUCT IMAGES/SUNLIFE/Sunlife Cooking oil 5L.jpg';


        case '20L':
            return '/oilproduct-details/COOKING OIL/PRODUCT IMAGES/SUNLIFE/Sunlife Cooking oil 20L.jpg';

    }
};



const getImageForNoof = (sizen) => {
    switch (sizen) {

        case 'N-750ML':
            return '/oilproduct-details/COOKING OIL/PRODUCT IMAGES/SAHI/Sahi Cooking oil 750ml.jpg';
        case 'N-1.5L':
            return '/oilproduct-details/COOKING OIL/PRODUCT IMAGES/SAHI/Sahi Cooking oil 1p5L.jpg';

        case 'N-1.8L':
            return '/oilproduct-details/COOKING OIL/PRODUCT IMAGES/SAHI/Sahi Cooking oil 1p8L.jpg';
        case 'N-5L':
            return '/oilproduct-details/COOKING OIL/PRODUCT IMAGES/SAHI/Sahi Cooking oil 5L.jpg';



    }
};



const getImageForZain = (sizez) => {
    switch (sizez) {
        case 'Z-1.8L':
            return '/oilproduct-details/COOKING OIL/PRODUCT IMAGES/DIYAH/Diyah Cooking Oil 1p8L.jpg';
        case 'Z-5L':
            return '/oilproduct-details/COOKING OIL/PRODUCT IMAGES/DIYAH/Diyah Cooking Oil 5L.jpg';

    }
};





const getImageForAlmanal = (sizeal) => {
    switch (sizeal) {


        case 'A-750ML':
            return '/oilproduct-details/COOKING OIL/PRODUCT IMAGES/NO 1/No 1 Cooking Oil 750ml.jpg';
        case 'A-1.5L':
            return '/oilproduct-details/COOKING OIL/PRODUCT IMAGES/NO 1/No 1 Cooking Oil 1p5L.jpg';

        case 'A-1.8L':
            return '/oilproduct-details/COOKING OIL/PRODUCT IMAGES/NO 1/No 1 Cooking Oil 1p8L.jpg';

    }
};





const getImageForShifa = (sizes) => {
    switch (sizes) {

        case 'S-1.8L':
            return '/oilproduct-details/COOKING OIL/PRODUCT IMAGES/SALALAH/Salalah Cooking Oil 1p8L.jpg';
        case 'S-5L':
            return '/oilproduct-details/COOKING OIL/PRODUCT IMAGES/SALALAH/Salalah Cooking Oil 5L.jpg';


    }
};



const getImageForSalalah = (sizesalalah) => {
    switch (sizesalalah) {
        case 'SA-1.5L':
            return '/oilproduct-details/COOKING OIL/PRODUCT IMAGES/ZEENATH/Zeenath Cooking Oil 1p5L.jpg';
        case 'SA-1.8L':
            return '/oilproduct-details/COOKING OIL/PRODUCT IMAGES/ZEENATH/Zeenath Cooking Oil 1p8L.jpg';


    }
};




const getImageForAlbarkat = (sizeal) => {
    switch (sizeal) {

        case 'AL-750ML':
            return '/oilproduct-details/COOKING OIL/PRODUCT IMAGES/SULTANAH/Sultanah Cooking Oil 750ml.jpg';
        case 'AL-1.5L':
            return '/oilproduct-details/COOKING OIL/PRODUCT IMAGES/SULTANAH/Sultanah Cooking Oil 1p5L.jpg';
        case 'AL-1.7L':
            return '/oilproduct-details/COOKING OIL/PRODUCT IMAGES/SULTANAH/Sultanah Cooking Oil 1p7L.jpg';
        case 'AL-1.8L':
            return '/oilproduct-details/COOKING OIL/PRODUCT IMAGES/SULTANAH/Sultanah Cooking Oil 1p8L.jpg';
        case 'AL-4L':
            return '/oilproduct-details/COOKING OIL/PRODUCT IMAGES/SULTANAH/Sultanah Cooking Oil 4L.jpg';


    }
};







const getImageForSultanah = (sizesl) => {



    switch (sizesl) {

        case 'SL-750ML':
            return '/oilproduct-details/COOKING OIL/PRODUCT IMAGES/AL BARAKAT/Al Barakat Cooking Oil 750ml.jpg';
        case 'SL-1.5L':
            return '/oilproduct-details/COOKING OIL/PRODUCT IMAGES/AL BARAKAT/Al Barakat Cooking Oil 1p5L.jpg';
        case 'SL-1.8L':
            return '/oilproduct-details/COOKING OIL/PRODUCT IMAGES/AL BARAKAT/Al Barakat Cooking Oil 1p8L.jpg';
        case 'SL-4L':
            return '/oilproduct-details/COOKING OIL/PRODUCT IMAGES/AL BARAKAT/Al Barakat Cooking Oil 4L.jpg';
        case 'SL-5L':
            return '/oilproduct-details/COOKING OIL/PRODUCT IMAGES/AL BARAKAT/Al Barakat Cooking Oil 5L.jpg';


    }
};



const getImageForASaadah = (sizeas) => {



    switch (sizeas) {
        case 'AS-750ML':
            return '/oilproduct-details/COOKING OIL/PRODUCT IMAGES/DANA/Dana Cooking Oil 750ml.jpg';
        case 'AS-1.5L':
            return '/oilproduct-details/COOKING OIL/PRODUCT IMAGES/DANA/Dana Cooking Oil 1p5L.jpg';
        case 'AS-1.8L':
            return '/oilproduct-details/COOKING OIL/PRODUCT IMAGES/DANA/Dana Cooking Oil 1p8L.jpg';



    }
};
const getImageForLuliya = (sizelu) => {



    switch (sizelu) {
        case 'LU-1.5L':
            return '/oilproduct-details/COOKING OIL/PRODUCT IMAGES/LULIYA/Luliya Cooking Oil 1p5L.jpg';


    }
};



export default Cookingoil