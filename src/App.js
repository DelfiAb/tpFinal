import { VarConstLet } from "./components/fundamentos/01-VarConstLet";
import { TemplateString } from "./components/fundamentos/02-TemplateString";

import './App.css'
/*
import { JsFunction } from "./components/fundamentos/05-JsFunction";
import { ObjetosLiterales } from "./components/fundamentos/03-Object";
import { JsArray } from "./components/fundamentos/04-Array";
*/
import {NavBar} from './components/NavBar/navbar.js';
import {About} from './components/About/about.js';
import {Recetas} from './components/Recetas/recetas.js';
import {Shop} from './components/Shop/shop.js';
import {Contacto} from "./components/Contacto/contacto.js";
import {Footer} from './components/Footer/Footer.js';

function App() {
  //  console.log(dataProducts)
  return (
    <>
      <NavBar />
      <About /> 
      <Recetas />
      <Shop />
      <Contacto />
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

