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

function Oilproductdetail() {
    const ref = useRef();
    const [isVisible, setIsVisible] = useState(false);
    const [showButton, setShowButton] = useState(false);



    const [selectedSize, setSelectedSize] = useState('750ML');
    const [selectednoof, setSelectednoof] = useState('N-750ML');
    const [selectedzain, setSelectedzain] = useState('Z-1.5L PET');
    const [selectedalmanal, setSelectedalmanal] = useState('A-1p5L');
    const [selectedshifa, setSelectedshifa] = useState('S-1.5L PET');
    const [selectedsalalah, setSelectedsalalah] = useState('SA-1.5L');
    const [selectedalbarkat, setSelectedalbarkat] = useState('AL-750ML');
    const [selectedsultanah, setSelectedsultanah] = useState('SL-1.8L');

    const [selectedasaadah, setSelectedasaadah] = useState('AS-1.8L');
    const [selectedluliya, setSelectedluliya] = useState('LU-18L Tin');

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
                    <img className="d-block w-100 full zoom" src="/oilproducts/oilslider-slider.jpg" alt="Slide 1" />
                    <div className='container'>
                        <div className="carousel-caption caption-left">

                            <h1 className='linedown' >PALM OLEIN

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
                                            <img src="/oilproduct-details/Logo  Al-Safa.png" alt="Slide 1" />
                                            <h1>PALM OLEIN <br></br>VEGETABLE OIL</h1>

                                            <h6>Ingredients :</h6>
                                            <h6>Refined Palm Olein, Antioxidant(E321), <br></br>
                                                Vitamin A & D
                                            </h6>
                                            <br></br>
                                            <img className="detail-view" src="/oilproduct-details/Palm Olein Table.jpg" alt="Slide 1" />
                                        </div>
                                        <div style={{ textAlign: "center" }} className="tab-main col-md-6 ">

                                            <Image src={getImageForSize(selectedSize)} alt="" />



                                            <Row className="py-3 px-0" >
                                                <div className="availabletin">
                                                    <span class="availablehead" style={{ fontWeight: 600 }}>Available Sku’s</span>:
                                                    <button onClick={() => handleSizeChange('750ML')}>750ML</button>
                                                    <button onClick={() => handleSizeChange('1L')}>1L</button>
                                                    <button onClick={() => handleSizeChange('1.5L PET')}>1.5L PET</button>
                                                    <button onClick={() => handleSizeChange('1.5L HDPE')}>1.5L HDPE</button>
                                                    <button onClick={() => handleSizeChange('1.8L')}>1.8L</button>
                                                    <button onClick={() => handleSizeChange('3L')}>3L</button>
                                                    <button onClick={() => handleSizeChange('4L')}>4L</button>
                                                    <button onClick={() => handleSizeChange('5L')}>5L</button>
                                                    <button onClick={() => handleSizeChange('10L')}>10L</button>
                                                    <button onClick={() => handleSizeChange('18L Tin')}>18L Tin</button>
                                                    <button onClick={() => handleSizeChange('18L Jar')}>18L Jar</button>
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
                                            <img src="/oilproduct-details/Logo  Noof.png" alt="Slide 1" />
                                            <h1>PALM OLEIN <br></br>VEGETABLE OIL</h1>
                                            <h6>Ingredients :</h6>
                                            <h6>Refined Palm Olein,Antioxidant(E321),<br></br>
                                                Vitamin A & D
                                            </h6>
                                            <br></br>
                                            <img className="detail-view" src="/oilproduct-details/Palm Olein Table.jpg" alt="Slide 1" />
                                        </div>
                                        <div style={{ textAlign: "center" }} className="tab-main col-md-6 ">
                                            <Image src={getImageForNoof(selectednoof)} />
                                            <Row className="py-3 px-0" >
                                                <div className="availabletin">


                                                    <span style={{ fontWeight: 600 }}>Available Sku’s</span>:
                                                    <button onClick={() => handleSizeChangenoof('N-750ML')}>750ML</button>

                                                    <button onClick={() => handleSizeChangenoof('N-1.5L PET')}>1.5L PET</button>
                                                    <button onClick={() => handleSizeChangenoof('N-1.5L HDPE')}>1.5L HDPE</button>
                                                    <button onClick={() => handleSizeChangenoof('N-1.7L')}>1.7L</button>
                                                    <button onClick={() => handleSizeChangenoof('N-1.8L')}>1.8L</button>
                                                    <button onClick={() => handleSizeChangenoof('N-3L')}>3L</button>
                                                    <button onClick={() => handleSizeChangenoof('N-4L')}>4L</button>
                                                    <button onClick={() => handleSizeChangenoof('N-5L')}>5L</button>
                                                    <button onClick={() => handleSizeChangenoof('N-17L Tin')}>17L Tin</button>
                                                    <button onClick={() => handleSizeChangenoof('N-18L')}>18L</button>
                                                    <button onClick={() => handleSizeChangenoof('N-20L')}>20L</button>
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
                                            <img src="/oilproduct-details/Logo Zain.png" alt="Slide 1" />
                                            <h1>PALM OLEIN <br></br>VEGETABLE OIL</h1>
                                            <h6>Ingredients :</h6>
                                            <h6>Refined Palm Olein,Antioxidant(E321),<br></br>
                                                Vitamin A & D
                                            </h6>
                                            <br></br>
                                            <img className="detail-view" src="/oilproduct-details/Palm Olein Table.jpg" alt="Slide 1" />
                                        </div>
                                        <div style={{ textAlign: "center" }} className="tab-main col-md-6 ">
                                            <Image src={getImageForZain(selectedzain)} />
                                            <Row className="py-3 px-0" >
                                                <div className="availabletin">

                                                    <span style={{ fontWeight: 600 }}>Available Sku’s</span>:
                                                    <button onClick={() => handleSizeChangezain('Z-1.5L PET')}>1.5L PET</button>
                                                    <button onClick={() => handleSizeChangezain('Z-1.5L HDPE')}>1.5L HDPE</button>

                                                    <button onClick={() => handleSizeChangezain('Z-1.8L')}>1.8L</button>
                                                    <button onClick={() => handleSizeChangezain('Z-3L')}>3L</button>
                                                    <button onClick={() => handleSizeChangezain('Z-17L Tin')}>17L Tin</button>
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
                                            <img src="/oilproduct-details/Logo Al-Manal.png" alt="Slide 1" />
                                            <h1>PALM OLEIN <br></br>VEGETABLE OIL</h1>
                                            <h6>Ingredients :</h6>
                                            <br></br>
                                            <h6>Refined Palm Olein,Antioxidant(E321),<br></br>
                                                Vitamin A & D
                                            </h6>
                                            <img className="detail-view" src="/oilproduct-details/Palm Olein Table.jpg" alt="Slide 1" />
                                        </div>
                                        <div style={{ textAlign: "center" }} className="tab-main col-md-6 ">
                                            <Image src={getImageForAlmanal(selectedalmanal)} />
                                            <Row className="py-3 px-0" >
                                                <div className="availabletin">

                                                    <span style={{ fontWeight: 600 }}>Available Sku’s</span>:
                                                    <button onClick={() => handleSizeChangealmanal('A-1p5L')}>1.5L</button>
                                                    <button onClick={() => handleSizeChangealmanal('A-4L')}>4L</button>
                                                    <button onClick={() => handleSizeChangealmanal('A-8L')}>8L</button>
                                                    <button onClick={() => handleSizeChangealmanal('A-17L')}>17L</button>
                                                    <button onClick={() => handleSizeChangealmanal('A-20L')}>20L</button>


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
                                            <img src="/oilproduct-details/Logo  Shifa.png" alt="Slide 1" />
                                            <h1>PALM OLEIN <br></br>VEGETABLE OIL</h1>
                                            <h6>Ingredients :</h6>
                                            <br></br>
                                            <h6>Refined Palm Olein,Antioxidant(E321),<br></br>
                                                Vitamin A & D
                                            </h6>
                                            <img className="detail-view" src="/oilproduct-details/Palm Olein Table.jpg" alt="Slide 1" />
                                        </div>
                                        <div style={{ textAlign: "center" }} className="tab-main col-md-6 ">
                                            <Image src={getImageForShifa(selectedshifa)} />
                                            <Row className="py-3 px-0" >
                                                <div className="availabletin">
                                                    <span style={{ fontWeight: 600 }}>Available Sku’s</span>:
                                                    <button onClick={() => handleSizeChangeshifa('S-1.5L PET')}>1.5L PET</button>
                                                    <button onClick={() => handleSizeChangeshifa('S-1.8L')}>1.8L</button>
                                                    <button onClick={() => handleSizeChangeshifa('S-3L')}>3L</button>
                                                    <button onClick={() => handleSizeChangeshifa('S-8L')}>8L</button>
                                                    <button onClick={() => handleSizeChangeshifa('S-17L Tin')}>17L Tin</button>
                                                    <button onClick={() => handleSizeChangeshifa('S-18L Tin')}>18L Tin</button>
                                                    <button onClick={() => handleSizeChangeshifa('S-20L')}>20L</button>
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
                                            <img src="/oilproduct-details/Logo  Salalah.png" alt="Slide 1" />
                                            <h1>PALM OLEIN <br></br>VEGETABLE OIL</h1>
                                            <h6>Ingredients :</h6>
                                            <br></br>
                                            <h6>Refined Palm Olein,Antioxidant(E321),<br></br>
                                                Vitamin A & D
                                            </h6>
                                            <img className="detail-view" src="/oilproduct-details/Palm Olein Table.jpg" alt="Slide 1" />
                                        </div>
                                        <div style={{ textAlign: "center" }} className="tab-main col-md-6 ">
                                            <Image src={getImageForSalalah(selectedsalalah)} />
                                            <Row className="py-3 px-0" >
                                                <div className="availabletin">



                                                    <span style={{ fontWeight: 600 }}>Available Sku’s</span>:
                                                    <button onClick={() => handleSizeChangesalalah('SA-1.5L')}>1.5L</button>
                                                    <button onClick={() => handleSizeChangesalalah('SA-1.8L')}>1.8L</button>
                                                    <button onClick={() => handleSizeChangesalalah('SA-3L')}>3L</button>
                                                    <button onClick={() => handleSizeChangesalalah('SA-4L PET')}>4L PET</button>

                                                    <button onClick={() => handleSizeChangesalalah('SA-5L')}>5L</button>
                                                    <button onClick={() => handleSizeChangesalalah('SA-8L')}>8L</button>
                                                    <button onClick={() => handleSizeChangesalalah('SA-10L')}>10L</button>
                                                    <button onClick={() => handleSizeChangesalalah('SA-18L Tin')}>18L Tin</button>
                                                    <button onClick={() => handleSizeChangesalalah('SA-20L')}>20L</button>


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
                                            <img src="/oilproduct-details/Logo Al-Barakat.png" alt="Slide 1" />
                                            <h1>PALM OLEIN <br></br>VEGETABLE OIL</h1>
                                            <h6>Ingredients :</h6>
                                            <br></br>
                                            <h6>Refined Palm Olein,Antioxidant(E321),<br></br>
                                                Vitamin A & D
                                            </h6>
                                            <img className="detail-view" src="/oilproduct-details/Palm Olein Table.jpg" alt="Slide 1" />
                                        </div>
                                        <div style={{ textAlign: "center" }} className="tab-main col-md-6 ">
                                            <Image src={getImageForAlbarkat(selectedalbarkat)} />
                                            <Row className="py-3 px-0">
                                                <div className="availabletin">


                                                    <span style={{ fontWeight: 600 }}>Available Sku’s</span>:
                                                    <button onClick={() => handleSizeChangealbarkat('AL-750ML')}>750ML</button>
                                                    <button onClick={() => handleSizeChangealbarkat('AL-1.5L PET')}>1.5L PET</button>
                                                    <button onClick={() => handleSizeChangealbarkat('AL-1.5L HDPE')}>1.5L HDPE</button>
                                                    <button onClick={() => handleSizeChangealbarkat('AL-3L')}>3L</button>

                                                    <button onClick={() => handleSizeChangealbarkat('AL-4L PET')}>4L PET</button>
                                                    <button onClick={() => handleSizeChangealbarkat('AL-4L HDPE')}>4L HDPE</button>
                                                    <button onClick={() => handleSizeChangealbarkat('AL-5L')}>5L</button>
                                                    <button onClick={() => handleSizeChangealbarkat('AL-8L')}>8L</button>
                                                    <button onClick={() => handleSizeChangealbarkat('AL-10L')}>10L</button>
                                                    <button onClick={() => handleSizeChangealbarkat('AL-16L')}>16L</button>
                                                    <button onClick={() => handleSizeChangealbarkat('AL-20L')}>20L</button>


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
                                            <img src="/oilproduct-details/Logo  Sultanah.png" alt="Slide 1" />
                                            <h1>PALM OLEIN <br></br>VEGETABLE OIL</h1>
                                            <h6>Ingredients :</h6>
                                            <br></br>
                                            <h6>Refined Palm Olein,Antioxidant(E321),<br></br>
                                                Vitamin A & D
                                            </h6>
                                            <img className="detail-view" src="/oilproduct-details/Palm Olein Table.jpg" alt="Slide 1" />
                                        </div>
                                        <div style={{ textAlign: "center" }} className="tab-main col-md-6 ">
                                            <Image src={getImageForSultanah(selectedsultanah)} />
                                            <Row className="py-3 px-0">
                                                <div className="availabletin">

                                                    <span style={{ fontWeight: 600 }}>Available Sku’s</span>:
                                                    <button onClick={() => handleSizeChangesultanah('SL-1.8L')}>1.8L</button>
                                                    <button onClick={() => handleSizeChangesultanah('SL-3L')}>3L</button>
                                                    <button onClick={() => handleSizeChangesultanah('SL-5L')}>5L</button>
                                                    <button onClick={() => handleSizeChangesultanah('SL-10L')}>10L</button>

                                                    <button onClick={() => handleSizeChangesultanah('SL-16L')}>16L</button>
                                                    <button onClick={() => handleSizeChangesultanah('SL-18L')}>18L</button>




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
                                            <img src="/oilproduct-details/Logo A-Saadah.png" alt="Slide 1" />
                                            <h1>PALM OLEIN <br></br>VEGETABLE OIL</h1>
                                            <h6>Ingredients :</h6>
                                            <br></br>
                                            <h6>Refined Palm Olein,Antioxidant(E321),<br></br>
                                                Vitamin A & D
                                            </h6>
                                            <img className="detail-view" src="/oilproduct-details/Palm Olein Table.jpg" alt="Slide 1" />
                                        </div>
                                        <div style={{ textAlign: "center" }} className="tab-main col-md-6 ">
                                            <Image src={getImageForASaadah(selectedasaadah)} />
                                            <Row className="py-3 px-0">
                                                <div className="availabletin">

                                                    <span style={{ fontWeight: 600 }}>Available Sku’s</span>:
                                                    <button onClick={() => handleSizeChangeasaadah('AS-1.8L')}>1.8L</button>
                                                    <button onClick={() => handleSizeChangeasaadah('AS-3L')}>3L</button>
                                                    <button onClick={() => handleSizeChangeasaadah('AS-5L')}>5L</button>
                                                    <button onClick={() => handleSizeChangeasaadah('AS-17L Tin')}>17L Tin</button>

                                                    <button onClick={() => handleSizeChangeasaadah('AS-20L')}>20L</button>





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
                                            <img src="/oilproduct-details/Logo  Luliya.png" alt="Slide 1" />
                                            <h1>PALM OLEIN <br></br>VEGETABLE OIL</h1>
                                            <h6>Ingredients :</h6>
                                            <br></br>
                                            <h6>Refined Palm Olein,Antioxidant(E321),<br></br>
                                                Vitamin A & D
                                            </h6>
                                            <img className="detail-view" src="/oilproduct-details/Palm Olein Table.jpg" alt="Slide 1" />
                                        </div>
                                        <div style={{ textAlign: "center" }} className="tab-main col-md-6 ">
                                            <Image src={getImageForLuliya(selectedluliya)} />
                                            <Row className="py-3 px-0">
                                                <div className="availabletin">

                                                    <span style={{ fontWeight: 600 }}>Available Sku’s</span>:
                                                    <button onClick={() => handleSizeChangeluliya('LU-18L Tin')}>18L Tin</button>






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

                                    <img style={{ width: '100%' }} src="/oilproduct-details/Logo  Al-Safa.png" alt="Slide 1" />
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item style={{ padding: '10px 5px' }}>
                                <Nav.Link eventKey="second" style={{ background: "#fff", padding: "0px" }}>
                                    <img src="/oilproduct-details/Logo  Noof.png" alt="Slide 1" />
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item style={{ padding: '10px 5px' }}>
                                <Nav.Link eventKey="third" style={{ background: "#fff", padding: "0px" }}>
                                    <img src="/oilproduct-details/Logo Zain.png" alt="Slide 1" />
                                </Nav.Link>
                            </Nav.Item>

                            <Nav.Item style={{ padding: '10px 5px' }}>
                                <Nav.Link eventKey="fourth" style={{ background: "#fff", padding: "0px" }}>

                                    <img src="/oilproduct-details/Logo Al-Manal.png" alt="Slide 1" />
                                </Nav.Link>
                            </Nav.Item>

                            <Nav.Item style={{ padding: '10px 5px' }}>
                                <Nav.Link eventKey="five" style={{ background: "#fff", padding: "0px" }}>
                                    <img src="/oilproduct-details/Logo  Shifa.png" alt="Slide 1" />

                                </Nav.Link>
                            </Nav.Item>

                            <Nav.Item style={{ padding: '10px 5px' }}>
                                <Nav.Link eventKey="six" style={{ background: "#fff", padding: "0px" }}>
                                    <img src="/oilproduct-details/Logo  Salalah.png" alt="Slide 1" />

                                </Nav.Link>
                            </Nav.Item>



                            <Nav.Item style={{ padding: '10px 5px' }}>
                                <Nav.Link eventKey="seven" style={{ background: "#fff", padding: "0px" }}>

                                    <img src="/oilproduct-details/Logo Al-Barakat.png" alt="Slide 1" />
                                </Nav.Link>
                            </Nav.Item>

                            <Nav.Item style={{ padding: '10px 5px' }}>
                                <Nav.Link eventKey="eight" style={{ background: "#fff", padding: "0px" }}>

                                    <img src="/oilproduct-details/Logo  Sultanah.png" alt="Slide 1" />
                                </Nav.Link>
                            </Nav.Item>

                            <Nav.Item style={{ padding: '10px 5px' }}>
                                <Nav.Link eventKey="nine" style={{ background: "#fff", padding: "0px" }}>

                                    <img src="/oilproduct-details/Logo A-Saadah.png" alt="Slide 1" />
                                </Nav.Link>
                            </Nav.Item>

                            <Nav.Item style={{ padding: '10px 5px' }}>
                                <Nav.Link eventKey="ten" style={{ background: "#fff", padding: "0px" }}>

                                    <img src="/oilproduct-details/Logo  Luliya.png" alt="Slide 1" />
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
            return '/oilproduct-details/AL SAFA PRODUCT IMAGE/Al-Safa-Palmolein-750ml.jpg';
        case '1L':
            return '/oilproduct-details/AL SAFA PRODUCT IMAGE/Al-Safa-Palmolein-1L.jpg';
        case '1.5L PET':
            return '/oilproduct-details/AL SAFA PRODUCT IMAGE/Al-Safa-Palmolein-1p5L-PET.jpg';
        case '1.5L HDPE':
            return '/oilproduct-details/AL SAFA PRODUCT IMAGE/Al-Safa-Palmolein-1p5L-HDPE.jpg';
        case '1.8L':
            return '/oilproduct-details/AL SAFA PRODUCT IMAGE/Al-Safa-Palmolein-1p8L-HDPE.jpg';
        case '3L':
            return '/oilproduct-details/AL SAFA PRODUCT IMAGE/Al-Safa-Palmolein-3L-HDPE.jpg';
        case '4L':
            return '/oilproduct-details/AL SAFA PRODUCT IMAGE/Al-Safa-Palmolein-4L-HDPE.jpg';
        case '5L':
            return '/oilproduct-details/AL SAFA PRODUCT IMAGE/Al-Safa-Palmolein-5L-HDPE.jpg';
        case '10L':
            return '/oilproduct-details/AL SAFA PRODUCT IMAGE/Al-Safa-Palmolein-10L.jpg';
        case '18L Tin':
            return '/oilproduct-details/AL SAFA PRODUCT IMAGE/Al-Safa-Palmolein-18L Tin.jpg';
        case '18L Jar':
            return '/oilproduct-details/AL SAFA PRODUCT IMAGE/Al-Safa-Palmolein-18L-Jar.jpg';

        case '20L':
            return '/oilproduct-details/AL SAFA PRODUCT IMAGE/Al-Safa-Palmolein-20L-Jar.jpg';
    }
};



