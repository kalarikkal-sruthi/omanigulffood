import React, { useRef, useEffect, useState } from 'react';
import { Button, Container } from 'react-bootstrap'
import {Col,Row} from 'react-bootstrap'

function Newsandevents() {
    const ref = useRef();
    const [isVisible, setIsVisible] = useState(false);
  
    useEffect(() => {
      function handleScroll() {
        const top = ref.current.getBoundingClientRect().top;
        setIsVisible(top < window.innerHeight);
      }
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);

  return (
     <div className='section'>
      <div className={`about ${isVisible ? 'animate' : ''}`} ref={ref}>
       
          <div className='about-header'>
            <h1 style={{fontFamily: 'Colus Regular'}} >OUR NEWS</h1>
          </div>
          {/*  */}

           <Row className='newsmain'>
           
            <Col xs={12} md={3}>  
            <div className='nbox'>
                <img src='images/news/1.jpg'></img>
                <p>OVOD Participate Gulf Food Exhibition on 13th Feb - 17 Feb in Dubai</p>
            </div>
            
            </Col>
            <Col xs={12} md={3}>  
            <div className='nbox'>
                <img src='images/news/2.jpg'></img>
                <p>Quality Leadership Award @ The Middle East Quality Leadership Awards</p>
            </div>
            
            </Col>
            <Col xs={12} md={3}>  
            <div className='nbox'>
                <img src='images/news/3.jpg'></img>
                <p>Meeting with Mr.Thomas Mielke , Managing Director, Oil World</p>
            </div>
            
            </Col>
            <Col xs={12} md={3}>  
            <div className='nbox'>
                <img src='images/news/4.jpg'></img>
                <p>OVOD Participate Gulf Food Exhibition on 16th Feb - 20 Feb in Dubai</p>
            </div>
            
            </Col>
            <div className='viewmorebutton'>
            <Button>VIEW MORE</Button>
          </div>
           </Row>
         

        
      </div>


    </div>
  )
}

export default Newsandevents