
import React, { useRef, useEffect, useState } from 'react';
import { Button, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom';

function Ogfcproducts() {

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
                        <h1 style={{ fontFamily: 'Colus Regular' }}>FROM THE HOUSE OF OGFC</h1>
                    </div>
                    <div className='about-para'>
                        <p>Within a relatively short span of time, OGFC built 35 Brand of vibrant portfolio achieved impressive market standup</p>
                    </div>
                    <div className='productlist'>
                        <ul class="menu">
                            <Link to="/palmolein-details">  <li className='nonoilp'><a href="#">
                                <img src="images/products/palm.jpg"></img>


                                <h6>PALM OLEIN
                                    {/* <button className='seeproducts'>SEE PRODUCTS</button> */}

                                </h6>


                            </a>


                            </li></Link>
                            <Link to="/sunfloweroil-details">   <li className='nonoilp'>
                                <a href="#"><img src="images/products/Sunfloweroilimage.jpg"></img>
                                    <h6>SUNFLOWER OIL</h6>

                                    {/* <button className='seeproducts hide-me '></button> */}
                                </a>
                            </li></Link>
                            <Link to="/cornoil-details">    <li className='nonoilp'><a href="#"><img src="images/products/Cornoilimage.jpg"></img>
                                <h6>CORN OIL</h6>
                            </a></li></Link>
                            <Link to="/cooking-oil"> <li className='nonoilp'><a href="#"><img src="images/products/bi.jpg"></img>

                                <h6>COOKING OIL</h6>
                            </a></li></Link>
                            <Link to="/shortening">  <li className='nonoilp'><a href="#"><img src="images/products/shortening.jpg"></img>

                                <h6>SHORTENING</h6>
                            </a></li></Link>
                            {/* <li class="bg"><img src="images/products/palm.jpg"></img></li> */}
                        </ul>

                    </div>

                    {/* <div className='viewmorebutton'>
                        <Button>READ MORE</Button>
                    </div> */}

                </Container>

            </div>


        </div>
    )
}

export default Ogfcproducts