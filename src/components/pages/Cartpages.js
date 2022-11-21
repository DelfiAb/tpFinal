import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import { ItemCart } from '../ItemCart/ItemCart'
import './Cartpages.css'

export const CartPage = () => {

    const { cartItems, } = useContext(CartContext)

    const total = cartItems?.reduce(
        (previous, current) => previous + current.amount * current.price, 0);


  return (
      <div className='modal-content'>
          <h2 className='carritoTitle'>Tu carrito</h2>

          {cartItems.length === 0 ? <p className='vacio'>Tu carrito está vacío! <br/> Ingresa en el Shop de Food Talk para encontrar recetas y elementos geniales para tu cocina.</p> : (
              <div>{cartItems.map((item, i) => (

                  <ItemCart key={i} item={item} />

              ))}</div>
          )}

          <h2>Total: ${total}</h2>
      </div>
  )
}