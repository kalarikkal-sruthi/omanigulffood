import React from 'react'


import Aboutenquiry from '../About/Aboutenquiry'
import Importslider from './Importslider'
import Aboutcompany from '../About/Aboutcompany'
import Importabout from './Importabout'
import Topbar from '../Includes/Topbar'
import Footer from '../Includes/Footer'


function Importexport() {
    return (
        <div>
            <Topbar />
            <Importslider />
            <Importabout />
            <Aboutcompany />

           
            <Aboutenquiry />
            <Footer />
            {/* <Aboutogfcfooter /> */}
        </div>
    )
}

export default Importexport