const getImageForNoof = (sizen) => {
    switch (sizen) {

        case 'N-750ML':
            return '/oilproduct-details/NOOF PRODUCT IMAGE/Noof-Palm-Olein-750ml.jpg';


        case 'N-1.5L PET':
            return '/oilproduct-details/NOOF PRODUCT IMAGE/Noof-Palm-Olein-1p5L PET.jpg';
        case 'N-1.5L HDPE':
            return '/oilproduct-details/NOOF PRODUCT IMAGE/Noof-Palm-Olein-1p5L HDPE.jpg';
        case 'N-1.7L':
            return '/oilproduct-details/NOOF PRODUCT IMAGE/Noof-Palm-Olein-1p7L.jpg';
        case 'N-1.8L':
            return '/oilproduct-details/NOOF PRODUCT IMAGE/Noof-Palm-Olein-1p8L.jpg';

        case 'N-3L':
            return '/oilproduct-details/NOOF PRODUCT IMAGE/Noof-Palm-Olein-3L.jpg';
        case 'N-4L':
            return '/oilproduct-details/NOOF PRODUCT IMAGE/Noof-Palm-Olein-4L.jpg';

        case 'N-5L':
            return '/oilproduct-details/NOOF PRODUCT IMAGE/Noof-Palm-Olein-5L.jpg';
        case 'N-17L Tin':
            return '/oilproduct-details/NOOF PRODUCT IMAGE/Noof-Palm-Olein-17L Tin.jpg';
        case 'N-18L':
            return '/oilproduct-details/NOOF PRODUCT IMAGE/Noof-Palm-Olein-18L.jpg';
        case 'N-20L':
            return '/oilproduct-details/NOOF PRODUCT IMAGE/Noof-Palm-Olein-20L.jpg';
    }
};



