import React, { useRef, useEffect, useState } from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Productsdispaly() {
  const options = {
    margin: 30,
    responsiveClass: true,
    nav: false,
    dots: true,
    autoplay: true,
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
        items: 3,
      },
      1000: {
        items: 5,

      }
    },
  }

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
    <div className='mt-2'>
      <Container>
        <div className={`about ${isVisible ? 'animate' : ''}`} ref={ref}>
          <div >

            <OwlCarousel className='owl-theme m-1' {...options}>
             <Link to="/oil-products"> 
             <div class='item'>

                <div className='boxproduct'>

                  <img src="images/oilproducts/AL BARAKAT PALM 20L.jpg"></img>

                </div>

              </div></Link>


              <Link to="/oil-products">  <div class='item'>
                <div className='boxproduct'>

                  <img src="images/oilproducts/SUNDROPS 17L.jpg"></img>

                </div>
              </div></Link>
              <Link to="/oil-products">  <div class='item'>
                <div className='boxproduct'>

                  <img src="images/oilproducts/BAHJAH CORN OIL 20L.jpg"></img>

                </div>
              </div></Link>
              <Link to="/oil-products"><div class='item'>
                <div className='boxproduct'>

                  <img src="images/oilproducts/AL BARAKAT 4L(cooking).jpg"></img>

                </div>
              </div>
              </Link>
              <Link to="/oil-products"><div class='item'>
                <div className='boxproduct'>

                  <img src="images/oilproducts/KAREEM CORNBLEND OIL 1P8L.jpg"></img>

                </div>
              </div></Link>
              <Link to="/oil-products">  <div class='item'>
                <div className='boxproduct'>

                  <img src="images/oilproducts/AL WAHA 1P5L.jpg"></img>

                </div>
              </div></Link>
              <Link to="/oil-products"><div class='item'>
                <div className='boxproduct'>

                  <img src="images/oilproducts/A'SAFWAH GHEE 16L.jpg"></img>

                </div>
              </div>
              </Link>
              <Link to="/oil-products"> <div class='item'>
                <div className='boxproduct'>

                  <img src="images/oilproducts/Zain Shortening 48-50 copy.jpg" style={{ height: '215px' }}></img>

                </div>
              </div>
              </Link>

            </OwlCarousel>
          </div>
        </div>
      </Container>

    </div>
  )
}

export default Productsdispaly
