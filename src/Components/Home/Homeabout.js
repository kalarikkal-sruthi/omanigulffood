import React, { useRef, useEffect, useState } from 'react';
import { Button, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom';

function Homeabout() {
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
          <div className='about-header'>
            <h1 style={{fontFamily: 'Colus Regular'}} >ABOUT OGFC</h1>
          </div>
          <div className='about-para'>
            <p>Omani Gulf Food Company (L.L.C) is a leading oil manufacturer across gulf region with active footprints across KSA/UAE/OMAN and Africa with commendable brand recall and consumer choice and promoted by three prominent business leaders in Oman - Dhofar Food Industries, Dhofar Insurance Co. and Dhofar International Development and Investments Holding Co..</p>
          </div>
          <div className='viewmorebutton'>
            <Link to="/about-us"><Button>READ MORE</Button></Link>
          </div>

        </Container>

      </div>


    </div>
  )
}

export default Homeabout