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

function Sunfloweroilproductdetails() {
    const ref = useRef();
    const [isVisible, setIsVisible] = useState(false);
    const [showButton, setShowButton] = useState(false);



    const [selectedSize, setSelectedSize] = useState('5L');
    const [selectednoof, setSelectednoof] = useState('N-1.5L');
    const [selectedzain, setSelectedzain] = useState('Z-1.8L');
    const [selectedalmanal, setSelectedalmanal] = useState('A-1.8L');
    const [selectedshifa, setSelectedshifa] = useState('S-750ML');
    const [selectedsalalah, setSelectedsalalah] = useState('SA-750ML');
    const [selectedalbarkat, setSelectedalbarkat] = useState('AL-3L');
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
                    <img className="d-block w-100 full zoom" src="/SUNFLOWER OIL/BANNER/Sunflower-Oil-Banner.jpg" alt="Slide 1" />
                    <div className='container'>
                        <div className="carousel-caption caption-left">

                            <h1 className='linedown' >SUNFLOWER OIL
                            </h1>


                        </div>
                    </div>

                </Carousel.Item>
            </Carousel>







            <Tab.Container defaultActiveKey="eight">

                <Row>
                    <Col sm={12}>
                        <Tab.Content>








<Tab.Pane eventKey="eight">

<div className="container  py-5">
    <div className="row">
        <div className="col-md-6 product-details product-details-heading">
            <img style={{ 
border: '1px solid #f2f2f2',
borderRadius: '30px'}} src="/SUNFLOWER OIL/LOGO/Sundrops Logo.png" alt="Slide 1" />
            <h1>SUNFLOWER OIL</h1>

            <h6>Ingredients :</h6>


            <h6>Refined Sunflower Oil,
                Antioxidant (E319), <br></br>   Vitamin A&D
            </h6>
            <br></br>
            <img className="detail-view" src="/SUNFLOWER OIL/TABLE/Sunflower Oil Table.jpg" alt="Slide 1" />
        </div>
        <div style={{ textAlign: "center" }} className="tab-main col-md-6 ">
            <Image src={getImageForSultanah(selectedsultanah)} />
            <Row className="py-3 px-0">
                <div className="availabletin">

                    <span style={{ fontWeight: 600 }}>Available Sku’s</span>:
                    <button onClick={() => handleSizeChangesultanah('SL-750ML')}>750ML</button>
                    <button onClick={() => handleSizeChangesultanah('SL-1L')}>1L</button>
                    <button onClick={() => handleSizeChangesultanah('SL-1.5L')}>1.5L</button>
                    <button onClick={() => handleSizeChangesultanah('SL-1.8L')}>1.8L</button>

                    <button onClick={() => handleSizeChangesultanah('SL-3L')}>3L</button>
                    <button onClick={() => handleSizeChangesultanah('SL-4L')}>4L</button>

                    <button onClick={() => handleSizeChangesultanah('SL-5L')}>5L</button>
                    <button onClick={() => handleSizeChangesultanah('SL-9L')}>9L</button>
                    <button onClick={() => handleSizeChangesultanah('SL-17L Tin')}>17L Tin</button>
                    <button onClick={() => handleSizeChangesultanah('SL-20L')}>20L</button>

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
borderRadius: '30px'}} src="/SUNFLOWER OIL/LOGO/Taibah Logo.png" alt="Slide 1" />
            <h1>SUNFLOWER OIL</h1>

            <h6>Ingredients :</h6>


            <h6>Refined Sunflower Oil,
                Antioxidant (E319), <br></br>   Vitamin A&D
            </h6>
            <br></br>
            <img className="detail-view" src="/SUNFLOWER OIL/TABLE/Sunflower Oil Table.jpg" alt="Slide 1" />
        </div>
        <div style={{ textAlign: "center" }} className="tab-main col-md-6 ">
            <Image src={getImageForASaadah(selectedasaadah)} />
            <Row className="py-3 px-0">
                <div className="availabletin">

                    <span style={{ fontWeight: 600 }}>Available Sku’s</span>:
                    <button onClick={() => handleSizeChangeasaadah('AS-750ML')}>750ML</button>
                    <button onClick={() => handleSizeChangeasaadah('AS-1.5L')}>1.5L</button>
                    <button onClick={() => handleSizeChangeasaadah('AS-1.8L')}>1.8L</button>
                    <button onClick={() => handleSizeChangeasaadah('AS-5L')}>5L</button>






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
borderRadius: '30px'}} src="/SUNFLOWER OIL/LOGO/Sahi Logo.png" alt="Slide 1" />
            <h1>SUNFLOWER OIL</h1>

            <h6>Ingredients :</h6>


            <h6>Refined Sunflower Oil,
                Antioxidant (E319), <br></br>   Vitamin A&D
            </h6>
            <br></br>
            <img className="detail-view" src="/SUNFLOWER OIL/TABLE/Sunflower Oil Table.jpg" alt="Slide 1" />
        </div>
        <div style={{ textAlign: "center" }} className="tab-main col-md-6 ">
            <Image src={getImageForSalalah(selectedsalalah)} />
            <Row className="py-3 px-0" >
                <div className="availabletin">
              
                    <span style={{ fontWeight: 600 }}>Available Sku’s</span>:
                    <button onClick={() => handleSizeChangesalalah('SA-750ML')}>750ML</button>
                    <button onClick={() => handleSizeChangesalalah('SA-1.5L')}>1.5L</button>
                    <button onClick={() => handleSizeChangesalalah('SA-1.8L')}>1.8L</button>
                    <button onClick={() => handleSizeChangesalalah('SA-3L')}>3L</button>
            <button onClick={() => handleSizeChangesalalah('SA-5L')}>5L</button>
            <button onClick={() => handleSizeChangesalalah('SA-18L')}>18L</button>
          


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
borderRadius: '30px'}} src="/SUNFLOWER OIL/LOGO/Logo  Sama.png" alt="Slide 1" />
            <h1>SUNFLOWER OIL</h1>

            <h6>Ingredients :</h6>


            <h6>Refined Sunflower Oil,
                Antioxidant (E319), <br></br>   Vitamin A&D
            </h6>
            <br></br>
            <img className="detail-view" src="/SUNFLOWER OIL/TABLE/Sunflower Oil Table.jpg" alt="Slide 1" />
        </div>
        <div style={{ textAlign: "center" }} className="tab-main col-md-6 ">
            <Image src={getImageForShifa(selectedshifa)} />
            <Row className="py-3 px-0" >
                <div className="availabletin">

                    <span style={{ fontWeight: 600 }}>Available Sku’s</span>:
                    <button onClick={() => handleSizeChangeshifa('S-750ML')}>750ML</button>
                    <button onClick={() => handleSizeChangeshifa('S-1.8L')}>1.8L</button>
                    {/* <button onClick={() => handleSizeChangeshifa('S-3L')}>3L</button>
            <button onClick={() => handleSizeChangeshifa('S-8L')}>8L</button>
            <button onClick={() => handleSizeChangeshifa('S-17L')}>17L</button>
            <button onClick={() => handleSizeChangeshifa('S-18L Tin')}>18L Tin</button>
            <button onClick={() => handleSizeChangeshifa('S-20L')}>20L</button> */}


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
borderRadius: '30px'}} src="/SUNFLOWER OIL/LOGO/Al Tayebat Logo.png" alt="Slide 1" />
                                            <h1>SUNFLOWER OIL</h1>

                                            <h6>Ingredients :</h6>


                                            <h6>Refined Sunflower Oil,
                                                Antioxidant (E319), <br></br>   Vitamin A&D
                                            </h6>
                                            <br></br>
                                            <img className="detail-view" src="/SUNFLOWER OIL/TABLE/Sunflower Oil Table.jpg" alt="Slide 1" />
                                        </div>
                                        <div style={{ textAlign: "center" }} className="tab-main col-md-6 ">
                                            <Image src={getImageForNoof(selectednoof)} />
                                            <Row className="py-3 px-0" >
                                                <div className="availabletin">

                                                    <span style={{ fontWeight: 600 }}>Available Sku’s</span>:
                                                    <button onClick={() => handleSizeChangenoof('N-1.5L')}>1.5L</button>
                                                    {/* <button onClick={() => handleSizeChangenoof('N-1.5L')}>1.5L</button>
                                            <button onClick={() => handleSizeChangenoof('N-1.8L')}>1.8L</button>
                                            <button onClick={() => handleSizeChangenoof('N-3L')}>3L</button>
                                            <button onClick={() => handleSizeChangenoof('N-5L')}>5L</button>
                                            <button onClick={() => handleSizeChangenoof('N-18L')}>18L</button> */}

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
borderRadius: '30px'}} src="/SUNFLOWER OIL/LOGO/Jabal Shams  Logo.png" alt="Slide 1" />
                                            <h1>SUNFLOWER OIL</h1>

                                            <h6>Ingredients :</h6>


                                            <h6>Refined Sunflower Oil,
                                                Antioxidant (E319), <br></br>   Vitamin A&D
                                            </h6>
                                            <br></br>
                                            <img className="detail-view" src="/SUNFLOWER OIL/TABLE/Sunflower Oil Table.jpg" alt="Slide 1" />
                                        </div>
                                        <div style={{ textAlign: "center" }} className="tab-main col-md-6 ">
                                            <Image src={getImageForZain(selectedzain)} />
                                            <Row className="py-3 px-0" >
                                                <div className="availabletin">

                                                    <span style={{ fontWeight: 600 }}>Available Sku’s</span>:
                                                    <button onClick={() => handleSizeChangezain('Z-1.8L')}>1.8L</button>
                                                    <button onClick={() => handleSizeChangezain('Z-4L')}>4L</button>

                                                    {/* <button onClick={() => handleSizeChangezain('Z-1.8L')}>1.8L</button>
                                            <button onClick={() => handleSizeChangezain('Z-3L')}>3L</button>
                                            <button onClick={() => handleSizeChangezain('Z-17L Tin')}>17L Tin</button> */}
                                                </div>
                                            </Row>

                                        </div>
                                    </div>
                                </div>
                            </Tab.Pane>






                            <Tab.Pane eventKey="first">
                                <div className="container  py-5">


                                    <div className="row">
                                        <div className="col-md-6 product-details product-details-heading">
                                            <img style={{ 
border: '1px solid #f2f2f2',
borderRadius: '30px'}} src="/SUNFLOWER OIL/LOGO/Al Massa Logo.png" alt="Slide 1" />
                                            <h1>SUNFLOWER OIL</h1>

                                            <h6>Ingredients :</h6>


                                            <h6>Refined Sunflower Oil,
                                                Antioxidant (E319), <br></br>   Vitamin A&D
                                            </h6>
                                            <br></br>
                                            <img className="detail-view" src="/SUNFLOWER OIL/TABLE/Sunflower Oil Table.jpg" alt="Slide 1" />
                                        </div>
                                        <div style={{ textAlign: "center" }} className="tab-main col-md-6 ">

                                            <Image src={getImageForSize(selectedSize)} alt="" />



                                            <Row className="py-3 px-0" >
                                                <div className="availabletin">
                                                    <span class="availablehead" style={{ fontWeight: 600 }}>Available Sku’s</span>:


                                                    <button onClick={() => handleSizeChange('5L')}>5L</button>
                                                    {/* <button onClick={() => handleSizeChange('1L')}>1L</button>
                                            <button onClick={() => handleSizeChange('1.5L')}>1.5L</button>
                                            <button onClick={() => handleSizeChange('1.8L')}>1.8L</button>
                                            <button onClick={() => handleSizeChange('3L')}>3L</button>                           
                                            <button onClick={() => handleSizeChange('4L')}>4L</button>
                                            <button onClick={() => handleSizeChange('5L')}>5L</button>
                                            <button onClick={() => handleSizeChange('9L')}>9L</button>
                                            <button onClick={() => handleSizeChange('17L Tin')}>17L Tin</button>
                                            <button onClick={() => handleSizeChange('20L')}>20L</button> */}
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
borderRadius: '30px'}} src="/SUNFLOWER OIL/LOGO/Logo  Diyah.png" alt="Slide 1" />
                                            <h1>SUNFLOWER OIL</h1>

                                            <h6>Ingredients :</h6>


                                            <h6>Refined Sunflower Oil,
                                                Antioxidant (E319), <br></br>   Vitamin A&D
                                            </h6>
                                            <br></br>
                                            <img className="detail-view" src="/SUNFLOWER OIL/TABLE/Sunflower Oil Table.jpg" alt="Slide 1" />
                                        </div>
                                        <div style={{ textAlign: "center" }} className="tab-main col-md-6 ">
                                            <Image src={getImageForAlmanal(selectedalmanal)} />
                                            <Row className="py-3 px-0" >
                                                <div className="availabletin">

                                                    <span style={{ fontWeight: 600 }}>Available Sku’s</span>:
                                                    <button onClick={() => handleSizeChangealmanal('A-1.8L')}>1.8L</button>
                                                    {/* <button onClick={() => handleSizeChangealmanal('A-4L')}>4L</button>
                                            <button onClick={() => handleSizeChangealmanal('A-8L')}>8L</button>
                                            <button onClick={() => handleSizeChangealmanal('A-17L')}>17L</button>
                                            <button onClick={() => handleSizeChangealmanal('A-20L')}>20L</button> */}


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
borderRadius: '30px'}} src="/SUNFLOWER OIL/LOGO/Sofia Logo.png" alt="Slide 1" />
                                            <h1>SUNFLOWER OIL</h1>

                                            <h6>Ingredients :</h6>


                                            <h6>Refined Sunflower Oil,
                                                Antioxidant (E319), <br></br>   Vitamin A&D
                                            </h6>
                                            <br></br>
                                            <img className="detail-view" src="/SUNFLOWER OIL/TABLE/Sunflower Oil Table.jpg" alt="Slide 1" />
                                        </div>
                                        <div style={{ textAlign: "center" }} className="tab-main col-md-6 ">
                                            <Image src={getImageForAlbarkat(selectedalbarkat)} />
                                            <Row className="py-3 px-0">
                                                <div className="availabletin">

                                                    <span style={{ fontWeight: 600 }}>Available Sku’s</span>:
                                                    <button onClick={() => handleSizeChangealbarkat('AL-3L')}>3L</button>
                                                    <button onClick={() => handleSizeChangealbarkat('AL-8L')}>8L</button>

                                                </div>
                                            </Row>
                                        </div>
                                    </div>
                                </div>

                            </Tab.Pane>
                    
                           
                            {/* <Tab.Pane eventKey="ten">
                    <div className="container  py-5">
                            <div className="row">
                                <div className="col-md-6 product-details product-details-heading">
                                    <img src="/SUNFLOWER OIL/LOGO/Taibah Logo.png" alt="Slide 1" />
                                    <h1>PALM OLEIN <br></br>VEGETABLE OIL</h1>
                                    <h6>Ingredients :</h6>
                                    <br></br>
                                    <h6>Refined Palm Olein,Antioxidant(E321),<br></br>
                                        Vitamin A & D
                                    </h6>
                                    <img className="detail-view" src="/SUNFLOWER OIL/TABLE/Sunflower Oil Table.JPG" alt="Slide 1" />
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
                    </Tab.Pane> */}

                        </Tab.Content>
                    </Col>
                </Row>

                <Row>
                    <Col sm={12}>

                        <Nav style={{ padding: '0px' }} variant="pills" className="d-flex justify-content-center">
                        <Nav.Item style={{ padding: '10px 5px' }}>
                                <Nav.Link eventKey="eight" style={{ background: "#fff", padding: "0px" }}>

                                    <img style={{ width: '100%',
border: '1px solid #f2f2f2',
borderRadius: '30px'}} src="/SUNFLOWER OIL/LOGO/Sundrops Logo.png" alt="Slide 1" />
                                </Nav.Link>
                            </Nav.Item>
                           




                           
                            <Nav.Item style={{ padding: '10px 5px' }}>
                                <Nav.Link eventKey="six" style={{ background: "#fff", padding: "0px" }}>
                                    <img style={{ width: '100%',
border: '1px solid #f2f2f2',
borderRadius: '30px'}} src="/SUNFLOWER OIL/LOGO/Sahi Logo.png" alt="Slide 1" />

                                </Nav.Link>
                            </Nav.Item>


                            <Nav.Item style={{ padding: '10px 5px' }}>
                                <Nav.Link eventKey="nine" style={{ background: "#fff", padding: "0px" }}>

                                    <img style={{ width: '100%',
border: '1px solid #f2f2f2',
borderRadius: '30px'}} src="/SUNFLOWER OIL/LOGO/Taibah Logo.png" alt="Slide 1" />
                                </Nav.Link>
                            </Nav.Item>




                            <Nav.Item style={{ padding: '10px 5px' }}>
                                <Nav.Link eventKey="five" style={{ background: "#fff", padding: "0px" }}>
                                    <img  style={{ width: '100%',
border: '1px solid #f2f2f2',
borderRadius: '30px'}} src="/SUNFLOWER OIL/LOGO/Logo  Sama.png" alt="Slide 1" />

                                </Nav.Link>
                            </Nav.Item>


                            <Nav.Item style={{ padding: '10px 5px' }}>
                                <Nav.Link eventKey="second" style={{ background: "#fff", padding: "0px" }}>
                                    <img  style={{ width: '100%',
border: '1px solid #f2f2f2',
borderRadius: '30px'}} src="/SUNFLOWER OIL/LOGO/Al Tayebat Logo.png" alt="Slide 1" />
                                </Nav.Link>
                            </Nav.Item>






                            <Nav.Item style={{ padding: '10px 5px' }}>
                                <Nav.Link eventKey="third" style={{ background: "#fff", padding: "0px" }}>
                                    <img   style={{ width: '100%',
border: '1px solid #f2f2f2',
borderRadius: '30px'}} src="/SUNFLOWER OIL/LOGO/Jabal Shams  Logo.png" alt="Slide 1" />
                                </Nav.Link>
                            </Nav.Item>
                           
                           
                           
                           
                           
                            <Nav.Item style={{ padding: '10px 5px ' }}>
                                <Nav.Link eventKey="first" style={{ background: "#fff", padding: "0px" }}>

                                    <img  style={{ width: '100%',
border: '1px solid #f2f2f2',
borderRadius: '30px'}} src="/SUNFLOWER OIL/LOGO/Al Massa Logo.png" alt="Slide 1" />
                                </Nav.Link>
                            </Nav.Item>



                      


                            <Nav.Item style={{ padding: '10px 5px' }}>
                                <Nav.Link eventKey="seven" style={{ background: "#fff", padding: "0px" }}>

                                    <img style={{ width: '100%',
border: '1px solid #f2f2f2',
borderRadius: '30px'}} src="/SUNFLOWER OIL/LOGO/Sofia Logo.png" alt="Slide 1" />
                                </Nav.Link>
                            </Nav.Item>


                     

                            <Nav.Item style={{ padding: '10px 5px' }}>
                                <Nav.Link eventKey="fourth" style={{ background: "#fff", padding: "0px" }}>

                                    <img  style={{ width: '100%',
border: '1px solid #f2f2f2',
borderRadius: '30px'}}  src="/SUNFLOWER OIL/LOGO/Logo  Diyah.png" alt="Slide 1" />
                                </Nav.Link>
                            </Nav.Item>

                          



                       

                       

                            {/* <Nav.Item style={{ padding: '10px 5px' }}>
                        <Nav.Link eventKey="ten" style={{ background: "#fff", padding: "0px" }}>

                            <img src="/SUNFLOWER OIL/LOGO/Al Massa Logo.png" alt="Slide 1" />
                        </Nav.Link>
                    </Nav.Item> */}


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

        </div >
    )
}


