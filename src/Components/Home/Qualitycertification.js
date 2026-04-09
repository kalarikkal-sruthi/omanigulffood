import React, { useRef, useEffect, useState } from 'react';
import { Button, Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom';

function Qualitycertification() {
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
    <div>
      <div className='section'>
        <div className={`about ${isVisible ? 'animate' : ''}`} ref={ref}>
          <Container>
            <Row>
              <Col md={8}>
             <div className='qualification'>
                  <h1 style={{ textAlign: "start", fontFamily: 'Colus Regular' }}>QUALITY CERTIFICATION</h1>
                </div>
                <div className='about-para'>
                  <p style={{ textAlign: "start" }}>Our Manufacturing plants are up-to-date with most important certification in our industry</p>
                </div>
                <div className='viewmorebutton' style={{ textAlign: "start" }}>
                  <Link to="/quality-certification"><Button>READ MORE</Button></Link>
                </div>
              </Col>
              <Col md={4}>
               <Row>
                  <Col><img src='images/qualification.jpg'></img></Col>
                </Row>
              </Col>
            </Row>
          </Container>
        </div>
      </div>

    </div>
  )
}

export default Qualitycertification