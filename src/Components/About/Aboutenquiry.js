import React from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Aboutenquiry() {
  return (
    <div className='enquiryform'>
      <img src='/aboutimages/enquirybutton.jpg'></img>

      <div className='enquiry-para'>
        <div className='container '>

          <div className='row '>
            <div className='col-md-8 col-lg-8' >
              <div>
                <p>OGFC ADDS LIFE TO LIFE !</p>
                <p>SUPERIOR QUALITY OIL FOR A HEALTHY LIFE !</p>
              </div>
            </div>
            <div className='col-md-4 col-lg-4 m-auto'>
              <div className='contact-enquirybtn'>
                <Link to="/contact"><Button variant="warning">ENQUIRE NOW</Button></Link> </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Aboutenquiry
