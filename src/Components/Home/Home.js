import React from 'react'
import Topbar from '../Includes/Topbar'
import Banner from './Banner'
// import About from './About'
import Ogfcproducts from './Ogfcproducts'
import Qualitycertification from './Qualitycertification'
import Productbrand from './Productbrand'
import Productsdispaly from './Productsdispaly'
import Productnonoil from './Productnonoil'
import Newsandevents from './Newsandevents'
import Footer from '../Includes/Footer'
import Homeabout from './Homeabout'
import Homeslidercontent from './Homeslidercontent'

function Home() {
  return (
    <div>
      <Topbar />
      <Banner />
      <Homeslidercontent />
      <Homeabout />
      <Ogfcproducts />
      <Qualitycertification />
      <Productbrand />
      <Productsdispaly />
      <Productnonoil />
      <Newsandevents />
      <Footer />
    </div>
  )
}

export default Home
