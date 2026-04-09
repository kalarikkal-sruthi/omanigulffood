import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { useState } from 'react';

function Boardclient() {

    const [showPopupk, setShowPopupk] = useState(false);
    const [showPopupsa, setShowPopupsa] = useState(false);
    const [showPopupst, setShowPopupst] = useState(false);
    const [showPopupoa, setShowPopupoa] = useState(false);
    const [showPopupsr, setShowPopupsr] = useState(false);
    

  const handleClickk = () => {
    setShowPopupk(true);
    setShowPopupsa(false);
    setShowPopupst(false);
    setShowPopupoa(false);
    setShowPopupsr(false);
    
  };
  const handleClicksa = () => {
    setShowPopupk(false);

    setShowPopupst(false);
    setShowPopupoa(false);
    setShowPopupsr(false);
    setShowPopupsa(true);
  };
  const handleClickst = () => {
    setShowPopupk(false);

    setShowPopupst(true);
    setShowPopupoa(false);
    setShowPopupsr(false);
    setShowPopupsa(false);
   
  };
  const handleClickoa = () => {
    setShowPopupk(false);

    setShowPopupst(false);
    setShowPopupoa(true);
    setShowPopupsr(false);
    setShowPopupsa(false);
  };
  const handleClicksr = () => {
    setShowPopupk(false);

    setShowPopupst(false);
    setShowPopupoa(false);
    setShowPopupsr(true);
    setShowPopupsa(false);
  };



    return (
        <div className="client">

            <img className='client-banner' src="/board/clientback.jpg"></img>

            <div className='clienimages'>
                <Container>
                    <Row className='p-0 m-0 '>
                        <Col xs={4} md={4} className='divname'>
                            <img   onClick={handleClickk} src="/board/img-one.jpg" ></img>
                            {showPopupk && (
        <div className="boardpopup">
         <div className='top'></div>
          <p>Khalid Mustahil Ahmed Al Mashani is the Chairman of Bank Muscat. Sheikh Khalid has a Masters Degree in Finance from the Oxford University, U.K. He is also a Board member of Dhofar International Dev. & Investment Holding Co. SAOG.(DIDIC) and Dhofar Cattle Feed Co.SAOG (DCF).</p>
          <button onClick={() => setShowPopupk(false)}>Close</button>
          <div className='top'></div>
        </div>
      )}


                        </Col>
                        <Col xs={4} md={4} className='divname '>
                            <img onClick={handleClicksa} src="/board/img-two.jpg" ></img>
                            {showPopupsa && (
        <div className="boardpopup">
           <div className='top'></div>
          <p>Salim Abdullah Faraj Al Awadi is a noted industrialist in Oman and has Masters Degree in Finance from U.K. He is the Chairman of Dhofar Poultry Company SAOG and Director in Dhofar International Dev & Investment Holding Co. SAOG (DIDIC) & Dhofar Cattle Feed SAOG. He is also the Deputy CEO for Al Omaniya Financial Services SAOG.</p>
          <button onClick={() => setShowPopupsa(false)}>Close</button>
          <div className='top'></div>
        </div>
      )}


                        </Col>
                        <Col xs={4} md={4} className='divname '>
                            <img onClick={handleClickst} src="/board/img3.jpg" ></img>

                            {showPopupst && (
        <div className="boardpopup">
           <div className='top'></div>
          <p>Salim Taman Musallam Al Maashani is a Graduate in Business Administration from Western International University, Arizona. He is a noted personality in the Industrial & Service Sector in Sultanate of Oman and was in the Director Board of Bank Muscat SAOG, Oman International Bank, Dhofar Insurance Co.SAOG, Dhofar International Dev. & Investment Holding Co. SAOG . He is also the Chairman of Integration Capital & Trade LLC and MD&CEO of Dhofar Poultry SAOG.</p>
          <button onClick={() => setShowPopupst(false)}>Close</button>
          <div className='top'></div>
        </div>
      )}

                        </Col>
                    </Row>
                    <Row className='p-0 m-0 justify-content-center'>
                        
                        <Col xs={4} md={4} className='divname '>
                            <img onClick={handleClickoa} src="/board/img-four.jpg" ></img>

                            {showPopupoa && (
        <div className="boardpopup-data">
           <div className='top'></div>
          <p>Omar Ahmed Abdullah Al Sheikh is a noted industrialist in Oman and is serving as Director in Dhofar International Dev & Investment Holding Co. SAOG (DIDIC), and many other industrial establishments. He is also the Deputy CEO of Dhofar Insurance Company SAOG</p>
          <button onClick={() => setShowPopupoa(false)}>Close</button>
          <div className='top'></div>
        </div>
      )}
                        </Col>


                        <Col xs={4} md={4} className='divname'>
                            <img onClick={handleClicksr}  src="/board/img-five.jpg" ></img>


                            

{showPopupsr && (
<div className="boardpopup-data">
<div className='top'></div>
<p>Salim Rabia Juma An Bait Arafa has Higher Diploma in Legal Studies from Sidi Mohammed Bin Abdullah University (USMBA), Kingdom of Morocco. He is working as counselor at Ministry of foreign affairs and has held various positions in Oman embassies abroad.</p>
<button onClick={() => setShowPopupsr(false)}>Close</button>
<div className='top'></div>
</div>
)}

                        </Col>
                        {/* <Col xs={4} md={4} className='divname'>
                            <img src="/board/img6.jpg" ></img>


                        </Col> */}
                    </Row>
                </Container >
            </div>



        </div >
    )
}

export default Boardclient
