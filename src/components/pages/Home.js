import React from 'react'
import { About } from '../About/about'
import { Contacto } from '../Contacto/contacto'
import { Recetas } from '../Recetas/recetas'
import { Shop } from '../Shop/shop'
import { Inicio } from '../Inicio/inicio'

export const Home = () => {
  return (
    <>
        <Inicio />
        <About /> 
        <Recetas />
        <Shop />
        <Contacto />
    </>

  )
}
