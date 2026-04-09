import React, { useRef, useEffect, useState } from 'react';
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom';

function Aboutmission() {

  return (
    <div>
      <div className='about-mission'>
        <div className='container'>
          <div className='row'>


            <div className='about-company-mission'>
              <div className='col-md-7 col-lg-7'>
                <h1>Mission &<br></br>
                  Quality Management</h1>
                <p>Our culture is shaped by adherence to a set of core values that cover all our stakeholders and help us achieve our ambitious vision and mission.</p>
               <Link to="/mission-quality"><Button >READ MORE</Button></Link>
              </div>
            </div>
            <div className='col-md-5 col-lg-5'>

            </div>

          </div>
        </div>
      </div>
    </div >
  )
}

export default Aboutmission
