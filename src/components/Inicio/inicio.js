import React from 'react'
import "./inicio.css";

export const Inicio = () => {
  return (
        <div className="slider vh-100 align-items-center">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-7 mx-auto text-center slogan_botones">
                        <h1 className="food_talk">Food Talk</h1>
                        <p className="slogan">Recetas simples para todos los días!</p><br />
                        <a href="#rece_titulo" className="btn btn-outline-light btn-inicio">Ver Recetas</a>
                        <a href="#shop" className="btn btn-outline-light btn-inicio">Ver Tienda</a>
                        <a href="#contact_us" className="btn btn-outline-light btn-inicio">Contactanos</a>
                        <br />
                    </div>
                </div>
            </div> 
        </div>
     
                
  )
}

