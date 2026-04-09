import React from 'react'
import Topbar from '../Includes/Topbar'
import { Carousel, Container, Col, Row } from 'react-bootstrap';
import '../About.css'
import HomeIcon from '@mui/icons-material/Home';
import AddIcCallIcon from '@mui/icons-material/AddIcCall';
import FaxIcon from '@mui/icons-material/Fax';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import LanguageIcon from '@mui/icons-material/Language';
import Aboutcompany from '../About/Aboutcompany';
import Aboutenquiry from '../About/Aboutenquiry';

import { Link } from 'react-router-dom';
import Footer from '../Includes/Footer';
import { useState } from 'react';


function Contact() {
    const email = 'info@omanigulffood.com';

    const email1 = 's.kumar@ omanigulffood.com';
    const email2 = 'chowdhury.n@omanigulffood.com';
    const email3 = 'baljinder.singh@omanigulffood.com';
    const email4 = 'm.jaboob@omanigulffood.com';
    const email5 = 'said@omanigulffood.com';


    const email6 = 'jose.sm@omanigulffood.com';
    const email7 = 'm.jaboob@omanigulffood.com';
    const email8 = 'midhun@omanigulffood.com';

    const [showPopupmapmuscut, setShowPopupmapmuscut] = useState(false);
    const [showPopupmapdubai, setShowPopupmapdubai] = useState(false);
    const [showPopupmapjeddah, setShowPopupmapjeddah] = useState(false);
    const [showPopupmapriyad, setShowPopupmapriyad] = useState(false);
    const handleClickmapmuscut = () => {
        setShowPopupmapmuscut(true);
        setShowPopupmapdubai(false);
        setShowPopupmapjeddah(false);
        setShowPopupmapriyad(false);
      };
      const handleClickmapdubai = () => {
        setShowPopupmapmuscut(false);
        setShowPopupmapdubai(true);
        setShowPopupmapjeddah(false);
        setShowPopupmapriyad(false);
      };
      const handleClickmapjeddah = () => {
        setShowPopupmapmuscut(false);
        setShowPopupmapdubai(false);
        setShowPopupmapjeddah(true);
        setShowPopupmapriyad(false);
      };
      const handleClickmapriyad = () => {
        setShowPopupmapmuscut(false);
        setShowPopupmapdubai(false);
        setShowPopupmapjeddah(false);
        setShowPopupmapriyad(true);
      };


    return (
        <div>
            <Topbar />
            <Carousel className="slider">
                <Carousel.Item>
                    <img className="d-block w-100 zoom full" src="/contact/contactslider.jpg" alt="Slide 1" />
                    <div className='container'>
                        <div className="carousel-caption caption-left">
                            <h1 className='linedown'>CONTACT <br></br> US
                            </h1>
                            <p className='linedown'>We have been delivering nutritious and delicious
                                <br></br> cooking oils to the consumers.</p>
                        </div>
                    </div>
                </Carousel.Item>
            </Carousel>
            <div className='contactaddress'>
                <img src="/contact/footeraddress.jpg" />
                <div class="contact-footer">
                    <Row className='m-5'>
                        <div className='head-office' >
                            <h1 className='mb-4'>HEAD OFFICE</h1>
                            <p><HomeIcon variant="Filled" sx={{ margin: '0px 5px', color: '#99978b' }} />P.O. Box 43, P.C. 217, Raysut Industrial Estate, Salalah, Sultanate of Oman.</p>
                            <p><AddIcCallIcon variant="Filled" sx={{ margin: '0px 5px', color: '#99978b' }} />+968 23219142, +968 23219372, +968 23219323</p>
                            <p><FaxIcon variant="Filled" sx={{ margin: '0px 5px', color: '#99978b' }} />+ 968 23219324</p>
                            <p className="email-hover">
                                <AlternateEmailIcon variant="Filled" sx={{ margin: '0px 5px', color: '#99978b' }} />
                                <Link style={{ textDecoration: 'none' }} to={`mailto:${email}`}>info@omanigulffood.com</Link>
                            </p>
                            <p className="email-hover"><LanguageIcon variant="Filled" sx={{ margin: '0px 5px', color: '#99978b' }} />www.omanigulffood.com</p>

                        </div>
                    </Row>
                    {/* <Row>
                    <div style={{ width: '100%' }}>
                        <img src="/contact/googlemap.jpg"></img>
                    </div>
                </Row> */}
                    <Row className='mx-5'>

                        <Col><div className='head-manager'>
                            <h1>P.S. KUMAR</h1>
                            <p>Chief Executive Officer</p>
                            <a>Email:
                                <Link className="email-hover" style={{ textDecoration: 'none' }} to={`mailto:${email1}`}>  s.kumar@omanigulffood.com</Link>
                            </a>
                        </div></Col>
                        <Col><div className='head-manager'>
                            <h1>NIRMALYA CHOWDHURY</h1>
                            <p>Head- Marketing & Sales</p>
                            <a>Email:
                                <Link className="email-hover" style={{ textDecoration: 'none' }} to={`mailto:${email2}`}>  chowdhury.n@omanigulffood.com</Link>
                            </a>

                        </div></Col>
                        <Col><div className='head-manager'>
                            <h1>BALJINDER SINGH</h1>
                            <p>Cheif Financial Officer</p>
                            <a>Email:
                                <Link className="email-hover" style={{ textDecoration: 'none' }} to={`mailto:${email3}`}>  baljinder.singh@omanigulffood.com</Link>

                            </a>

                        </div></Col>
                    </Row>
                    <Row className="justify-content-md-center">
                        <Col xs lg="4">
                            <div className='head-manager'>
                                <h1>MOHAMMED AHMED JABOOB</h1>
                                <p>Commercial Manager</p>
                                <a>Email:
                                    <Link className="email-hover" style={{ textDecoration: 'none' }} to={`mailto:${email4}`}>  m.jaboob@omanigulffood.com</Link>

                                </a>

                            </div>
                        </Col>
                        {/* <Col md="auto">Variable width content</Col> */}
                        <Col xs lg="4">
                            <div className='head-manager'>
                                <h1>SAID MOHAMMED AL MASHANI</h1>
                                <p>HR & Admin Manager</p>
                                <a>Email:
                                    <Link className="email-hover" style={{ textDecoration: 'none' }} to={`mailto:${email5}`}> said@omanigulffood.com</Link>

                                </a>
                                {/* <a>Email : said@omanigulffood.com</a> */}
                            </div>
                        </Col>


                    </Row>
                </div>
            </div >
            <div className="main-branch pt-2">

                <div className='head-office'>
                    <h1 className='my-5'>OUR BRANCHES</h1></div>
                <div className='our-branches'>




                    <Row className='mx-5'>
                        <Col xs lg="6">
                            <div className='our-branch '>
                                <h1>MUSCAT OFFICE</h1>
                                <h6>JOSE SEBASTIAN</h6>
                                <p>Sales Manager</p>
                                <ul>
                                    <li><span>Address :</span>  Horizon House - 4th Floor, Above 5 cm Show Room, Near Dubai Travels,
                                        N.Gobrah, Sultanate of Oman.</li>
                                    <li><span>Mobile :</span>  +968 99282893</li>
                                    <li><span>Tel :</span>  +968 24492176</li>
                                    <li><span>Fax :</span>  +968 24492142</li>
                                    <li><span>Branch Logistics Tel/Fax :</span> +968 26893195</li>


                                    <li><span>Email :</span>
                                        <Link className="email-hover" style={{ textDecoration: 'none' }} to={`mailto:${email6}`}>  jose.sm@omanigulffood.com</Link>
                                    </li>
                                </ul>
                                <button onClick={handleClickmapmuscut} >




                                  Map view</button>

                                  {showPopupmapmuscut && (
        <div className="boardpopupnon">
            <h1>MUSCAT OFFICE</h1>
            <iframe 
                                    src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3656.3738694098297!2d58.40381300000001!3d23.590920999999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjPCsDM1JzI3LjMiTiA1OMKwMjQnMTMuNyJF!5e0!3m2!1sen!2sin!4v1688549146949!5m2!1sen!2sin"
                                     width="600"
                                      height="450" 
                                      style={{border:'0'}}
                                      allowfullscreen=""
                                       loading="lazy" 
                                       referrerpolicy="no-referrer-when-downgrade"
                                       
                                       >
                                        </iframe>
                                        <br></br>
                                        <br></br>
                                        <br></br>
            <button onClick={() => setShowPopupmapmuscut(false)}>Close</button>
        </div>
      )}

                                  
                            </div>
                        </Col>

                        <Col xs lg="6">
                            <div className='our-branch '>
                                <h1>DUBAI OFFICE</h1>
                                <h6>ANZAL MOHAMED</h6>
                                <p>Asst. Sales Manager</p>
                                <ul>
                                    <li><span>Address :</span>  P.O Box:182434, Warehouse # 114, Al Jadaf, Dubai, UAE.</li>
                                    <li><span>Mobile :</span>  +971 43393614</li>
                                    <li><span>Tel :</span>  +971 555014874</li>
                                    <li><span>Fax :</span>  +971 43393615</li>
                                    <li><span>Branch Logistics Tel/Fax :</span>  +971 26893195</li>





                                    <li><span>Email :</span>
                                        <Link className="email-hover" style={{ textDecoration: 'none' }} to={`mailto:${email7}`}> anzal@omanigulffood.com</Link>
                                    </li>




                                    <li><span>ABU-DHABI-Tel :</span>  +971 25503162</li>
                                    <li><span>AJMAN -</span>  Area 1, Near Police Point Round About</li>
                                    <li><span>Tel :</span>  +971 67489664</li>
                                </ul>
                                <button  onClick={handleClickmapdubai} >Map view</button>

                                {showPopupmapdubai && (
        <div className="boardpopupnon">



<h1>DUBAI OFFICE</h1>
            <iframe 
                                    src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3609.7579874066887!2d55.333480615009854!3d25.21138278388959!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjXCsDEyJzQxLjAiTiA1NcKwMjAnMDguNCJF!5e0!3m2!1sen!2sin!4v1688551052136!5m2!1sen!2sin"
                                     width="600"
                                      height="450" 
                                      style={{border:'0'}}
                                      allowfullscreen=""
                                       loading="lazy" 
                                       referrerpolicy="no-referrer-when-downgrade"
                                       
                                       >
                                        </iframe>
                                        <br></br>
                                        <br></br>
                                        <br></br>
            <button onClick={() => setShowPopupmapdubai(false)}>Close</button>
        </div>
      )}

                            </div>
                        </Col>
                    </Row>
                    <Row className='mx-5'>
                        <Col xs lg="6">
                            <div className='our-branch '>


                                <h1>SAUDI BRANCH - RIYADH</h1>
                                <h6>MIDHUN JOHN ISSAC</h6>
                                <p>Asst. Sales Manager</p>
                                <ul>
                                    <li><span>Address :</span> Warehouse No 4, Al Masanih Area, Al Hair Road Ibin, Qassim, Riyadh, Kingdom of Saudi Arabia.</li>
                                    <li><span>Mobile :</span>  +966 597332721</li>
                                    {/* <li><span>Tel :</span>+966 114007818</li> */}
                                    <li><span>Email :</span>
                                        <Link className="email-hover" style={{ textDecoration: 'none' }} to={`mailto:${email8}`}> midhun@omanigulffood.com</Link>
                                    </li>

                                </ul>
                                <button  onClick={handleClickmapriyad} >Map view</button>

{showPopupmapriyad && (
<div className="boardpopupnon">




<h1>SAUDI BRANCH - RIYADH</h1>


<iframe 
    src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3628.7015900183233!2d46.742722199999996!3d24.5649722!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjTCsDMzJzUzLjkiTiA0NsKwNDQnMzMuOCJF!5e0!3m2!1sen!2sin!4v1688551790011!5m2!1sen!2sin"
     width="600"
      height="450" 
      style={{border:'0'}}
      allowfullscreen=""
       loading="lazy" 
       referrerpolicy="no-referrer-when-downgrade"
       
       >
        </iframe>
        <br></br>
        <br></br>
        <br></br>
<button onClick={() => setShowPopupmapriyad(false)}>Close</button>
</div>
)}
                            </div>
                        </Col>


                        <Col xs lg="6">
                            <div className='our-branch '>
                                <h1>SAUDI BRANCH-JEDDAH</h1>
                                <h6>ABHILASH.G</h6>
                                <p>Asst. Sales Manager</p>
                                <ul>
                                    <li><span>Address :</span> Warehouse 86, Al Fouzan Wh, Near Souk Al Gahanam, Al Kumurah, Jeddah,Kingdom of Saudi Arabia<br></br>
                                    </li>
                                    <li><span>Mobile :</span>  +966 597332549</li>
                                    <li><span>Tel :</span>  +966 126110604</li>

                                </ul>


                              
                                <button  onClick={handleClickmapjeddah} >Map view</button>

{showPopupmapjeddah && (
<div className="boardpopupnon">



<h1>SAUDI BRANCH-JEDDAH</h1>
<iframe 
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3715.1250980125133!2d39.216351599999996!3d21.384978399999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15c3c9c20f69ed03%3A0xf8a2b93c5952797f!2sAs%20Surooriyah%2C%20Jeddah%2022523%2C%20Saudi%20Arabia!5e0!3m2!1sen!2sin!4v1688551447092!5m2!1sen!2sin"
     width="600"
      height="450" 
      style={{border:'0'}}
      allowfullscreen=""
       loading="lazy" 
       referrerpolicy="no-referrer-when-downgrade"
       
       >
        </iframe>
        <br></br>
        <br></br>
        <br></br>
<button onClick={() => setShowPopupmapjeddah(false)}>Close</button>
</div>
)}
                            </div>
                        </Col>
                    </Row>
                </div>


            </div >
            <div>
                <Aboutcompany />
            </div>
            <div>
                <Aboutenquiry />
            </div>
            <Footer />
            {/* <Aboutogfcfooter /> */}

        </div >



    )
}

export default Contact