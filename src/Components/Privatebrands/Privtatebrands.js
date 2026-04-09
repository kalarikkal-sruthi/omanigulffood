import React from 'react'
import Topbar from '../Includes/Topbar'
import { Carousel, Container,Button } from 'react-bootstrap';
import Aboutogfc from '../About/Aboutogfc';
import Aboutcompany from '../About/Aboutcompany';
import Aboutenquiry from '../About/Aboutenquiry';

import Footer from '../Includes/Footer';

function Privtatebrands() {
  return (
    <div>
<Topbar />
<Carousel className="slider  private">
    <Carousel.Item>
        <img   className="d-block w-100 full zoom" src="/privatebrands/PRIVATE BRANDS.jpg" alt="Slide 1" />
        <div className='container'>
            <div className="carousel-caption caption-left">

                <h1 style={{color: '#007825'}} className='linedown'>PRIVATE <br></br>
                      BRANDS

                </h1>
                <p className='linedown' style={{color:'#000',fontWeight:'600'}}>We produce and sell a comprehensive portfolio of private label,<br></br> Its presents an opportunity to address and satisfy emerging consumer needs<br></br></p>
               
            </div>
            <div className='private-sub carousel-caption caption-left'>
            <h5 className='linedown' >
       

300+ ADMIRING BRANDS ACROSS GCC & AFRICA

            </h5>
            </div>
          
        </div>

    </Carousel.Item>

</Carousel>
<div className='private-section' style={{background:'#ffe3c5'}}>
<div className='container py-5'>
    
             <div className='row private-brands'>
                <div className='col-md-2'>
              <img   src="/privatebrands/1.jpg"></img>
                </div>
                <div className='col-md-2'>
              <img   src="/privatebrands/2.jpg"></img>
                </div>
                <div className='col-md-2'>
              <img src="/privatebrands/3.jpg"></img>
                </div>
                <div className='col-md-2'>
              <img  src="/privatebrands/4.jpg"></img>
                </div>
                <div className='col-md-2'>
              <img  src="/privatebrands/5.jpg"></img>
                </div>
                <div className='col-md-2'>
              <img  src="/privatebrands/6.jpg"></img>
                </div>
            </div>


            <div className='row private-brands' >
                <div className='col-md-2'>
              <img   src="/privatebrands/7.jpg"></img>
                </div>
                <div className='col-md-2'>
              <img   src="/privatebrands/8.jpg"></img>
                </div>
                <div className='col-md-2'>
              <img  src="/privatebrands/9.jpg"></img>
                </div>
                <div className='col-md-2'>
              <img  src="/privatebrands/10.jpg"></img>
                </div>
                <div className='col-md-2'>
              <img  src="/privatebrands/11.jpg"></img>
                </div>
                <div className='col-md-2'>
              <img  src="/privatebrands/12.jpg"></img>
                </div>
            </div>

            
            <div className='row private-brands'>
                <div className='col-md-2'>
              <img   src="/privatebrands/13.jpg"></img>
                </div>
                <div className='col-md-2'>
              <img   src="/privatebrands/14.jpg"></img>
                </div>
                <div className='col-md-2'>
              <img  src="/privatebrands/15.jpg"></img>
                </div>
                <div className='col-md-2'>
              <img  src="/privatebrands/16.jpg"></img>
                </div>
                <div className='col-md-2'>
              <img  src="/privatebrands/17.jpg"></img>
                </div>
                <div className='col-md-2'>
              <img  src="/privatebrands/18.jpg"></img>
                </div>
            </div>

            
            <div className='row private-brands'>
                <div className='col-md-2'>
              <img   src="/privatebrands/19.jpg"></img>
                </div>
                <div className='col-md-2'>
              <img   src="/privatebrands/20.jpg"></img>
                </div>
                <div className='col-md-2'>
              <img  src="/privatebrands/21.jpg"></img>
                </div>
                <div className='col-md-2'>
              <img  src="/privatebrands/22.jpg"></img>
                </div>
                <div className='col-md-2'>
              <img  src="/privatebrands/23.jpg"></img>
                </div>
                <div className='col-md-2'>
              <img  src="/privatebrands/24.jpg"></img>
                </div>
            </div>


</div>
<Aboutcompany />
<Aboutenquiry />
<Footer />
{/* <Aboutogfcfooter /> */}
</div>
    </div>
  )
}

export default Privtatebrands