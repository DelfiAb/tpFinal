import React from "react";
import { logo } from "../../assets/imagenes";
import "./navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom'


 
export const NavBar = () => {
    return(
        //aca van los elementos del html como siempre
        //todas las class se cambian por classNameName xq class es una palabra reservada de js para otra cosa
       
        <nav>
            <div className="container-fluid">
                <nav className="navbar navbar-expand-lg navbar-light" id="nav">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="#">
                            
                            <img  src={logo} alt="Logo Food Talk"
                            width="auto" height="120px" max-height="120px" />
                        </a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <Link to="/" className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="#nav">Inicio</a>
                                </Link>
                                <Link to="/" href="#about_us" class="nav-item">
                                    <a class="nav-link" href="#about_us">About</a>
                                </Link> {/* como hago q baje hasta about en inicio? --> href="#about_us" no funciona?? */}
                                <Link to="/rece_titulo" className="nav-item">
                                    <a className="nav-link" href="#rece_titulo">Recetas</a>
                                </Link>
                                <Link to="/shop" className="nav-item">
                                    <a className="nav-link" href="#shop">Shop</a>
                                </Link>
                                <Link to="/contact_us" className="nav-item">
                                    <a className="nav-link" href="#contact_us">Contact us</a>
                                </Link>
                            </ul>

                            <button className="btn btn-outline-secondary ms-lg-3"><FontAwesomeIcon icon={faUser} /> Mi Cuenta</button>
                        </div>
                    </div>
                </nav>
            </div>

        </nav>
 
    )
 
}