const getImageForZain = (sizez) => {
    switch (sizez) {
        case 'Z-1.5L PET':
            return '/oilproduct-details/ZAIN PRODUCT IMAGE/Zain-Palmolein-1p5L-PET.jpg';
        case 'Z-1.5L HDPE':
            return '/oilproduct-details/ZAIN PRODUCT IMAGE/Zain-Palmolein-1p5L-HDPE.jpg';
        case 'Z-1.8L':
            return '/oilproduct-details/ZAIN PRODUCT IMAGE/Zain-Palmolein-1p8L-HDPE.jpg';
        case 'Z-3L':
            return '/oilproduct-details/ZAIN PRODUCT IMAGE/Zain-Palmolein-3L.jpg';
        case 'Z-17L Tin':
            return '/oilproduct-details/ZAIN PRODUCT IMAGE/Zain-Palmolein-17L Tin.jpg';

    }
};


const getImageForAlmanal = (sizeal) => {
    switch (sizeal) {
        case 'A-1p5L':
            return '/oilproduct-details/AL MANAL PRODUCT IMAGE/Al-Manal-Palmolein-1p5L.jpg';
        case 'A-4L':
            return '/oilproduct-details/AL MANAL PRODUCT IMAGE/Al-Manal-Palmolein-4L.jpg';

        case 'A-8L':
            return '/oilproduct-details/AL MANAL PRODUCT IMAGE/Al-Safa-Palmolein-8L.jpg';
        case 'A-17L':
            return '/oilproduct-details/AL MANAL PRODUCT IMAGE/Al-Manal-Palmolein-17L Tin.jpg';
        case 'A-20L':
            return '/oilproduct-details/AL MANAL PRODUCT IMAGE/Al-Safa-Palmolein-20L.jpg';
    }
};





