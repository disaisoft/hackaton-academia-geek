import React from 'react';

import NavBar from '../Partials/NavBarComponent';
import About from '../AboutMeComponent/AboutMeComponent';
import Updates from '../UpdatesComponent/UpdatesComponent';
import Footer from '../Partials/FooterComponent';
import Movie from '../MovieComponent/MovieComponent';

const Layout = (props) => {
    return(

        <div> 
             <NavBar/>
             
             
             <About/>
             <Updates/>
            <Footer/>
        </div>
    )
    
}
export default Layout;