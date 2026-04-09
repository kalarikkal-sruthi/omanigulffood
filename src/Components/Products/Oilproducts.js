import React from 'react'
import Topbar from '../Includes/Topbar'
import { Carousel, Container, Col, Row, Button } from 'react-bootstrap';
import Aboutenquiry from '../About/Aboutenquiry';
import { Link } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import AddIcCallIcon from '@mui/icons-material/AddIcCall';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import LanguageIcon from '@mui/icons-material/Language';
import Footer from '../Includes/Footer';

function Oilproducts() {
    return (
        <div>
            <Topbar />
            <Carousel className=" oil slider ">
                <Carousel.Item>
                    <img className="d-block w-100 full zoom" src="/oilproducts/oilslider-slider.jpg" alt="Slide 1" />
                    <div className='container'>
                        <div className="carousel-caption caption-left">

                            <h1 className='linedown'>OIL<br></br> PRODUCTS</h1>
                            <p className='linedown mb-3' style={{paddingLeft:'22px'}}>Trusted by 300+ world-class<br></br> brands in all sizes

                            </p>

                            <div className='non-oilproduct'>
                                <button type="button" class="btn btn-primary nonoilproduct">ENQUIRE NOW</button>
                            </div>
                        </div>


                    </div>

                </Carousel.Item>
            </Carousel>
            <div className="">
                <div className='pt-5'>
                    <Container>
                        <Row className='p-0 mb-4 '>
                            <Col xs={4} md={4} className='oilproducts-company companycertificates'>
                                <img src="/oilproducts/Palm-Olein.jpg" ></img>
                                <div className='oilproducts-viewall'>
                                    <h1>PALM OLEIN</h1>
                                    <Link to="/palmolein-details"><Button className='oil-button'>ALL PRODUCTS</Button></Link>
                                </div>


                            </Col>
                            <Col xs={4} md={4} className='companycertificates'>
                                <img src="/oilproducts/Sunflower-Oil.jpg" ></img>
                                <div className='oilproducts-viewall'>
                                    <h1>SUNFLOWER OIL</h1>
                                   <Link to="/sunfloweroil-details"><Button className='oil-button'>ALL PRODUCTS</Button></Link> 
                                </div>

                            </Col>
                            <Col xs={4} md={4} className='companycertificates'>
                                <img src="/oilproducts/Corn-Oil.jpg" ></img>
                                <div className='oilproducts-viewall'>
                                    <h1>CORN OIL</h1>
                                    <Link to="/cornoil-details"><Button className='oil-button'>ALL PRODUCTS</Button></Link> 
                                    
                                </div>
                            </Col>
                        </Row>
                        <Row className='pb-0  mb-4'>
                            <Col xs={4} md={4} className='companycertificates'>
                                <img src="/oilproducts/Cooking-Oil.jpg" ></img>
                                <div className='oilproducts-viewall'>
                                    <h1>COOKING OIL</h1>
                                  <Link to="/cooking-oil"><Button className='oil-button'>ALL PRODUCTS</Button></Link>
                                </div>

                            </Col>
                            <Col xs={4} md={4} className='companycertificates'>
                                <img src="/oilproducts/Cornblend-Oil.jpg" ></img>
                                <div className='oilproducts-viewall'>
                                    <h1>CORN BLEND OIL </h1>
                                 
                                <Link to="/cornblend-oil">   <Button className='oil-button'>ALL PRODUCTS</Button></Link> 
                                </div>
                            </Col>
                            <Col xs={4} md={4} className='companycertificates'>
                                <img src="/oilproducts/Frying-oil.jpg" ></img>
                                <div className='oilproducts-viewall'>
                                    <h1>FRYING OIL</h1>
                                    
                                 <Link to="/frying-oil">  <Button className='oil-button'>ALL PRODUCTS</Button></Link> 
                                </div>
                            </Col>
                        </Row>
                        <Row className='pb-0 mb-5'>
                            <Col xs={4} md={4} className='companycertificates'>
                                <img src="/oilproducts/D-F-Olein.jpg" ></img>
                                <div className='oilproducts-viewall'>
                                    <h1>D.F OLEIN</h1>
                                    <Link to="/df-olein">    <Button className='oil-button'>ALL PRODUCTS</Button></Link>
                                </div>

                            </Col>
                            <Col xs={4} md={4} className='companycertificates'>
                                <img src="/oilproducts/Ghee.jpg" ></img>
                                <div className='oilproducts-viewall'>
                                    <h1>GHEE</h1>
                                   <Link to="/ghee"> <Button className='oil-button'>ALL PRODUCTS</Button></Link>
                                </div>
                            </Col>
                            <Col xs={4} md={4} className='companycertificates'>
                                <img src="/oilproducts/Shortening.jpg" ></img>
                                <div className='oilproducts-viewall'>
                                    <h1>SHORTENING</h1>
                                    <Link to="/shortening"><Button className='oil-button'>ALL PRODUCTS</Button></Link>
                                </div>
                            </Col>
                        </Row>
                    </Container >
                </div>



            </div>
            <Aboutenquiry />
        <Footer />
            {/* <div className="footerlist" style={{ background: "rgb(242 242 242)" }}>

                <Container>
                    <Row>
                        <Col xs={12} sm={12} md={4}>
                            <div className="footermain">
                                <img class="log" src="images/footer-sliderlogo.png" />
                                <img src="images/logofont.png"  ></img>

                            </div>
                        </Col>
                        <Col xs={12} sm={12} md={4} className="footertelephone">
              <div style={{ color: "#000" }}>
          
              
              <ul>
                <li>
              <HomeIcon variant="Filled"  sx={{marginRight:'10px',color:'#000;'}}/> 
              P.O. Box 43, P.C. 217, Raysut Industrial Estate, Salalah, Sultanate of Oman
                </li>
                <li>
                <AddIcCallIcon variant="Filled" sx={{marginRight:'10px',color:'#000;'}}/>
                +968 99484859 / 23219142
                </li>
                
                <li>
                <AlternateEmailIcon variant="Filled"  sx={{marginRight:'10px',color:'#000;'}}/>
                info@omanigulffood.com
                </li>
                
                <li>
                <LanguageIcon variant="Filled" sx={{marginRight:'10px',color:'#000;'}}/>
                info@omanigulffood.com
                </li>
                
                </ul>

              </div>
              <form className="my-2"> 
                <div className="search2">

                  <input className="inputsearch2" type="text" placeholder="Enter Your Email"></input>
                  <button>Subscribe Now</button>
                </div>

              </form>


            </Col>
                        <Col xs={12} sm={12} md={4} className="footertelephone" style={{ color: '#000' }}>
                            <h5 className="fw-bold">PRODUCTS</h5>
                            <ul>

                                <li>PALM OLEIN</li>
                                <li>SUNFLOWER OIL</li>
                                <li>CORN OIL</li>
                                <li>BLEND OILS</li>
                                <li>SHORTENING</li>
                                <li>NON-OIL PRODUCTS</li>
                            </ul>




                        </Col>
                    </Row>
                </Container>





            </div>
            <div className="bottomfooter" style={{ background: "#dfdfdf" }}>
            <p style={{ color:'#000', }}>Copyright 2018 © <span style={{fontWeight:'600',color:'#000',}}>Omani Gulf Food Company</span>  All Rights Reserved. Design: Sysbreeze </p>
            </div>
            <div className="whatsappicon"><svg xmlns="http://www.w3.org/2000/svg" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em">
                <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" />
            </svg></div>
*/}
        </div > 
    )
}

export default Oilproducts