import React from "react";
import "./footercss.css"; 
import { Link } from "react-router-dom";
import { logo } from "../../assets/imagenes";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faFacebookF, faInstagram, faPinterestP, faTwitter} from "@fortawesome/free-brands-svg-icons";

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
                    <Link to="/"><a className="link-1">Inicio</a></Link>
                    <Link to="/about_us"><a >About</a></Link>    
                    <Link to="/rece_titulo"><a>Recetas</a></Link>        
                    <Link to="/shop"><a>Shop</a></Link> 
                    <Link to="/contact_us"><a>Contact</a></Link>   
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
                    <li><a className="insta" href="#"><FontAwesomeIcon icon={faInstagram} /></a></li>
                    <li><a className="facebook" href="#"><FontAwesomeIcon icon={faFacebookF} /></a></li>
                    <li><a className="pinterest" href="#"><FontAwesomeIcon icon={faPinterestP} /></a></li>
                    <li><a className="twitter" href="#"><FontAwesomeIcon icon={faTwitter}/></a></li> 
                </ul>
            </article>
                 
        </footer>         
    )
}
