import React from 'react';

import NavBar from '../Partials/NavBarComponent';
import Footer from '../Partials/FooterComponent';
import Updates from '../UpdatesComponent/UpdatesComponent';

const Layout = (props) => {
    return(

        <div> 
             <NavBar/>
             {props.children}
             <Updates/>
            <Footer/>
        </div>
    )
    
}
export default Layout;