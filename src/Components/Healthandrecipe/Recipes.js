import { BiArrowToTop } from "react-icons/bi";
import React, { useRef, useEffect, useState } from 'react';
import Topbar from '../Includes/Topbar'
import Aboutcompany from '../About/Aboutcompany'
import Aboutenquiry from '../About/Aboutenquiry'
import { Link } from 'react-router-dom'
import { Button, Col, Row, Container } from 'react-bootstrap'
import HomeIcon from '@mui/icons-material/Home';
import AddIcCallIcon from '@mui/icons-material/AddIcCall';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import LanguageIcon from '@mui/icons-material/Language';
import { Accordion, Card } from 'react-bootstrap';
import { Carousel } from "react-bootstrap";
import Footer from "../Includes/Footer";
function Recipes() {

    const ref = useRef();
    const [isVisible, setIsVisible] = useState(false);
    const [showButton, setShowButton] = useState(false);

    const handleScroll = () => {
        if (window.pageYOffset > 100) {
            setShowButton(true);
        } else {
            setShowButton(false);
        }
    };

    const handleButtonClick = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    window.addEventListener('scroll', handleScroll);

    return (
        <div>
            <Topbar />
            <Carousel className="sliderimport">
                <Carousel.Item>
                    <img className="d-block w-100 full zoom" src="/recipes/recipe-banner.jpg" alt="Slide 1" />
                    <div className='container'>
                        <div className="carousel-caption caption-left">

                            <h1 className='linedown' style={{ color: "#000" }}>RECIPES

                            </h1>
                            {/* <p className='linedown' style={{color:"#000"}}>He who has health has hope, and
                <br></br>he who has hope has everything</p> */}

                        </div>
                    </div>

                </Carousel.Item>
            </Carousel>

            {/* <img className="" style={{ width: '100%' }} src="/recipes/recipes-slider.jpg"></img>/ */}
            <div className="container py-5 ">
                <div className="row">

                    <div className="col-md-5 recipes-img">
                        <img className="" style={{ width: '100%' }} src=" /recipes/recipe.jpg"></img>
                    </div>

                    <div className="col-md-7 px-5">
                        <h4 className="recipes-head">Arabian Chicken Mandi</h4>
                        <Accordion className="pb-4">
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>Ingredients</Accordion.Header>
                                <Accordion.Body className="px-5">
                                    <ul style={{ paddingLeft: '2rem' }}>
                                        <li>500 grams Chicken , with bones</li>
                                        <li>1 Onion , finely chopped</li>
                                        <li>1 Tomato</li>
                                        <li>3 Green Chillies</li>
                                        <li>1 tablespoon Ginger Garlic Paste</li>
                                        <li>3 Bay leaves (Tejpatta)</li>
                                        <li>1 teaspoon A’SAFWAH Ghee</li>
                                        <li>2 Cardamom (Elaichi) Pods/Seeds</li>
                                        <li>2 Cloves (Laung)</li>
                                        <li>1 teaspoon Whole Black Peppercorns</li>


                                        <li>2 tablespoons SAHI Cooking Oil</li>
                                        <li>2 tablespoons Butter (Salted) , softened</li>
                                        <li>Salt  to taste</li>
                                        <li>2 cups Basmati rice</li>
                                        <li>4 cups Water</li>
                                    </ul>
                                    <h4 className="inc-recipes">Ingredients for mandi spice powder:</h4>
                                    <ul style={{ paddingLeft: '2rem' }}>
                                        <li>1 tablespoon Cardamom (Elaichi) Pods/Seeds</li>
                                        <li>1 tablespoon Cloves (Laung)</li>
                                        <li>1/2 tablespoon Whole Black Peppercorns</li>
                                        <li>1/2 tablespoon Dry ginger powder</li>
                                        <li>2 Bay leaves (Tejpatta)</li>

                                    </ul>
                                </Accordion.Body>
                            </Accordion.Item>


                            <Accordion.Item eventKey="1">
                                <Accordion.Header>Instructions:</Accordion.Header>
                                <Accordion.Body className="px-5">
                                    <Accordion defaultActiveKey="0" flush>
                                        <Accordion.Item eventKey="0">
                                            <Accordion.Header>For mandi spice powder</Accordion.Header>
                                            <Accordion.Body>

                                                <ol>
                                                    <li>To make the Mandi spice powder, dry roast the cardamom pods, cloves, black pepper, nutmeg dry ginger powder and bay leaves in an on medium heat for 4-6 minutes.</li>
                                                    <li>Turn off the heat, and allow it to cool. </li>
                                                    <li>Transfer the spices in a mixer jar, and grind into a fine powder using a mixer grinder.</li>


                                                </ol>
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="1">
                                            <Accordion.Header>For the Chicken</Accordion.Header>
                                            <Accordion.Body>



                                                <ol>
                                                    <li>Heat a large saucepan on medium heat and add SAHI Cooking Oil.</li>
                                                    <li>Once the oil is hot, add finely chopped onion and sauté till translucent. This will take about 2-3 minutes.</li>
                                                    <li>To the softened onions, add the ginger paste and garlic paste and sauté till the raw smell goes away.</li>
                                                    <li>Next, add bay leaves, cinnamon, cardamom, cloves and black pepper and mix everything well.</li>
                                                    <li>In a mixer jar combine, tomato and green chillies and grind into a puree and add it to the pan.</li>
                                                    <li>When the oil starts to separate, add the chicken and mix. Add 4 cups of water and the Mandi spice powder according to your taste.   Mix, cover and let it cook for about 15 minutes. After 15 minutes, turn off the heat. </li>
                                                    <li>In a small mixing bowl, add soft butter and Mandi spice powder and some salt, mix well and keep aside. </li>
                                                    <li>Preheat the oven to 200 degrees centigrade. Remove the chicken from the stock and place it onto a baking tray and brush with butter and mandi spice powder mixture. </li>

                                                    <li>Bake for 20 to 25 minutes or until the skin of the chicken turns to a nice golden brown colour.</li>
                                                </ol>

                                            </Accordion.Body>
                                        </Accordion.Item>

                                        <Accordion.Item eventKey="2">
                                            <Accordion.Header>For the rice</Accordion.Header>
                                            <Accordion.Body>


                                                <ol>
                                                    <li>
                                                        Wash and soak basmati rice for at least 20 minutes.


                                                    </li>
                                                    <li>Heat olive oil in a large pan on medium heat, and fry the drained rice, stirring continuously for about 10 to 15 minutes. </li>
                                                    <li>Add this pan roasted rice to the chicken stock. Now slide a large piece of aluminium foil on top of the saucepan and then cover it with the lid. Cook the rice on medium low flame for about 10 minutes.</li>
                                                    <li>Remove the lid and check if there is any trace of water left. If water is left, then cover and cook for another 3 to 5 minutes. Now fluff the rice with a fork.</li>

                                                    <li>Take A’SAFWAH Ghee in a small bowl and place it in the middle of the rice.</li>
                                                    <li>Heat a piece of charcoal on direct flame until it is hot, this will take about 5 minutes.</li>

                                                    <li>Once the charcoal is burning hot, place it in the bowl of ghee that is in the rice. Immediately slide back the aluminium foil and secure with lid.</li>

                                                    <li>Open it only at the time of serving, as it gives a nice Smokey flavour to the rice. To serve, spread rice onto a large serving tray and place a piece of baked chicken on the top.</li>

                                                    <li>Serve Arabian Chicken Mandi with Raw Mango raita and pickled onions for a delicious weeknight dinner. </li>
                                                </ol>
                                            </Accordion.Body>
                                        </Accordion.Item>
                                    </Accordion>

                                </Accordion.Body>
                            </Accordion.Item>



                        </Accordion>
                        <hr></hr>
                        {/* secondaccordian */}
                        <h4 className="recipes-head">Kaak</h4>
                        <Accordion className="pb-4">
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>Ingredients</Accordion.Header>
                                <Accordion.Body className="px-5">
                                    <ul style={{ paddingLeft: '2rem' }}>


                                        <li>2.5 kg flour </li>
                                        <li>1 table spoon yeast</li>

                                        <li>2 table spoon mahlab (Also known as wild cherry pit, found in arab stores)</li>
                                        <li>2 tablespoon anise seed</li>


                                        <li>1 tablespoon Ginger Garlic Paste</li>


                                        <li>1 cup AL SAFA Vegetable Oil</li>
                                        <li>1 tablespoon black seeds</li>
                                        <li>1 tablespoon sesame</li>
                                        <li>3 cups of sugar</li>
                                        <li>Water</li>


                                    </ul>

                                </Accordion.Body>
                            </Accordion.Item>


                            <Accordion.Item eventKey="1">
                                <Accordion.Header>Instructions:</Accordion.Header>
                                <Accordion.Body className="px-5">


                                    <ol>
                                        <li>Take 3 cups of sugar, and dissolve them in ½ a cup of hot water</li>
                                        <li>Let the water cool until warm, and mix in the yeast. Let sit for a few minutes until frothy. </li>
                                        <li>Mix flour, mahlab, anise, melted butter, AL SAFA Vegetable Oil, black seeds, and sesame until a dough forms.</li>
                                        <li>After mixing, add ¼ a cup of water to the dough and mix until combined.</li>
                                        <li>Cut the dough into whatever shapes you desire, at about ½ inch thick</li>
                                        <li>Bake and enjoy!</li>


                                    </ol>
                                </Accordion.Body>
                            </Accordion.Item>




                        </Accordion>
                        <hr></hr>
                        {/* thirdslider */}
                        <h4 className="recipes-head">LambAnd Date Stew</h4>
                        <Accordion className="pb-4">
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>Ingredients</Accordion.Header>
                                <Accordion.Body className="px-5">
                                    <ul style={{ paddingLeft: '2rem' }}>




                                        <li>6 tablespoonSUNDROPS Sunflower Oil</li>
                                        <li>4 Onions, thinly sliced</li>
                                        <li>2 tablespoon finely chopped fresh root Ginger</li>
                                        <li>2kg Boneless lamb shoulder, cut into 5cm chunks</li>
                                        <li>4 tsp ground cumin</li>


                                        <li>2 tsp each Paprika and ground Coriander</li>
                                        <li>2 Cinnamon sticks</li>
                                        <li>850ml Pasta</li>
                                        <li>700g Sweet potatoes, cut into chunks</li>
                                        <li>350g Pitted dates</li>

                                    </ul>

                                </Accordion.Body>
                            </Accordion.Item>


                            <Accordion.Item eventKey="1">
                                <Accordion.Header>Instructions:</Accordion.Header>
                                <Accordion.Body className="px-5">


                                    <ol>
                                        <li>	Heat the SUNDROPS Sunflower Oil in a large, deep pan. Add the onions, then gently fry until softened, about 5 mins. Stir in the ginger, add the meat in batches, and then fry on all sides until lightly coloured. Return all the meat to the pan, stir in the spices and cinnamon sticks, then cook for 1 minutes.</li>
                                        <li>Add the pasta and 800ml water, then bring to the boil, stirring. Season well, then cover and simmer for 1½ hrs, until the lamb is tender. </li>
                                        <li>Add the sweet potatoes, stir well, cover again, then cook for 20 mins or until the potatoes are just tender. Stir in the dates and heat through for 5 mins. Taste and add more seasoning if necessary. To serve, spoon the tagine into a serving dish and scatter with the almonds and coriander.</li>


                                    </ol>
                                </Accordion.Body>
                            </Accordion.Item>



                        </Accordion>







                    </div>
                </div>

                {/* <div className="row">
                    <div className="col-md-12"><hr></hr></div>

                </div>

                <div className="row">
                    <div className="col-md-3 recipes-img">
                        <img className="" style={{ width: '100%' }} src=" /recipes/Recipe-Image.jpg"></img>
                    </div>
                    <div className="col-md-9 p-5">
                        <h4 className="recipes-head">Kaak</h4>
                        <Accordion>
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>Ingredients</Accordion.Header>
                                <Accordion.Body className="px-5">
                                    <ul style={{ paddingLeft: '2rem' }}>


                                        <li>2.5 kg flour </li>
                                        <li>1 tablespoon yeast</li>

                                        <li>2 tablespoonmahlab (Also known as wild cherry pit, found in arab stores)</li>
                                        <li>2 tablespoon anise seed</li>


                                        <li>1 tablespoon Ginger Garlic Paste</li>


                                        <li>1 cup AL SAFAVegetable Oil</li>
                                        <li>1 tablespoon black seeds</li>
                                        <li>1 tablespoon sesame</li>
                                        <li>3 cups of sugar</li>
                                        <li>Water</li>


                                    </ul>

                                </Accordion.Body>
                            </Accordion.Item>


                            <Accordion.Item eventKey="1">
                                <Accordion.Header>Instructions:</Accordion.Header>
                                <Accordion.Body className="px-5">


                                    <ol>
                                        <li>Take 3 cups of sugar, and dissolve them in ½ a cup of hot water</li>
                                        <li>Let the water cool until warm, and mix in the yeast. Let sit for a few minutes until frothy. </li>
                                        <li>Mix flour, mahlab, anise, melted butter, AL SAFAVegetable Oil, black seeds, and sesame until a dough forms.</li>
                                        <li>After mixing, add ¼ a cup of water to the dough and mix until combined.</li>
                                        <li>Cut the dough into whatever shapes you desire, at about ½ inch thick</li>
                                        <li>Bake and enjoy!</li>


                                    </ol>
                                </Accordion.Body>
                            </Accordion.Item>




                        </Accordion>
                        <Accordion>
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>Ingredients</Accordion.Header>
                                <Accordion.Body className="px-5">
                                    <ul style={{ paddingLeft: '2rem' }}>




                                        <li>6 tablespoonSUNDROPS Sunflower Oil</li>
                                        <li>4 Onions, thinly sliced</li>
                                        <li>2 tablespoon finely chopped fresh root Ginger</li>
                                        <li>2kg Boneless lamb shoulder, cut into 5cm chunks</li>
                                        <li>4 tsp ground cumin</li>


                                        <li>2 tsp each Paprika and ground Coriander</li>
                                        <li>2 Cinnamon sticks</li>
                                        <li>850ml Pasta</li>
                                        <li>700g Sweet potatoes, cut into chunks</li>
                                        <li>350g Pitted dates</li>

                                    </ul>

                                </Accordion.Body>
                            </Accordion.Item>


                            <Accordion.Item eventKey="1">
                                <Accordion.Header>Instructions:</Accordion.Header>
                                <Accordion.Body className="px-5">


                                    <ol>
                                        <li>	Heat the SUNDROPS Sunflower Oil in a large, deep pan. Add the onions, then gently fry until softened, about 5 mins. Stir in the ginger, add the meat in batches, and then fry on all sides until lightly coloured. Return all the meat to the pan, stir in the spices and cinnamon sticks, then cook for 1 minutes.</li>
                                        <li>Add the pasta and 800ml water, then bring to the boil, stirring. Season well, then cover and simmer for 1½ hrs, until the lamb is tender. </li>
                                        <li>Add the sweet potatoes, stir well, cover again, then cook for 20 mins or until the potatoes are just tender. Stir in the dates and heat through for 5 mins. Taste and add more seasoning if necessary. To serve, spoon the tagine into a serving dish and scatter with the almonds and coriander.</li>


                                    </ol>
                                </Accordion.Body>
                            </Accordion.Item>



                        </Accordion>



                    </div>
                </div>

 */}













                {/* <div className="row">
                    <div className="col-md-12"><hr></hr></div>

                </div>

                <div className="row">
                    <div className="col-md-3 recipes-img">
                        <img className="" style={{ width: '100%' }} src=" /recipes/Recipe-Image.jpg"></img>
                    </div>
                    <div className="col-md-9 p-5">
                        <h4 className="recipes-head">LambAnd Date Stew</h4>
                        <Accordion>
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>Ingredients</Accordion.Header>
                                <Accordion.Body className="px-5">
                                    <ul style={{ paddingLeft: '2rem' }}>




                                        <li>6 tablespoonSUNDROPS Sunflower Oil</li>
                                        <li>4 Onions, thinly sliced</li>
                                        <li>2 tablespoon finely chopped fresh root Ginger</li>
                                        <li>2kg Boneless lamb shoulder, cut into 5cm chunks</li>
                                        <li>4 tsp ground cumin</li>


                                        <li>2 tsp each Paprika and ground Coriander</li>
                                        <li>2 Cinnamon sticks</li>
                                        <li>850ml Pasta</li>
                                        <li>700g Sweet potatoes, cut into chunks</li>
                                        <li>350g Pitted dates</li>

                                    </ul>

                                </Accordion.Body>
                            </Accordion.Item>


                            <Accordion.Item eventKey="1">
                                <Accordion.Header>Instructions:</Accordion.Header>
                                <Accordion.Body className="px-5">


                                    <ol>
                                        <li>	Heat the SUNDROPS Sunflower Oil in a large, deep pan. Add the onions, then gently fry until softened, about 5 mins. Stir in the ginger, add the meat in batches, and then fry on all sides until lightly coloured. Return all the meat to the pan, stir in the spices and cinnamon sticks, then cook for 1 minutes.</li>
                                        <li>Add the pasta and 800ml water, then bring to the boil, stirring. Season well, then cover and simmer for 1½ hrs, until the lamb is tender. </li>
                                        <li>Add the sweet potatoes, stir well, cover again, then cook for 20 mins or until the potatoes are just tender. Stir in the dates and heat through for 5 mins. Taste and add more seasoning if necessary. To serve, spoon the tagine into a serving dish and scatter with the almonds and coriander.</li>


                                    </ol>
                                </Accordion.Body>
                            </Accordion.Item>



                        </Accordion>


                    </div>
                </div>
 */}









            </div>


            {/* <img style={{width:'100%'}} src="/recipes/recipes-brands.jpg"></img> */}
            <div>
                <div className='productcompny' style={{ backgroundColor: '#dfdfdf' }}>
                    <div className='' style={{
                        backgroundColor: '#fff', padding: '40px 0px'
                    }}>
                        < div className='container' >

                            <div className='row'>

                                <div className='col-md-5'>
                                    <div className='about-company-head'>
                                        <h1>Trusted By More Than 300+ Popular Private Labels Across Gulf Region.</h1>
                                        <Link to="/ourproduct"> <Button >DISCOVER NOW</Button></Link>
                                    </div>
                                </div>
                                <div className='col-md-7'>
                                    <ul className='aboutbrands'>
                                        <li><img src='/aboutimages/brand1.jpg'></img></li>
                                        <li><img src='/aboutimages/brand6.jpg'></img></li>
                                        <li><img src='/aboutimages/brand2.jpg'></img></li>
                                        <li><img src='/aboutimages/brand3.jpg'></img></li>
                                        <li><img src='/aboutimages/brand4.jpg'></img></li>
                                        <li><img src='/aboutimages/brand5.jpg'></img></li>
                                        <li><img src='/aboutimages/brand7.jpg'></img></li>
                                    </ul>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div >
            <Aboutenquiry />
            <Footer />
            {/* <div className="footerlist" style={{ background: "rgb(242 242 242)" }}>

                <Container>
                    <Row>
                        <Col xs={12} sm={12} md={4}>
                            <div className="footermain">
                                <img class="log" src="images/footer-sliderlogo.png" />
                                <img src="images/logofont.png"  ></img>

                            </div>
                        </Col>
                        <Col xs={12} sm={12} md={4} className="footertelephone">
                            <div style={{ color: "#000" }}>


                                <ul>
                                    <li>
                                        <HomeIcon variant="Filled" sx={{ marginRight: '10px', color: '#000;' }} />
                                        P.O. Box 43, P.C. 217, Raysut Industrial Estate, Salalah, Sultanate of Oman
                                    </li>
                                    <li>
                                        <AddIcCallIcon variant="Filled" sx={{ marginRight: '10px', color: '#000;' }} />
                                        +968 99484859 / 23219142
                                    </li>

                                    <li>
                                        <AlternateEmailIcon variant="Filled" sx={{ marginRight: '10px', color: '#000;' }} />
                                        info@omanigulffood.com
                                    </li>

                                    <li>
                                        <LanguageIcon variant="Filled" sx={{ marginRight: '10px', color: '#000;' }} />
                                        info@omanigulffood.com
                                    </li>

                                </ul>

                            </div>
                            <form className="my-2">
                                <div className="search2">

                                    <input className="inputsearch2" type="text" placeholder="Enter Your Email"></input>
                                    <button>Subscribe Now</button>
                                </div>

                            </form>


                        </Col>
                        <Col xs={12} sm={12} md={4} className="footertelephone" style={{ color: '#000' }}>
                            <h5 className="fw-bold">PRODUCTS</h5>
                            <ul>

                                <li>PALM OLEIN</li>
                                <li>SUNFLOWER OIL</li>
                                <li>CORN OIL</li>
                                <li>BLEND OILS</li>
                                <li>SHORTENING</li>
                                <li>NON-OIL PRODUCTS</li>
                            </ul>




                        </Col>
                    </Row>
                </Container>





            </div>
            <div className="bottomfooter" style={{ background: "#dfdfdf" }}>
                <p style={{ color: '#000', }}>Copyright 2018 © <span style={{ fontWeight: '600', color: '#000', }}>Omani Gulf Food Company</span>  All Rights Reserved. Design: Sysbreeze </p>
            </div>
            <div className="whatsappicon"><svg xmlns="http://www.w3.org/2000/svg" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em">
                <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" />
            </svg></div> */}


            {
                showButton && (
                    <button className="scroll-top-button" onClick={handleButtonClick}>

                        <BiArrowToTop />
                    </button>
                )
            }

            {/* <Aboutogfcfooter /> */}

        </div>
    )
}

export default Recipes