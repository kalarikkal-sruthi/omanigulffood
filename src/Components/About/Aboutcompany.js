import React, { useRef, useEffect, useState } from 'react';
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom';

function Aboutcompany() {


  return (
    <div >

      <div className='aboutcompanyhead'>
        <div className='aboutcompany'>
          <div className='container'>

            <div className='row'>

              <div className='col-md-5'>
                <div className='about-company-head'>
                  <h1 >Trusted By More Than 300+ Popular Private Labels Across Gulf Region.</h1>
                  <Link to="/ourproduct">

                    <Button className='my-2'>DISCOVER NOW</Button></Link>
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
  )
}

export default Aboutcompany