const getImageForShifa = (sizes) => {
    switch (sizes) {

        case 'S-1.5L PET':
            return '/oilproduct-details/SHIFA PRODUCT IMAGES/Shifa Palm Olein 1p5L PET.jpg';
        case 'S-1.8L':
            return '/oilproduct-details/SHIFA PRODUCT IMAGES/Shifa Palm Olein 1p8L.jpg';

        case 'S-3L':
            return '/oilproduct-details/SHIFA PRODUCT IMAGES/Shifa Palm Olein 3L.jpg';
        case 'S-8L':
            return '/oilproduct-details/SHIFA PRODUCT IMAGES/Shifa Palm Olein 8L.jpg';
        case 'S-17L Tin':
            return '/oilproduct-details/SHIFA PRODUCT IMAGES/Shifa Palm Olein 17L.jpg';
        case 'S-18L Tin':
            return '/oilproduct-details/SHIFA PRODUCT IMAGES/Shifa Palm Olein 18L Gross.jpg';
        case 'S-20L':
            return '/oilproduct-details/SHIFA PRODUCT IMAGES/Shifa Palm Olein 20L.jpg';
    }
};



const getImageForSalalah = (sizesalalah) => {
    switch (sizesalalah) {
        case 'SA-1.5L':
            return '/oilproduct-details/SALALAH PRODUCT IMAGES/Salalah Palm Olein 1p5l.jpg';
        case 'SA-1.8L':
            return '/oilproduct-details/SALALAH PRODUCT IMAGES/Salalah Palm Olein 1p8L.jpg';

        case 'SA-3L':
            return '/oilproduct-details/SALALAH PRODUCT IMAGES/Salalah Palm Olein 3L.jpg';
        case 'SA-4L PET':
            return '/oilproduct-details/SALALAH PRODUCT IMAGES/Salalah Palm Olein 4L PET.jpg';
        case 'SA-4L HDPE':
            return '/oilproduct-details/SALALAH PRODUCT IMAGES/Salalah Palm Olein 4L HDPE.jpg';
        case 'SA-5L':
            return '/oilproduct-details/SALALAH PRODUCT IMAGES/Salalah Palm Olein 5L.jpg';
        case 'SA-8L':
            return '/oilproduct-details/SALALAH PRODUCT IMAGES/Salalah Palm Olein 8L.jpg';
        case 'SA-10L':
            return '/oilproduct-details/SALALAH PRODUCT IMAGES/Salalah Palm Olein 10l.jpg';
        case 'SA-18L Tin':
            return '/oilproduct-details/SALALAH PRODUCT IMAGES/Salalah Palm Olein 18L Tin.jpg';
        case 'SA-20L':
            return '/oilproduct-details/SALALAH PRODUCT IMAGES/Salalah Palm Olein 20L.jpg';
    }
};




