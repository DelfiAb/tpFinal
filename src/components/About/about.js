import React from 'react';
import { about_us } from '../../assets/imagenes';
import "./about.css"; 

export const About = () => {
    return ( 
        <>
            <div className="about_us">
                <div className="col-md-28 mx-auto ">
                    <p>Sobre Nosotros</p>
                </div>
            </div>

            <div className="profiles">
                <div className="ppal">
                    <img src={about_us} alt="Our team" />
                    <div className="all-text">
                        <p>
                            Food talk fue creado por un grupo de personas que están buscando, creando y mejorando recetas constantemente para compartir con ustedes nuestros lectores!<br/> 
                            <br />Tenemos un equipo de genios detrás de nosotros en Food Talk que son expertos en un poco de todo, desde servicio al cliente, redes sociales, videografía, hasta ayudar con sesiones de recetas. Ellos son TODO. Nuestro equipo ayuda a que todo funcione sin problemas.
                            <br />En este espacio, siempre estamos creando nuevas, frescas y sabrosas recetas para vos. Nuestro objetivo es inspirarte con comidas que son fáciles y ricas, para que cocines para vos, tu familia, tus amigos o tu pareja. <br />
                            <br /><em>Actualmente cocinando en la hermosa ciudad de Buenos Aires. </em> 
                        </p>
                    </div>
                </div> 
            </div>

        </> 
    )
        
}
      