<>
    <span style={{ fontWeight: '600', marginRight: '10px', }}>Available Sku’s </span>
</>
const getImageForSize = (size) => {

    switch (size) {
        // case '750ML':
        //     return '/SUNFLOWER OIL/PRODUCTS IMAGES/AL MASSA/Al Massa Sunflower Oil 5L.jpg';
        // case '1L':
        //     return '/oilproduct-details/AL SAFA PRODUCT IMAGE/Al-Safa-Palmolein-1L.jpg';
        // case '1.5L':
        //     return '/oilproduct-details/AL SAFA PRODUCT IMAGE/Al-Safa-Palmolein-1p5L-PET.jpg';
        // case '1.8L':
        //     return '/oilproduct-details/AL SAFA PRODUCT IMAGE/Al-Safa-Palmolein-1p5L-HDPE.jpg';
        // case '3L':
        //     return '/oilproduct-details/AL SAFA PRODUCT IMAGE/Al-Safa-Palmolein-1p8L-HDPE.jpg';
        // case '4L':
        //     return '/oilproduct-details/AL SAFA PRODUCT IMAGE/Al-Safa-Palmolein-3L-HDPE.jpg';
        case '5L':
            return '/SUNFLOWER OIL/PRODUCTS IMAGES/AL MASSA/Al Massa Sunflower Oil 5L.jpg';
        // case '9L':
        //     return '/oilproduct-details/AL SAFA PRODUCT IMAGE/Al-Safa-Palmolein-5L-HDPE.jpg';
        // case '17L Tin':
        //     return '/oilproduct-details/AL SAFA PRODUCT IMAGE/Al-Safa-Palmolein-10L.jpg';

        // case '20L':
        //     return '/oilproduct-details/AL SAFA PRODUCT IMAGE/Al-Safa-Palmolein-20L-jar.jpg';

    }
};



