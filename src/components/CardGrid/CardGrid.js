import React, { useContext } from 'react';
import { productos } from '../../data/productos';
import { CartContext } from '../context/CartContext';


// Este componente recibe los datos dentro de la propiedad {data} la cual es enviada desde Home.js
export const CardGrid = ({data}) => {
    
    const { addItemToCart, } = useContext(CartContext)
  return (
    <>
        <div className="container compras">
              {data.map(({ id, title, text, img}) => (

                <div className="box">
                    <div className="imgBox">
                        <img src={img} alt={title} />
                    </div>
                    <div className="content">
                        <div>
                            <h2>{title}</h2>
                            <p className="desc">{text}</p>
                            <a href="" className="btn_shop btn btn-outline-light"><button onClick={()=> addItemToCart(productos)}>Comprar </button></a>
                        </div>
                    </div>
                </div>
                    
            ))}
        </div>
        
    </>
    )
}