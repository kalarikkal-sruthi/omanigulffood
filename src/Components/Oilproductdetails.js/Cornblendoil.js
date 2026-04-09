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

function Cornblendoil() {

    const ref = useRef();
    const [isVisible, setIsVisible] = useState(false);
    const [showButton, setShowButton] = useState(false);


    const [selectedSize, setSelectedSize] = useState('1.5L');

    const [selectednoof, setSelectednoof] = useState('N-1.8L');


  


   

    const handleSizeChange = (size) => {
        setSelectedSize(size);
    };
    const handleSizeChangenoof = (sizen) => {
        setSelectednoof(sizen);
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
            <img className="d-block w-100 full zoom" src="/oilproduct-details/CORNBLEND OIL/CORNBLEND OIL/BANNER/Cornblend-Oil-Banner.jpg" alt="Slide 1" />
            <div className='container'>
                <div className="carousel-caption caption-left">

                    <h1 className='linedown' >CORNBLEND OIL

                  
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
                                    <img src="/oilproduct-details/CORNBLEND OIL/CORNBLEND OIL/LOGO/Logo  Diyah.png" alt="Slide 1" />
                                    <h1>CORNBLEND OIL</h1>

                                    <h6>Ingredients :</h6>

                                 

                                    <h6>  D.F.Olein (70%), Refined Sunflower Oil (15%),
                              Corn oil (15%), Antioxidant (E319),<br></br> Vitamins A&D.
                                    </h6>

                                    <br></br>
                                    <img className="detail-view" src="/oilproduct-details/CORNBLEND OIL/CORNBLEND OIL/TABLE/Cornblend Oil Table.jpg" alt="Slide 1" />
                                </div>
                                <div style={{ textAlign: "center" }} className="tab-main col-md-6 ">
                                    <Image src={getImageForSize(selectedSize)} alt="" />
                                    <Row className="py-3 px-0" >
                                        <div className="availabletin">
                                            <span class="availablehead" style={{ fontWeight: 600 }}>Available Sku’s</span>:
                                           
                                            <button onClick={() => handleSizeChange('1.5L')}>1.5L</button>
                                            <button onClick={() => handleSizeChange('1.8L')}>1.8L</button>
                                            <button onClick={() => handleSizeChange('20L')}> 20L</button>
                                          
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
                                    <img src="/oilproduct-details/CORNBLEND OIL/CORNBLEND OIL/LOGO/Logo  Kareem.png" alt="Slide 1" />
                                    <h1>CORNBLEND OIL</h1>

<h6>Ingredients :</h6>



<h6>  D.F.Olein (70%), Refined Sunflower Oil (15%),
Corn oil (15%), Antioxidant (E319),<br></br> Vitamins A&D.
</h6>

<br></br>
                                    <img className="detail-view" src="/oilproduct-details/CORNBLEND OIL/CORNBLEND OIL/TABLE/Cornblend Oil Table.jpg" alt="Slide 1" />
                                </div>
                                <div style={{ textAlign: "center" }} className="tab-main col-md-6 ">
                                    <Image src={getImageForNoof(selectednoof)} />
                                    <Row className="py-3 px-0" >
                                        <div className="availabletin">                                   
                                            <span style={{ fontWeight: 600 }}>Available Sku’s</span>:                                           
                                            <button onClick={() => handleSizeChangenoof('N-1.8L')}>1.8L</button>                                                                                   
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
                            }} src="/oilproduct-details/CORNBLEND OIL/CORNBLEND OIL/LOGO/Logo  Diyah.png" alt="Slide 1" />
                        </Nav.Link>
                    </Nav.Item>


                    <Nav.Item style={{ padding: '10px 5px' }}>
                        <Nav.Link eventKey="second" style={{ background: "#fff", padding: "0px" }}>
                            <img style={{
                                width: '100%',
                                border: '1px solid #f2f2f2',
                                borderRadius: '30px'
                            }} src="/oilproduct-details/CORNBLEND OIL/CORNBLEND OIL/LOGO/Logo  Kareem.png" alt="Slide 1" />
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
        case '1.5L':
            return '/oilproduct-details/CORNBLEND OIL/CORNBLEND OIL/PRODUCT IMAGES/DIYAH/Diyah CBO 1p5L.jpg';
        case '1.8L':
            return '/oilproduct-details/CORNBLEND OIL/CORNBLEND OIL/PRODUCT IMAGES/DIYAH/Diyah CBO 1p8L.jpg';
        case '20L':
            return '/oilproduct-details/CORNBLEND OIL/CORNBLEND OIL/PRODUCT IMAGES/DIYAH/Diyah CBO 20L.jpg';        

    }
};






const getImageForNoof = (sizen) => {
    switch (sizen) {
        case 'N-1.8L':
            return '/oilproduct-details/CORNBLEND OIL/CORNBLEND OIL/PRODUCT IMAGES/KAREEM/Kareem CBO 1p8L.jpg';
        
       
    }
};







export default Cornblendoil