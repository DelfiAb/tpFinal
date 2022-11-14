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
                    <p>Shop</p>
                </div>

                <CardGrid data={productos}/> 
                
            </section > 
        </>
        
    )
}