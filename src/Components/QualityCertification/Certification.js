import React from 'react'
import { Carousel, Container, Col, Row, Button } from 'react-bootstrap';
import Topbar from '../Includes/Topbar';
import Aboutcompany from '../About/Aboutcompany';
import Aboutenquiry from '../About/Aboutenquiry';
import Aboutogfcfooter from '../Aboutogfcfooter';
import Footer from '../Footer';
function Certification() {
    return (
        <div>
            <Topbar />
            <Carousel className="certification ">
                <Carousel.Item>
                    <img className="d-block w-100 zoom full  " src="/certification/certificationslider.jpg" alt="Slide 1" />
                    <div className='container'>
                        <div className="carousel-caption caption-left">

                            <h1 className='linedown' >QUALITY<br></br>CERTIFICATION

                            </h1>

                        </div>
                    </div>

                </Carousel.Item>
            </Carousel>

            <div className='about-board  certification-img' style={{ padding: '0px' }}>

                <img className="certi" style={{ width: '100%' }} src="/certification/ourcertificates.jpg"></img>
                <div className='container certification-about '>
                    <div className='container row'>

                        <div className='col-md-5 col-lg-4'>
                            <div className='quality-certi'>

                                <h1 >Our Certificates
                                   
                                   

                                </h1>
                                <p >
                                    Our manufacturing plant is the state of art technology with most advanced processing equipments & machinery.

                                    </p>
                            </div>
                        </div>
                        <div className='col-md-7 col-lg-8 about-company-board-para m-auto'>

                            <img src="/certification/Logo.png"></img>

                        </div>
                    </div></div>
            </div>

            <div className="certi-div">



                <div className='pt-5 pb-5'>
                    <Container>
                        <Row className='pb-0 mb-4 '>
                            <Col xs={4} md={4} className='companycertificates'>
                                <img src="/certification/22000.jpg" ></img>
                                <div className='certify-viewall'>
                                    <a>View All</a>
                                </div>


                            </Col>
                            <Col xs={4} md={4} className='companycertificates'>
                                <img src="/certification/9001.jpg" ></img>
                                <div className='certify-viewall'>
                                    <a>View All</a>
                                </div>

                            </Col>
                            <Col xs={4} md={4} className='companycertificates'>
                                <img src="/certification/4001.jpg" ></img>
                                <div className='certify-viewall'>
                                    <a>View All</a>
                                </div>

                            </Col>
                        </Row>
                        <Row className='pb-0 m-0'>
                            <Col xs={4} md={4} className='companycertificates'>
                                <img src="/certification/hacc.jpg" ></img>
                                <div className='certify-viewall'>
                                    <a>View All</a>
                                </div>

                            </Col>
                            <Col xs={4} md={4} className='companycertificates'>
                                <img src="/certification/halal.jpg" ></img>
                                <div className='certify-viewall'>
                                    <a>View All</a>
                                </div>

                            </Col>
                            <Col xs={4} md={4} className='companycertificates'>
                                <img src="/certification/socialdevelopment.jpg" ></img>
                                <div className='certify-viewall'>
                                    <a>View All</a>
                                </div>

                            </Col>
                        </Row>
                    </Container >
                </div>



            </div>
            <Aboutcompany />
            <Aboutenquiry />
            <Footer />
            {/* <Aboutogfcfooter /> */}
        </div >
    )
}

export default Certification