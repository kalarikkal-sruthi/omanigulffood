import React from 'react'
import { Button } from 'react-bootstrap'
import { Navigate, useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { useState } from 'react'

function Aboutboard() {
    const [readMore, setReadMore] = useState(false);
    const [readMore2, setReadMore2] = useState(false);
    const [readMore3, setReadMore3] = useState(false);
    const extraContent = <div>
        <p className="extra-content p-3">
        Our factory is located in Raysut Industrial Estate, Salalah provides logistical advantage in international trade due to its proximity to the port of Salalah which is equidistant from emerging economies – East Africa, Middle East & GCC. We have our own subsidiaries and branch offices in Muscat, United Arab Emirates and Kingdom of Saudi Arabia.
        </p>
    </div>
    const linkName = readMore ? 'Read Less << ' : 'Read More >> '

    const extraContent2 = <div>
    <p className="extra-content2 p-3">
    We have state of the art refinery, most advanced fully automatic high speed filling machinery and equipments to produce quality products conforming to international standards and under strict hygienic conditions. Highly qualified technical staff with considerable food manufacturing experience oversee the entire operations


    </p>
</div>
const linkName2 = readMore2 ? 'Read Less << ' : 'Read More >> '

const extraContent3 = <div>
<p className="extra-content3 p-3">
Product quality measures are in place to ensure that our products meet the customer's satisfaction and statutory requirements. Our facility is an HACCP Certified company, follows stringent GMP practices and certified food safety management systems by SGS Europe.
</p>
</div>
const linkName3 = readMore3 ? 'Read Less << ' : 'Read More >> '


    return (
        <>
            <div style={{ background: "#ffe3c5" }} className='pb-5'>
                <div className='container about-board'>
                    <div className='row'>

                        <div className='col-md-4 col-lg-3'>
                            <div className='about-company-board'>
                                <h1>Board of<br></br>
                                    Directors</h1>

                            </div>
                        </div>
                        <div className='col-md-8 col-lg-9 about-company-board-para'>
                            <p>The Board of Directors is responsible for Omani Gulf Food Company strategic direction, oversight and corporate governance...</p>
                            <Link to="/board-of-directors"><Button >DISCOVER NOW</Button></Link>
                        </div>
                    </div>
                </div>
                <div className='container company-images'>


                    <div className='row'>
                        <div className='col-md-4  col-sm-12 '  style={{padding:"0px",margin:'0px'}}>
                        <div className='companyimage'>
                            <img src='/aboutimages/directbord.jpg'></img>
                            <div className='company-head'>
                                <h1>Location</h1>
                                <>
                                    <a className="read-more-link" onClick={() => { setReadMore(!readMore) }}>
                                        
                                        <Button>{linkName}</Button>
                                        {/* <h2>{linkName}</h2> */}
                                        
                                        
                                        </a>
                                    {readMore && extraContent}
                                </>                               
                            </div>
                            </div>
                        </div>
                        <div className='col-md-4 col-sm-12  ' style={{padding:"0px"}} >
<div className='companyimage'>
                            <img src='/aboutimages/directbord1.jpg'></img>
                            <div className='company-head'>
                                <h1>Technology</h1>
                                <>
                                    <a className="read-more-link" onClick={() => { setReadMore2(!readMore2) }}>
                                        
                                        <Button>{linkName2}</Button>
                                        {/* <h2>{linkName}</h2> */}
                                        
                                        
                                        </a>
                                    {readMore2 && extraContent2}
                                </> 
                            </div>
                            </div>
                        </div>
                        <div className='col-md-4 col-sm-12  '  style={{padding:"0px"}}>
                        <div className='companyimage'>
                            <img src='/aboutimages/directbord2.jpg'></img>
                            <div className='company-head'>
                                <h1>Quality</h1>
                                <>
                                    <a className="read-more-link" onClick={() => { setReadMore3(!readMore3) }}>
                                        
                                        <Button>{linkName3}</Button>
                                        {/* <h2>{linkName}</h2> */}
                                        
                                        
                                        </a>
                                    {readMore3 && extraContent3}
                                </> 
                            </div>
                            </div>

                        </div>
                    </div>
                </div>

            </div>
            <div className='row company-last-image my-5' >
                <div className='col-lg-4 col-md-12 col-sm-12' style={{ padding: '2px', margin: '0px' }}>

                    <img src='/aboutimages/company1.jpg'></img>

                </div>
                <div className='col-lg-4 col-md-12  col-sm-12' style={{ padding: '2px', margin: '0px' }}>

                    <img src='/aboutimages/company2.jpg'></img>
                </div>
                <div className='col-lg-4 col-md-12 col-sm-12' style={{ padding: '2px', margin: '0px' }}>
                    <img src='/aboutimages/company3.jpg'></img>

                </div>
            </div>
        </>
    )
}

export default Aboutboard
