import React, { useRef, useEffect, useState } from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Productnonoil() {
  const options = {
    margin: 0,
    responsiveClass: true,
    nav: false,
    dots: false,
    autoplay: false,
    // navText: ["Prev", "Next"],

    smartSpeed: 1000,
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 1,
      },
      600: {
        items: 2,
      },
      700: {
        items: 4,
      },
      1000: {
        items: 4,

      }
    },
  };

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
      <div className={`about ${isVisible ? 'animate' : ''}`} ref={ref}>
        <div >
          <h3 className="nonoil" style={{ fontFamily: 'Colus Regular' }}>NON-OIL PRODUCTS</h3>
          <OwlCarousel className='owl-theme' {...options}>
            <div class='item'>
              <div className='boxproduct'>
              <Link to="/non-oilproducts"> <img src="images/nonoilproducts/nonoil1.jpg"></img></Link> 
            </div>
            </div>
            <div class='item'>
              <div className='boxproduct'>
              <Link to="/non-oilproducts">  <img src="images/nonoilproducts/nonoil2.jpg"></img></Link> 
              </div>
            </div>
            <div class='item'>
              <div className='boxproduct'>
              <Link to="/non-oilproducts">  <img src="images/nonoilproducts/nonoil3.jpg"></img></Link> 
              </div>
            </div>
            <div class='item'>
              <div className='boxproduct'>
              <Link to="/non-oilproducts">     <img src="images/nonoilproducts/nonoil4.jpg"></img></Link> 
              </div>
            </div>
          {/* <div class='item'>
              <div className='boxproduct'>
              <Link to="/non-oilproducts">  <img src="images/nonoilproducts/1.jpg"></img></Link> 
              </div>
            </div>
            <div class='item'>
              <div className='boxproduct'>
              <Link to="/non-oilproducts">  <img src="images/nonoilproducts/2.jpg"></img></Link> 
              </div>
            </div>
            <div class='item'>
              <div className='boxproduct'>
              <Link to="/non-oilproducts">   <img src="images/nonoilproducts/3.jpg"></img></Link> 
              </div>
            </div>
            <div class='item'>
              <div className='boxproduct'>
              <Link to="/non-oilproducts">     <img src="images/nonoilproducts/4.jpg" style={{ height: '215px' }}></img></Link> 
              </div>
            </div> */}
          </OwlCarousel>
        </div>
      </div>
    </div>
  )
}

export default Productnonoil
