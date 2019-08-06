import React, { Component } from 'react';
import logo from '../../images/logo-ag.png';
class NavBar extends Component {

    render() {
        return (
            <header>
                <nav className="navbar navbar-expand-lg navbar-light bg-dark ">
                    <a className="Navbar__brand" href="/">
                        <img className='iconLogo' src={logo} width='120' alt='Images logo' />
                    </a>

                        <button class="navbar-toggler  " type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse " id="navbarNav">
                            <ul class="navbar-nav">
                                <li class="nav-item active">
                                    <a class="nav-link" href="a">Acerca de Nosotros <span class="sr-only">(current)</span></a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="a">Cursos</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="a">Proyectos</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="a">Actualizaciones</a>
                                </li>
                            </ul>
                        </div>
                
                </nav>
            </header>
        );
    }
}

export default NavBar;