const getImageForNoof = (sizen) => {
    switch (sizen) {


        case 'N-1.5L':
            return '/SUNFLOWER OIL/PRODUCTS IMAGES/AL TAYEBAT/Al Tayebat Sunflower Oil 1p5L.jpg';
        // case 'Z-1.5L HDPE':
        //     return '/oilproduct-details/ZAIN PRODUCT IMAGE/Zain-Palmolein-1p5L-HDPE.jpg';
        // case 'Z-1.8L':
        //     return '/oilproduct-details/ZAIN PRODUCT IMAGE/Zain-Palmolein-17L Tin.jpg';
        // case 'Z-3L':
        //     return '/oilproduct-details/ZAIN PRODUCT IMAGE/Zain-Palmolein-3L.jpg';
        // case 'Z-17L Tin':
        //     return '/oilproduct-details/ZAIN PRODUCT IMAGE/Zain-Palmolein-17L Tin.jpg';
        // case 'N-750ML':
        //     return '/SUNFLOWER OIL/PRODUCTS IMAGES/SAHI/Sahi Sunflower Oil 750ml.jpg';

        // case 'N-1.5L':
        //     return '/SUNFLOWER OIL/PRODUCTS IMAGES/SAHI/Sahi Sunflower Oil 1p5L.jpg';

        // case 'N-1.8L':
        //     return '/SUNFLOWER OIL/PRODUCTS IMAGES/SAHI/Sahi Sunflower Oil 1p8L.jpg';
        // case 'N-3L':
        //     return '/SUNFLOWER OIL/PRODUCTS IMAGES/SAHI/Sahi Sunflower Oil 3L.jpg';
        // case 'N-5L':
        //     return '/SUNFLOWER OIL/PRODUCTS IMAGES/SAHI/Sahi Sunflower Oil 5L.jpg';

        // case 'N-18L':
        //     return '/SUNFLOWER OIL/PRODUCTS IMAGES/SAHI/Sahi Sunflower Oil 18L.jpg';
    }
};


