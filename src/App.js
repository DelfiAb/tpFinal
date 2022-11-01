/*
import { VarConstLet } from "./components/fundamentos/01-VarConstLet";
import { TemplateString } from "./components/fundamentos/02-TemplateString";
import { JsFunction } from "./components/fundamentos/05-JsFunction";
import { ObjetosLiterales } from "./components/fundamentos/03-Object";
import { JsArray } from "./components/fundamentos/04-Array";
*/

import './App.css'
import {Routes, Route,} from "react-router-dom";

import {NavBar} from './components/NavBar/navbar.js';
import {Footer} from './components/Footer/Footer.js';
import { Home } from './components/pages/Home';
import { Aboutpages } from './components/pages/Aboutpages';
import { Recetaspages } from './components/pages/Recetaspages';
import { Shoppages } from './components/pages/Shoppages';
import { Contactopages } from './components/pages/Contactopages';


function App() {
  //  console.log(dataProducts)
  return (
    <>
      <NavBar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about_us" element={<Aboutpages/>} />
          <Route path="/rece_titulo" element={<Recetaspages/>} />
          <Route path="/shop" element={<Shoppages/>} />
          <Route path="/contact_us" element={<Contactopages/>} />
        </Routes>

      <Footer />   
      
    </>
    
    /*
    <>
      <VarConstLet />
      <TemplateString />
      <ObjetosLiterales />
      <JsArray />
      <JsFunction />
      
    </> */
  )

}

export default App;

