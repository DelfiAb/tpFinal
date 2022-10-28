import React from "react";
import "./footercss.css"; 
import { Link } from "react-router-dom";
import { logo } from "../../assets/imagenes";

import { AiOutlineInstagram } from 'react-icons/fa';



export const Footer = () => {
    return(
        <footer className="footer"> 
            <article className="footer-left ">
                <img className="footer_logo"
                    src={logo}
                    alt="Logo Food Talk"
                    width="200"
                    height="200" />
                <p className="footer-links">
                    <Link to="/"><a href="#nav" className="link-1">Inicio</a></Link>
                    <Link to="/pp2"><a href="#about_us">About</a></Link>    
                    <a href="#rece_titulo">Recetas</a>          
                    <a href="#shop">Shop</a>      
                    <a href="#contact_us">Contact</a>
                </p>
                <p className="copyright">© 2022 Food Talk - All Rights Reserved.</p>                
            </article>
            <article className="footer-right"> 
                <form>
                    <h5><strong>Suscribite para no perderte ninguna receta!</strong></h5>
                    <p>Nuevas recetas todas las semanas.</p>
                    <div className="d-flex w-100 gap-2">
                    <label for="newsletter1" className="visually-hidden footer-email">Email address</label>
                    <input id="newsletter1" type="text" className="form-control" placeholder="Email address"></input>
                    <button className="btn btn-outline-light" type="button">Subscribe</button>
                    </div>
                </form>
                <br></br>
                <h5><strong>Seguínos en nuestras redes!</strong></h5>
                <br></br>
                <ul className="social-icons">
                    <li><a className="insta" href="#"><i className="fa fa-instagram"></i></a></li>
                    <li><a className="facebook" href="#"><i className="fa fa-facebook"></i></a></li>
                    <li><a className="pinterest" href="#"><i className="fa fa-pinterest"></i></a></li>
                    <li><a className="twitter" href="#"><i className="fa fa-twitter"></i></a></li>  
                </ul>
            </article>
                 
        </footer>         
    )
}
