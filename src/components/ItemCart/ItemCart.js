import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import './ItemCart.css'

export const ItemCart = ({ item }) => {
    const { title, amount, img, price} = item
    const { deleteItemToCart, addItemToCart } = useContext(CartContext)
    return (
        
        <div className='cartItem'>

            <p className='cartTitle'> {title} </p>

            <div className='info'>
                <img src={img} alt="" /> 
                <p>Cantidad: {amount}</p>
                <p>Total: $ {amount * price} </p>
            </div>

            <button className="btn btn-inicio"
                onClick={()=>{
                    console.log('Agregar')
                    addItemToCart(item)
                }}>Agregar</button>
            <button className="btn btn-inicio"
                onClick={()=>{
                    console.log('quitar')
                    deleteItemToCart(item)
                }}>Quitar</button>
            <hr/>
        </div>
    )
}