import React from 'react';
import { Link } from 'react-router-dom';

class Footer extends React.Component {
    render(){

        return(
            <div className=" ml-3 row my-5  container-fluid">
            <ul className='col-3 '>
                <h6 className='mb-3'>Acerca de Nosotros</h6>
                <li><Link to='/'>Quienes somos</Link></li>
                <li><Link to='/'>Que hacemos</Link></li>
                <li><Link to='/'>Que aprenderás</Link></li>
                
            </ul>
            <ul className="col-3 color"  >
                <h6 className='mb-3'>Cursos</h6>
                <li><Link to='/'>Desarrollador Frontend</Link></li>
                <li><Link to='/'>Desarrollador Backend</Link></li>
                <li><Link to='/'>Desarrollador de Video Juegos</Link></li>
               
            </ul>
            <ul className='col-3'>
                <h6 className='mb-3'>Proyectos</h6>
                <li><Link to='/'>Conferencia Geek</Link></li>
                <li><Link to='/'>Portafolio</Link></li>
                <li><Link to='/'>Tienda En linea</Link></li>
                
                
            </ul>
            <ul className='col-3'>
                <h6 className='mb-3'>Actualizaciones</h6>
                <li><Link to='/'>Bootstrap</Link></li>
                <li><Link to='/'>Javascript</Link></li>
                <li><Link to='/'>NodeJS</Link></li>
            </ul>

            <div className="text-white bg-dark w-100 row " role="alert">
                <h6 className="center col-6 ">@Copyright Todos los derechos reservados </h6>
                <div className="d-flex col-6 justify-content-end">
                    <i className="fab fa-2x fa-cc-paypal ml-2"></i>
                    <i className="fab fa-2x fa-cc-mastercard ml-2"></i>
                    <i className="fab fa-2x fa-cc-mastercard ml-2"></i>
                </div>
            </div>

        </div>
        );
    
    }
}

export default Footer;