const getImageForZain = (sizez) => {
    switch (sizez) {

        case 'Z-1.8L':
            return '/SUNFLOWER OIL/PRODUCTS IMAGES/JABAL SHAMS/Jabal Shams Sunflower Oil 1p8L.jpg';
        case 'Z-4L':
            return '/SUNFLOWER OIL/PRODUCTS IMAGES/JABAL SHAMS/Jabal Shams Sunflower Oil 4L.jpg';
        // case 'Z-1.8L':
        //     return '/oilproduct-details/ZAIN PRODUCT IMAGE/Zain-Palmolein-17L Tin.jpg';
        // case 'Z-3L':
        //     return '/oilproduct-details/ZAIN PRODUCT IMAGE/Zain-Palmolein-3L.jpg';
        // case 'Z-17L Tin':
        //     return '/oilproduct-details/ZAIN PRODUCT IMAGE/Zain-Palmolein-17L Tin.jpg';

    }
};


const getImageForAlmanal = (sizeal) => {
    switch (sizeal) {
        case 'A-1.8L':
            return '/SUNFLOWER OIL/PRODUCTS IMAGES/DIYAH/Diyah Sunflower Oil 1p8L.jpg';
        // case 'A-4L':
        //     return '/oilproduct-details/AL MANAL PRODUCT IMAGE/Al-Manal-Palmolein-4L.jpg';

        // case 'A-8L':
        //     return '/oilproduct-details/AL MANAL PRODUCT IMAGE/Al-Safa-Palmolein-8L.jpg';
        // case 'A-17L':
        //     return '/oilproduct-details/AL MANAL PRODUCT IMAGE/Al-Manal-Palmolein-17L Tin.jpg';
        // case 'A-20L':
        //     return '/oilproduct-details/AL MANAL PRODUCT IMAGE/Al-Safa-Palmolein-20L.jpg';
    }
};





