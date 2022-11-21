import './App.css'
import {Routes, Route} from "react-router-dom";

import {NavBar} from './components/NavBar/navbar.js';
import {Footer} from './components/Footer/Footer.js';
import { Home } from './components/pages/Home';
import { Aboutpages } from './components/pages/Aboutpages';
import { Recetaspages } from './components/pages/Recetaspages';
import { Shoppages } from './components/pages/Shoppages';
import { Contactopages } from './components/pages/Contactopages';
import { CartProvider } from './components/context/CartContext';
import { CartPage } from "./components/pages/Cartpages";



function App() {
  //  console.log(dataProducts)
  return (
    <>
      <CartProvider>
      <NavBar />
      
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about_us" element={<Aboutpages/>} />
          <Route path="/rece_titulo" element={<Recetaspages/>} />
          <Route path="/shop" element={<Shoppages/>} />
          <Route path="/contact_us" element={<Contactopages/>} />
          <Route path="/cart" element={<CartPage/>} />
        </Routes>
 
      </CartProvider>

      <Footer /> 
   
      
    </>

  )

}

export default App;