const getImageForAlbarkat = (sizeal) => {
    switch (sizeal) {
        case 'AL-750ML':
            return '/oilproduct-details/AL BARAKAT PRODUCT IMAGE/Al Barakat Palm Olein 750ml.jpg';
        case 'AL-1.5L PET':
            return '/oilproduct-details/AL BARAKAT PRODUCT IMAGE/Al Barakat Palm Olein 1p5L PET.jpg';
        case 'AL-1.5L HDPE':
            return '/oilproduct-details/AL BARAKAT PRODUCT IMAGE/Al Barakat Palm Olein 1p5L HDPE.jpg';
        case 'AL-3L':
            return '/oilproduct-details/AL BARAKAT PRODUCT IMAGE/Al Barakat Palm Olein 3L.jpg';
        case 'AL-4L PET':
            return '/oilproduct-details/AL BARAKAT PRODUCT IMAGE/Al Barakat Palm Olein 4L PET.jpg';
        case 'AL-4L HDPE':
            return '/oilproduct-details/AL BARAKAT PRODUCT IMAGE/Al Barakat Palm Olein 4L HDPE.jpg';
        case 'AL-5L':
            return '/oilproduct-details/AL BARAKAT PRODUCT IMAGE/Al Barakat Palm Olein 5L.jpg';
        case 'AL-8L':
            return '/oilproduct-details/AL BARAKAT PRODUCT IMAGE/Al Barakat Palm Olein 8L.jpg';
        case 'AL-10L':
            return '/oilproduct-details/AL BARAKAT PRODUCT IMAGE/Al Barakat Palm Olein 10L.jpg';
        case 'AL-16L':
            return '/oilproduct-details/AL BARAKAT PRODUCT IMAGE/Al Barakat Palm Olein 16L.jpg';
        case 'AL-20L':
            return '/oilproduct-details/AL BARAKAT PRODUCT IMAGE/Al Barakat Palm Olein 20L.jpg';
    }
};