const getImageForShifa = (sizes) => {
    switch (sizes) {

        case 'S-750ML':
            return '/SUNFLOWER OIL/PRODUCTS IMAGES/SAMA/Sama Sunflower oil 750ml.jpg';
        case 'S-1.8L':
            return '/SUNFLOWER OIL/PRODUCTS IMAGES/SAMA/Sama Sunflower oil 1p8L.jpg';

        // case 'S-3L':
        //     return '/oilproduct-details/SHIFA PRODUCT IMAGES/Shifa Palm Olein 3L.jpg';
        // case 'S-8L':
        //     return '/oilproduct-details/SHIFA PRODUCT IMAGES/Shifa Palm Olein 8L.jpg';
        // case 'S-17L Tin':
        //     return '/oilproduct-details/SHIFA PRODUCT IMAGES/Shifa Palm Olein 17L.jpg';
        // case 'S-18L Tin':
        //     return '/oilproduct-details/SHIFA PRODUCT IMAGES/Shifa Palm Olein 18L Gross.jpg';
        // case 'S-20L':
        //     return '/oilproduct-details/SHIFA PRODUCT IMAGES/Shifa Palm Olein 20L.jpg';
    }
};



const getImageForSalalah = (sizesalalah) => {
    switch (sizesalalah) {


        case 'SA-750ML':
            return '/SUNFLOWER OIL/PRODUCTS IMAGES/SAHI/Sahi Sunflower Oil 750ml.jpg';
        case 'SA-1.5L':
            return '/SUNFLOWER OIL/PRODUCTS IMAGES/SAHI/Sahi Sunflower Oil 1p5L.jpg';
        case 'SA-1.8L':
            return '/SUNFLOWER OIL/PRODUCTS IMAGES/SAHI/Sahi Sunflower Oil 1p5L.jpg';

        case 'SA-3L':
            return '/SUNFLOWER OIL/PRODUCTS IMAGES/SAHI/Sahi Sunflower Oil 3L.jpg';

        case 'SA-5L':
            return '/SUNFLOWER OIL/PRODUCTS IMAGES/SAHI/Sahi Sunflower Oil 5L.jpg';

        case 'SA-18L':
            return '/SUNFLOWER OIL/PRODUCTS IMAGES/SAHI/Sahi Sunflower Oil 18L.jpg';

    }
};

