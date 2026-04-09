
import React, { useRef, useEffect, useState } from 'react';
import { Row, Col, Button } from 'react-bootstrap';



function Products() {
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
  }, [])
  return (
    <div class="parallax">
      <div class="parallax__bg"></div>
      <div class="parallax__content">
        <div className={`about ${isVisible ? 'animate' : ''}`} ref={ref}>
          <div className='about-header'>
            <h2>OGFC Services</h2>
          </div>
          <Row className='px-5 my-4 mx-0'>
            <Col md={4} >
              <div className='box'>
                <h4 className='p-1'>Quality Certification</h4>
                <p className='p-3'>
                  {/* <IconName /> */}

                  ISO 9001 Quality Management Systems
                  ISO 14001 Environment Management Systems
                  ISO 22000 Food Safety Management Systems (HACCP)</p>
              </div>

            </Col>
            <Col md={4} m={0}>
              <div className='box'>
                <h4 className='p-1'>About OMAN/DHOFAR</h4>
                <p className='p-3'>
                  {/* <IconName /> */}

                  Welcome to the land of frankincense where beauty of nature surrounds the place with various green mountains with pleasant weather throughout the year.</p>
              </div>
            </Col>
            <Col md={4} m={0}>
              <div className='box' style={{ height: '180px' }}>
                <h4 className='p-1'>Import & Export</h4>
                <p className='p-3'>
                  {/* <IconName /> */}

                  Raw materials like Crude & Refined Palm Oil Products, Sunflower Oil, Corn Oil, Soya Oil, Canola Oil and other vegetable oil products.</p>
              </div>
            </Col>

            {/* 
            <div className='viewmorebutton'>
        <Button>View More</Button>
     </div> */}
          </Row>
        </div>
      </div>
      {/* <div class="parallax__content">
      <h1>Parallax Effect Example</h1>
      <p>This is some content that will move at a different speed than the background as you scroll the page.</p>
    </div> */}
    </div>
  )
}

export default Products