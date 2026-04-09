
import React, { useRef, useEffect, useState } from 'react';
import { Container, Button } from 'react-bootstrap';
import '../fonts.css'
function Homeslidercontent() {
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
        <Container>
          <div className="image-text">
            {/* <h6 className='linedown'>OMANI GULF FOOD COMPANY</h6> */}
            <img
              className=""
              src='images/slider-below-logo.png'
              alt="Third slide"
            />
            <h6 style={{ lineHeight: "80px", wordSpacing: "6px", fontSize: '45px', fontFamily: 'Colus Regular' }} className='linedown mb-3 '>
              WELCOME TO
              <br></br>
              <span style={{ fontSize: '65px' }}>OMANI GULF FOOD COMPANY</span></h6>
          </div >
        </Container>

      </div>


    </div>
  )
}

export default Homeslidercontent