const getImageForSultanah = (sizesl) => {



    switch (sizesl) {
        case 'SL-1.8L':
            return '/oilproduct-details/SULTANAH PRODUCT IMAGES/Sultanah Palm olein 1p8L.jpg';
        case 'SL-3L':
            return '/oilproduct-details/SULTANAH PRODUCT IMAGES/Sultanah Palm olein 3L.jpg';
        case 'SL-5L':
            return '/oilproduct-details/SULTANAH PRODUCT IMAGES/Sultanah Palm olein 5L.jpg';
        case 'SL-10L':
            return '/oilproduct-details/SULTANAH PRODUCT IMAGES/Sultanah Palm olein 10L.jpg';
        case 'SL-16L':
            return '/oilproduct-details/SULTANAH PRODUCT IMAGES/Sultanah Palm olein 16L.jpg';
        case 'SL-18L':
            return '/oilproduct-details/SULTANAH PRODUCT IMAGES/Sultanah Palm olein 18L.jpg';

    }
};



const getImageForASaadah = (sizeas) => {



    switch (sizeas) {
        case 'AS-1.8L':
            return '/oilproduct-details/ASAADAH PRODUCT IMAGES/ASaadah Palm Olein 1p8L.jpg';
        case 'AS-3L':
            return '/oilproduct-details/ASAADAH PRODUCT IMAGES/ASaadah Palm Olein 3L.jpg';
        case 'AS-5L':
            return '/oilproduct-details/ASAADAH PRODUCT IMAGES/ASaadah Palm Olein 5L.jpg';
        case 'AS-17L Tin':
            return '/oilproduct-details/ASAADAH PRODUCT IMAGES/ASaadah Palm Olein 17L Tin.jpg';
        case 'AS-20L':
            return '/oilproduct-details/ASAADAH PRODUCT IMAGES/ASaadah Palm Olein 20L.jpg';


    }
};
const getImageForLuliya = (sizelu) => {



    switch (sizelu) {
        case 'LU-18L Tin':
            return '/oilproduct-details/LULIYA PRODUCT IMAGES/Luliya Palm Olein 18L Tin.jpg';


    }
};



export default Oilproductdetail