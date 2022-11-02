import React from "react";
import { clase, experiencia, libro, pasta, protein, repostera, tazas } from "../../assets/imagenes";
import { productos } from "../../data/productos";
import { CardGrid } from "../CardGrid/CardGrid";
import "./shop.css";


export const Shop = () => {
    
    return(
        
        <>                    
            

            <section id="shopp">
                <div className="shop">
                    <h1 className="animate__animated animate__fadeInLeft">Shop</h1>
                </div>

                <CardGrid data={productos}/> 

                <br /> {/*como separo sin usar br, se salen las cards por el css */}                
            </section > 
        </>
        
    )
}