const getImageForAlbarkat = (sizeal) => {



    switch (sizeal) {
        case 'AL-3L':
            return '/SUNFLOWER OIL/PRODUCTS IMAGES/SOFIA/Sofia Sunflower Oil 3L.jpg';
        case 'AL-8L':
            return '/SUNFLOWER OIL/PRODUCTS IMAGES/SOFIA/Sofia Sunflower Oil 8L.jpg';
    }
};



const getImageForSultanah = (sizesl) => {



    switch (sizesl) {
        case 'SL-750ML':
            return '/SUNFLOWER OIL/PRODUCTS IMAGES/SUNDROPS/Sundrops Sunflower Oil 750ml.jpg';
        case 'SL-1L':
            return '/SUNFLOWER OIL/PRODUCTS IMAGES/SUNDROPS/Sundrops Sunflower Oil 1L.jpg';
        case 'SL-1.5L':
            return '/SUNFLOWER OIL/PRODUCTS IMAGES/SUNDROPS/Sundrops Sunflower Oil 1p5L.jpg';
        case 'SL-1.8L':
            return '/SUNFLOWER OIL/PRODUCTS IMAGES/SUNDROPS/Sundrops Sunflower Oil 1p8L.jpg';
        case 'SL-3L':
            return '/SUNFLOWER OIL/PRODUCTS IMAGES/SUNDROPS/Sundrops Sunflower Oil 3L.jpg';
        case 'SL-4L':
            return '/SUNFLOWER OIL/PRODUCTS IMAGES/SUNDROPS/Sundrops Sunflower Oil 4L.jpg';
        case 'SL-5L':
            return '/SUNFLOWER OIL/PRODUCTS IMAGES/SUNDROPS/Sundrops Sunflower Oil 5L.jpg';
        case 'SL-9L':
            return '/SUNFLOWER OIL/PRODUCTS IMAGES/SUNDROPS/Sundrops Sunflower Oil 9L.jpg';
        case 'SL-17L Tin':
            return '/SUNFLOWER OIL/PRODUCTS IMAGES/SUNDROPS/Sundrops Sunflower Oil 17L.jpg';
        case 'SL-20L':
            return '/SUNFLOWER OIL/PRODUCTS IMAGES/SUNDROPS/Sundrops Sunflower Oil 20L.jpg';



    }
};



const getImageForASaadah = (sizeas) => {



    switch (sizeas) {
        case 'AS-750ML':
            return '/SUNFLOWER OIL/PRODUCTS IMAGES/TAIBAH/Taibah Sunflower Oil 750ml.jpg';

        case 'AS-1.5L':
            return '/SUNFLOWER OIL/PRODUCTS IMAGES/TAIBAH/Taibah Sunflower Oil 1p5L.jpg';

        case 'AS-1.8L':
            return '/SUNFLOWER OIL/PRODUCTS IMAGES/TAIBAH/Taibah Sunflower Oil 1p8L.jpg';

        case 'AS-5L':
            return '/SUNFLOWER OIL/PRODUCTS IMAGES/TAIBAH/Taibah Sunflower Oil 5L.jpg';




    }
};
const getImageForLuliya = (sizelu) => {



    switch (sizelu) {
        case 'LU-18L Tin':
            return '/oilproduct-details/LULIYA PRODUCT IMAGES/Luliya Palm Olein 18L Tin.jpg';


    }
};



export default Sunfloweroilproductdetails