import React, { useState } from 'react';
import { Carousel, Container } from 'react-bootstrap';
import '../About.css'
import Boardslider from './Boardslider.';

import Boardabout from './Boardabout';
import '../board.css'
import Aboutenquiry from '../About/Aboutenquiry';
import Boardclient from './Boardclient';
import Topbar from '../Includes/Topbar';
import Footer from '../Includes/Footer';

function Boardofdirectors() {


  return (
    <div>
      <Topbar />
      <Boardslider />
      <Boardabout />
      <Boardclient />
      <Aboutenquiry />
      <Footer />
      {/* <Aboutogfcfooter /> */}
    </div>
  );
}

export default Boardofdirectors;