import React, { useContext } from 'react';
import { productos } from '../../data/productos';
import { CartContext } from '../context/CartContext';


// Este componente recibe los datos dentro de la propiedad {data} la cual es enviada desde Home.js
export const CardGrid = ({data}) => {
    
    const { addItemToCart, } = useContext(CartContext)
    return ( 
    <>
        <div className="container compras">
              {data.map((productos, i) => (

                <div className="box">
                    <div className="imgBox">
                        <img src={productos.img} alt={productos.title} />
                    </div>
                    <div className="content">
                        <div>
                            <h2>{productos.title}</h2>
                            <p className="desc">{productos.text} <strong>${productos.price}</strong></p>                     
                            <button className="btn_shop btn btn-outline-light " onClick={()=> addItemToCart(productos)}>Comprar </button>
                        </div>
                    </div>
                </div>
                    
            ))}
        </div>
        
    </>
    )
}

