import { BiArrowToTop } from "react-icons/bi";
import React, { useRef, useEffect, useState } from 'react';
import Topbar from '../Includes/Topbar'
import Aboutcompany from '../About/Aboutcompany'
import Aboutenquiry from "../About/Aboutenquiry";
import { Link } from 'react-router-dom'
import { Button,Col,Row,Container,Form,Carousel} from 'react-bootstrap'
import HomeIcon from '@mui/icons-material/Home';
import AddIcCallIcon from '@mui/icons-material/AddIcCall';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import LanguageIcon from '@mui/icons-material/Language';
import Footer from "../Includes/Footer";


function Careersmain() {
    const ref = useRef();
    const [isVisible, setIsVisible] = useState(false);
    const [showButton, setShowButton] = useState(false);

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
          <img className="d-block w-100 full zoom" src="/careers/careersmain.jpg" alt="Slide 1" />
          <div className='container'>
            <div className="carousel-caption caption-left">

              <h1 className='linedown' style={{color:"#000"}}>CAREERS

              </h1>
              {/* <p className='linedown' style={{color:"#000"}}>He who has health has hope, and
                <br></br>he who has hope has everything</p> */}

            </div>
          </div>

        </Carousel.Item>
      </Carousel>
        {/* <img style={{width:'100%'}} src="/careers/careers.jpg"></img> */}
       
        

      <div>
                <div className='productcompny' style={{ backgroundColor: '#dfeaa5;' }}>
                    <div className='' style={{
                        backgroundColor: '#dbe4a3', padding: '40px 0px'
                    }}>
                        <div className='container' >

                            <div className='row'>
                                <div className="col careersform">
                                <h1>Grab Your Job</h1>
                                <p>We always welcome applications from who want to help  make difference for both customers and the world </p>
                                </div>
                                <Form style={{paddingLeft:'0px'}}
                                >
        <Row>
          <Col className="mb-4">
            <Form.Group controlId="formFirstName">
             
              <Form.Control className="p-3" type="text" placeholder="Your Full Name" />
            </Form.Group>
          </Col>
          <Col className="mb-4">
            <Form.Group controlId="formLastName">
             
              <Form.Control  className="p-3" type="text" placeholder="E-mail Address" />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col className="mb-4">
            <Form.Group controlId="formEmail">
            
              <Form.Control className="p-3" type="email" placeholder="Mobile Number" />
            </Form.Group>
          </Col>
          <Col>
          <Col className="mb-4">
            <Form.Group  controlId="formFile" className="mb-3">
          
              <Form.Control className="p-3" type="file" />
            </Form.Group>
          </Col>
          </Col>
        </Row>
        <Row>
          <Col className="mb-4">
          <Button className="form-submit" variant="primary" type="submit">Submit Applications</Button>
          </Col>
        </Row>
       
      </Form>

                            </div>
                        </div>
                    </div>
                </div>
            </div >


        <div>
                <div className='productcompny' style={{ backgroundColor: '#dfdfdf' }}>
                    <div className='' style={{
                        backgroundColor: '#fff', padding: '40px 0px'
                    }}>
                        < div className='container' >

                            <div className='row'>

                                <div className='col-md-5'>
                                    <div className='about-company-head'>
                                        <h1>Trusted By More Than 300+ Popular Private Labels Across Gulf Region.</h1>
                                       <Link to="/ourproduct"> <Button >DISCOVER NOW</Button></Link>
                                    </div>
                                </div>
                                <div className='col-md-7'>
                                    <ul className='aboutbrands'>
                                        <li><img src='/aboutimages/brand1.jpg'></img></li>
                                        <li><img src='/aboutimages/brand6.jpg'></img></li>
                                        <li><img src='/aboutimages/brand2.jpg'></img></li>
                                        <li><img src='/aboutimages/brand3.jpg'></img></li>
                                        <li><img src='/aboutimages/brand4.jpg'></img></li>
                                        <li><img src='/aboutimages/brand5.jpg'></img></li>
                                        <li><img src='/aboutimages/brand7.jpg'></img></li>
                                    </ul>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div >
<Aboutenquiry />
<Footer />
{/* <div className="footerlist" style={{ background: "rgb(242 242 242)" }}>

<Container>
    <Row>
        <Col xs={12} sm={12} md={4}>
            <div className="footermain">
                <img class="log" src="/images/footer-sliderlogo.png" />
                <img src="/images/logofont.png"  ></img>

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
</svg></div> */}


{
showButton && (
    <button className="scroll-top-button" onClick={handleButtonClick}>

        <BiArrowToTop />
    </button>
)
}

{/* <Aboutogfcfooter /> */}




</div>

  )
}

export default Careersmain