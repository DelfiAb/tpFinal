/*
import { VarConstLet } from "./components/fundamentos/01-VarConstLet";
import { TemplateString } from "./components/fundamentos/02-TemplateString";
import { JsFunction } from "./components/fundamentos/05-JsFunction";
import { ObjetosLiterales } from "./components/fundamentos/03-Object";
import { JsArray } from "./components/fundamentos/04-Array";
*/

import './App.css'
import {Routes, Route} from "react-router-dom";

import {NavBar} from './components/NavBar/navbar.js';
import {Footer} from './components/Footer/Footer.js';
import { Home } from './components/pages/Home';
import { Pp2 } from './components/pages/Pp2';


function App() {
  //  console.log(dataProducts)
  return (
    <>
      <NavBar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pp2" element={<Pp2 />} />
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

