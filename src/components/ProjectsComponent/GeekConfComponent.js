import React, { Component } from 'react'
import './styles/ProjectsStyles.css'
import TiendaGeek from '../images/tienda_geek.png'
import GeekConf from '../images/geek_conf.jpg'
import Portafolio from '../images/portafolio.png'

class Proyects extends Component {
    render() {
        return (
            <div className="container">
             <div className="row">
                    <div className="col-sm column mcb-column one-second column_column column_margin">
                        <hr/>

                        <h4>Tienda Geek</h4>
                        <p>Realizamos una tienda de zapatos, propuesta por nuestro docente John Faber Florez,
                            para evidenciar  trabajo en equipo, manejo de herramientas para la interacción
                            en el laboral, de como es el trabajo, del ambiente. 
                            estuvimos bajo el apoyo del profesor David Rodriguez, que nos asesoró 
                            y estuvo al tanto de nosotros
                        </p>
                    </div>
                    
                    <div className="col-sm column mcb column one-second column_image Proyects_img__tienda">
                        <img className="Proyects_img__tienda Proyects_div__center" src={TiendaGeek} alt="https://tienda-virtual-geek.firebaseapp.com/"/>
                    </div>
    
                </div>
                <br/><br/>

                <div className="row Proyects_div__bg ">
                    <div className="col-sm column mcb column one-second column_image Proyects_img__tienda">
                    <img className="Proyects_img__tienda" src={GeekConf} alt="https://tienda-virtual-geek.firebaseapp.com/"/>
                    
                    </div>
                
                    <div className="col-sm column mcb-column one-second column_column column_margin d-block">
                        <hr/>
                        <h4 className="mb-3 d-block">Conferencia Geek</h4>
                        
                        <h6 className="mb-2 d-block">
                        Centrol Comercial el Tesoro - Agosto 2019
                        </h6>
                        <p className="d-block"> 
                        Centro comercial en Medellín, con una variada oferta en moda,
                         servicios, tecnología, restaurantes, entretenimiento y mucho más.
                          Un parque comercial para toda la familia. 
                        </p>
                    </div>
                </div>
                
                <br/><br/>
                <div className="row">
                    <div className="col-sm column mcb-column one-second column_column column_margin">
                        <hr/>
                        <h4>Portafolio</h4>
                        <p>Realizamos un Portafolio, para evindeciar los procesos que hemos llevado
                            durante el curso, además, para que nosotros, los integrantes de Academia Geek
                            podamos tener un acercamiento a las empresas aliadas, para una fácil vinculació laboral
                        </p>
                    </div>
                    
                    <div className="col-sm column mcb column one-second column_image Proyects_img__tienda">
                        <img className="Proyects_img__tienda Proyects_div__center" src={Portafolio} alt="https://tienda-virtual-geek.firebaseapp.com/"/>
                    </div>
    
                </div>
            </div>
        )
    }
}

export default Proyects