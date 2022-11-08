import React from 'react'
import "./inicio.css";
import { Link } from 'react-router-dom';

export const Inicio = () => {
  return ( 
    <>
        <div className="slider vh-100 align-items-center">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-7 mx-auto text-center slogan_botones">
                        <h1 className="food_talk">Food Talk</h1>
                        <p className="slogan">Recetas simples para todos los días!</p><br />
                        <Link to="/rece_titulo"><a href="#rece_titulo" className="btn btn-inicio">Ver Recetas</a></Link>
                        <Link to="/shop"><a href="#shop" className="btn btn-inicio">Ver Tienda</a></Link>
                        <Link to="/contact_us"><a href="#contact_us" className="btn btn-inicio">Contactanos</a></Link>
                        <br />
                    </div>
                </div>
            </div> 
        </div>
    
    </>     
                
  )
}

