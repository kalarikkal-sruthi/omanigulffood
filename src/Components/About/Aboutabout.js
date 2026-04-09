import React, { useRef, useEffect, useState } from 'react';
import { Button } from 'react-bootstrap'
import Manufacturingpara from './Manufacturingpara';
import Popup from './Manufacturingpara';

function Aboutabout() {
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  }
  return (
    <div >
      <div className='aboutabout '>
        <div className='container'>
          <div className='row'>

            <div className='col-md-6'>
              <div className='about-second-para '>
              
                <h1>Manufacturing
                  Nutritious Edible Oil</h1>

                {/* <Manufacturingpara /> */}
                <p><b>Omani Gulf Food Company (L.L.C) </b> is a leading oil manufacturer across gulf region with active footprints across KSA/UAE/OMAN and Africa with commendable brand recall and consumer choice.


                  <br></br>
                  <br></br>       <input
                    className='manu-popup'
                    type="button"
                    value="READ MORE"
                    onClick={togglePopup}
                  />

                  {isOpen && <Popup
                    content={<>

                      <p>
                        <b>Omani Gulf Food Company (L.L.C) </b> is a leading oil manufacturer across gulf region with active footprints across KSA/UAE/OMAN and Africa with commendable brand recall and consumer choice and promoted by three prominent business leaders in Oman - Dhofar Food Industries, Dhofar Insurance Co. and Dhofar International Development and Investments Holding Co. Our team is passionate about providing highest quality edible oils to consumers for a better life by adding convenience to their daily routine and healthy living. Our edible oil brands are widely available in the market under the popular names of Al Safa , Noof, Zain, Salalah, Taibah , Sundrops, Sahi, Bahjah, Diyah, Sunlife, Sultanah & A’Safwah .We are also into private labelling for many retail majors, hypermarkets and supermarkets. We use multi model distribution channels across Middle East & African regions. The company continues to expand its business vertical to meet emerging customer needs by venturing into distribution of other Fast Moving Consumer Goods.
                      </p>
                      {/* <button>Test button</button> */}
                    </>}
                    handleClose={togglePopup}
                  />}
                </p>
                {/* <Button>READ MORE</Button> */}
              </div>
            </div>
            <div className='col-md-6'>
              <div className='about-img'>
                <img src='aboutimages/Company-about.jpg'></img>
                {/* <div className='board-para'>
                  <p>The Board of Directors is responsible for Omani Gulf Food Company strategic direction, oversight and corporate governance, ensuring the business delivers on the government of Oman development and diversification priorities.</p>
                </div> */}


              </div>
            </div>

          </div>
        </div>
      </div>
    </div >
  )
}

export default Aboutabout
