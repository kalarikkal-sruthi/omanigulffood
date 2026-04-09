import React from 'react'
import { useState } from 'react';

import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import '../Main.css'
import { Link, useNavigate } from 'react-router-dom';

function Topbar() {
  const navigate = useNavigate()
  const [showDropdown, setShowDropdown] = useState(false);


  const [showDropdownsecond, setShowDropdownsecond] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);

  const handleMouseEnter = () => {
    setShowDropdown(true);

  };
  const handleMouseLeave = () => {
    setShowDropdown(false);
  };

  const handleMouseEntersecond = () => {
    setShowDropdownsecond(true);

  };
  const handleMouseLeavesecond = () => {
    setShowDropdownsecond(false);
  };
  const handleToggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  return (
    <div>

      <Navbar className="navbar-background fixed-top w-100" expand="lg" >
        <Container fluid>
          <Navbar.Brand className='logo'>
            <Link to="/"> <img src='/images/logomain.png'></img></Link>

          </Navbar.Brand>
          <Navbar.Toggle onClick={handleToggleSidebar} aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">

            <Nav className="navlinks ms-auto">
              {/* <Nav.Link href="#home">HOME</Nav.Link> */}

              <div class="dropdown">
                <Link to=""><button class="dropbtn">ABOUT OGFC</button></Link>
                <div class="dropdown-content">
                  <Link to="/about-us">ABOUT US</Link>
                  <Link to="/board-of-directors"> BOARD OF DIRECTORS  </Link>
                  <Link to="/mission-quality">MISSION AND QUALITY MANAGEMENT</Link>
                  <Link to="/quality-certification">CERTIFICATIONS</Link>
                </div>
              </div>
              <Link to="/importexport">IMPORT & EXPORT</Link>
              <div class="dropdown">
                <Link to="/ourproduct"><button class="dropbtn">PRODUCTS</button></Link>
                <div class="dropdown-content">
                  <Link to="/oil-products">OIL PRODUCTS</Link>
                  <Link to="/non-oilproducts">NON-OIL PRODUCTS </Link>
                </div>
              </div>
              {/* <div class="drop-box nav-item dropdown">
                <Link to="/" id="basic-nav-dropdown" aria-expanded="false" role="button" class="dropdown-toggle nav-link" tabindex="0" href="#">
                PRODUCTS  
                </Link>
                <div aria-labelledby="basic-nav-dropdown" data-bs-popper="static" class="dropdown-menu">
                  <Link to="/" data-rr-ui-dropdown-item="" class="dropdown-item" role="button" tabindex="0">OIL PRODUCTS</Link>
                  <Link to="/" data-rr-ui-dropdown-item="" class="dropdown-item" role="button" tabindex="0">NON-OIL PRODUCTS</Link>
                </div>
              </div> */}
              {/* <NavDropdown onClick={() => navigate("/ourproduct")}
                show={showDropdown}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}

                title="PRODUCTS" id="basic-nav-dropdown" className='drop-box'>
                <>
                  <NavDropdown.Item href="">OIL PRODUCTS</NavDropdown.Item>

                  <NavDropdown.Item href="">   
                 
            NON-OIL PRODUCTS
                  </NavDropdown.Item></>
              </NavDropdown> */}
              <Link to="/private-brands">PRIVATE BRANDS</Link>
              <Link to="/file/ogfc-brochure.pdf" target="_blank" download>BROCHURE</Link>
              <div class="dropdown">
                <Link to=""><button class="dropbtn">HEALTH TIPS & RECIPES</button></Link>
                <div class="dropdown-content">
                  <Link to="/health-tips">HEALTH TIPS</Link>
                  <Link to="/recipe">RECIPES </Link>
                </div>
              </div>
              {/* <NavDropdown
                show={showDropdownsecond}
                onMouseEnter={handleMouseEntersecond}
                onMouseLeave={handleMouseLeavesecond}
                title="HEALTH TIPS & RECIPES " id="basic-nav-dropdown" className='drop-box'>
                <NavDropdown.Item href="">HEALTH TIPS</NavDropdown.Item>
             <Link to="/recipe">RECIPES</Link>
              </NavDropdown> */}
              <Link to="/careers">CAREERS</Link>
              <Link to="/gallery">GALLERY</Link>
              <Link to="/contact-us">CONTACT US</Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div className={`sidebar ${showSidebar ? "navbar" : ""}`}>
        <Nav defaultActiveKey="/" className="flex-column">
          <Nav.Link href="">Link 1</Nav.Link>
          <Nav.Link href="">Link 2</Nav.Link>
          <Nav.Link href="">Link 3</Nav.Link>
        </Nav>
      </div>
    </div >
  )
}

export default Topbar