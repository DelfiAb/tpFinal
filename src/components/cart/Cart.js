import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom';


import { cartFull } from '../../assets/imagenes';
import { CartContext } from '../context/CartContext';


import './Cart.css'

export const Cart = () => {

    const [cartOpen, setCartOpen] = useState(false);

    const [productsLength, setProductsLehgth] = useState(0);


    const { cartItems, } = useContext(CartContext)


    useEffect(() => {
        setProductsLehgth(
            cartItems?.reduce((previous, current) => previous + current.amount, 0) // reduce() Docu => https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
        )
    }, [cartItems]);

    const total = cartItems?.reduce(
        (previous, current) => previous + current.amount * current.price, 0);
    
    return (
        <div id='icartIcon'
                onClick={() => { setCartOpen(!cartOpen) }}
                data-bs-toggle='modal'
                data-bs-target='#cartContent'
        > 
            {productsLength > 0 ? (
               <Link to={'cart'}>
                    <div id='cart'>
                            <img
                                alt='cart'
                                src={cartFull}
                            />
                            <div id='itemNum'>

                                <div>
                                    {productsLength}
                                </div>

                            </div>

                    </div>
               </Link> 
            ):(

                <div id='cart'>
                            <img
                                alt='cart'
                                src={cartFull}
                            />
                            <div id='itemNum'>

                                <div>
                                    {productsLength}
                                </div>

                            </div>

                    </div>

            )}

        </div>
    )
}