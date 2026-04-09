import React from 'react'
import Topbar from '../Includes/Topbar'

import { Carousel, Container, Button } from 'react-bootstrap';
import '../About.css'
import Aboutenquiry from '../About/Aboutenquiry';

import { Link } from 'react-router-dom';
import Footer from '../Includes/Footer';

function Qualitymanagement() {
    return (
        <div>
            <Topbar />
            <Carousel className="mission-quality ">
                <Carousel.Item>
                    <img className="d-block w-100 full zoom" src="/Quality/quality.jpg" alt="Slide 1" />
                    <div className='container'>
                        <div className="carousel-caption caption-left ">

                            <h1 style={{ textShadow: '1px 1px 2px black, 0 0 1em black, 0 0 0.2em black' }} className='linedown'>MISSION & <br></br>QUALITY MANAGEMENT

                            </h1>
                            <p className='linedown' style={{ textShadow: '1px 1px 2px black, 0 0 1em black, 0 0 0.2em black' }}>To provide healthy and quality food products across the region with superior<br></br>
                                customer service and delight.
                            </p>

                        </div>
                    </div>

                </Carousel.Item>

            </Carousel>
            <div className='container py-5'><div className='row'>
                <div className='col-md-12'>
                    <div className='quality'>
                        <h1>MISSION</h1>
                    </div>
                    <div className='quality-details'>
                        <h6>TO BE A SOCIALLY RESPONSIBLE COMPANY THAT:</h6>
                        <ul>
                            <li>Delights its consumers by giving high quality products that provides value for money</li>
                            <li>Exceeds the consumers expectations with its most hygienic, nutritious and delicious products</li>
                            <li>Provides an enriching, fulfilling and rewarding job environment for its employees</li>
                            <li>Values long-term relationships with its suppliers, distributors and agents</li>
                            <li>Serves and supports the community and awards re-assuring returns to its shareholders</li>
                            <li>To minimize the waste generation through using eco-friendly products and processes.</li>
                        </ul>
                    </div>
                </div>
            </div>
            </div>
            <img style={{ width: '100%' }} src="/Quality/qimage2.jpg" />


            <div className='container py-5'><div className='row'>
                <div className='col-md-12'>
                    <div className='quality'>
                        <h1>QUALITY MANAGEMENT</h1>
                    </div>
                    <div className='quality-details'>
                        <h6>TO BE A SOCIALLY RESPONSIBLE COMPANY THAT:</h6>
                        <ul>
                            <li>Our Vision, Mission and Action is rooted in Total Quality Management</li>
                            <li>Starting from identification of Consumer needs, Optimized planning for achieving the same, meeting customer requirements at highest satisfaction level with the lowest financial cost</li>
                            <li>Adhering to cGMP, SOPs and HACCP practices</li>
                            <li>To produce the best quality and hygienic products at the most competitive prices</li>
                            <li>WE BELIEVE – QUALITY IS NOT AN END BUT OUR WAY OF LIFE!</li>

                        </ul>
                    </div>
                </div>
            </div>
            </div>

            <div className=' about-board mission-about' style={
                {
                    backgroundColor: '#ffe3c5'
                }
            }>
                <div className='container '>
                    <div className='container row'>

                        <div className='col-md-5 col-lg-4'>
                            <div className='about-company-board'>
                                <h1 >
                                Quality<br></br>
                                    Certification
                                </h1>

                            </div>
                        </div>
                        <div className='col-md-7 col-lg-8 about-company-board-para'>
                            <p>
                                Our Manufacturing plants are up-to-date with most important
                                certification in our industry.
                            </p>
                            <></>
                         <Link to="/quality-certification"><Button >
                           DISCOVER NOW</Button></Link> 
                        </div>
                    </div></div>
            </div>
            <Aboutenquiry />
            <Footer />
            {/* <Aboutogfcfooter /> */}
        </div>
    )
}

export default Qualitymanagement