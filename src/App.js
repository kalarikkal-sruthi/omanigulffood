import React from "react";
import { useState, useEffect } from "react";
// import About from "./Components/About";
import { Routes, Route } from 'react-router-dom'
import Banner from "./Components/Home/Banner";
import Topbar from "./Components/Includes/Topbar";
import Footer from "./Components/Includes/Footer";
import Products from "./Components/Products";
import Productsdispaly from "./Components/Home/Productsdispaly";
import Productnonoil from "./Components/Home/Productnonoil";
import Productbrand from "./Components/Home/Productbrand";

import Ogfcproducts from "./Components/Home/Ogfcproducts";
import Qualitycertification from "./Components/Home/Qualitycertification";
import Newsandevents from "./Components/Home/Newsandevents";
import Home from "./Components/Home/Home";

import Boardofdirectors from "./Components/Boardofdirector/Boardofdirectors";
import Importexport from "./Components/Importexport/Importexport";
import Ourproduct from "./Components/Products/Ourproduct";
import Contact from "./Components/Contact/Contact";
import Nonoilproducts from "./Components/Products/Nonoilproducts";
import Aboutogfc from "./Components/About/Aboutogfc";

import Qualitymanagement from "./Components/MissionQuality/Qualitymanagement";
import Privtatebrands from "./Components/Privatebrands/Privtatebrands";
import Certification from "./Components/Certification/Certification";
import Oilproducts from "./Components/Products/Oilproducts"
import Recipes from "./Components/Healthandrecipe/Recipes";
import Healthtips from "./Components/Healthandrecipe/Healthtips";

import Careersmain from "./Components/Careersmain/Careersmain";
import Palmoilproductdetails from "./Components/Oilproductdetails.js/Palmoilproductdetails";
import Sunfloweroilproductdetails from "./Components/Oilproductdetails.js/Sunfloweroilproductdetails";
import Cornoil from "./Components/Oilproductdetails.js/Cornoil";
import Cornblendoil from "./Components/Oilproductdetails.js/Cornblendoil";
import Fryingoil from "./Components/Oilproductdetails.js/Fryingoil";
import Dfolein from "./Components/Oilproductdetails.js/Dfolein";
import Ghee from "./Components/Oilproductdetails.js/Ghee";
import Shortening from "./Components/Oilproductdetails.js/Shortening";
import Cookingoil from "./Components/Oilproductdetails.js/Cookingoil";
import Gallery from "./Components/Gallery/Gallery";


function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);
  return (

    <div >
      {
        loading ? (<div className="loader-container" >
          {/* <div className="spinner"></div> */}
        </div>) : (
          <div className="App">
            <Topbar />
            <Routes>
              <Route path='/' element={<Home />} ></Route>
            </Routes>
            <Routes>
              <Route path='/about-us' element={<Aboutogfc />}></Route>
            </Routes>
            <Routes>
              <Route path='/board-of-directors' element={<Boardofdirectors />}></Route>
            </Routes>
            <Routes>
              <Route path='/importexport' element={<Importexport />}></Route >
            </Routes>
            <Routes>
              <Route path='/ourproduct' element={<Ourproduct />}></Route >
            </Routes>
            <Routes>
              <Route path='/contact-us' element={<Contact />}></Route >
            </Routes>
            <Routes>
              <Route path='/oil-products' element={<Oilproducts />}></Route >
            </Routes>
            <Routes>
              <Route path='/non-oilproducts' element={<Nonoilproducts />}></Route >
            </Routes>
            <Routes>
              <Route path='/mission-quality' element={<Qualitymanagement />}></Route >
            </Routes>
            <Routes>
              <Route path='/private-brands' element={<Privtatebrands />}></Route >
            </Routes>
            <Routes>
              <Route path='/quality-certification' element={<Certification />}></Route >
            </Routes>
            <Routes>
              <Route path='/recipe' element={<Recipes />}></Route >
            </Routes>
            <Routes>
              <Route path='/health-tips' element={<Healthtips />}></Route >
            </Routes>
            <Routes>
              <Route path='/careers' element={<Careersmain />}></Route >
            </Routes>

            <Routes>
              <Route path='/palmolein-details' element={<Palmoilproductdetails />}></Route >
            </Routes>
            <Routes>
              <Route path='/sunfloweroil-details' element={<Sunfloweroilproductdetails />}></Route >
            </Routes>
            <Routes>
              <Route path='/cornoil-details' element={<Cornoil />}></Route >
            </Routes>
            <Routes>
              <Route path='/cornblend-oil' element={<Cornblendoil />}></Route >
            </Routes>
            <Routes>
              <Route path='/frying-oil' element={<Fryingoil />}></Route >
            </Routes>
            <Routes>
              <Route path='/cooking-oil' element={<Cookingoil />}></Route >
            </Routes>
            <Routes>
              <Route path='/df-olein' element={<Dfolein />}></Route >
            </Routes>
            <Routes>
              <Route path='/ghee' element={<Ghee />}></Route >
            </Routes>
            <Routes>
              <Route path='/shortening' element={<Shortening />}></Route >
            </Routes>
            <Routes>
              <Route path='/gallery' element={<Gallery />}></Route >
            </Routes>

            {/* <Routes>
        <Route path='/cooking' element={<Cookingoil/>}></Route >
      </Routes> */}
          </div>

        )

      }
    </div>)
}

export default App;
