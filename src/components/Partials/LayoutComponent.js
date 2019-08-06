import React from 'react';

import NavBar from '../Partials/NavBarComponent';
import Footer from '../Partials/FooterComponent';
import Updates from '../UpdatesComponent/UpdatesComponent';
import HomeComponent from '../Home/HomeComponent';
import About from '../AboutMeComponent/AboutMeComponent';
const Layout = (props) => {
    return(

        <div> 
             <NavBar/>
             {props.children}

             <HomeComponent/>
             <br/>
             <About/><br/>
             <h1 className="d-flex justify-content-center mb-5">Actualizaciones</h1>
             <Updates/>

            <Footer/>
        </div>
    )
    
}
export default Layout;