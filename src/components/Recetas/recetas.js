import React from "react";
import { aperitivos, breakfast, cena, dulce, ensalada, mexican, oriental, sandwich } from "../../assets/imagenes";
import "./recetas.css";

export const Recetas = () => {
    return(
        <>                    
            <section id="Recetario">
                <div className="rece_titulo">
                    <p>Recetario</p>
                </div>
                
                <div className="container recetas">
                    
                    <div className="box">
                        <div className="imgBox">
                            <img src={breakfast} className="card-img-top" alt="img desayuno"/>
                        </div>
                        <div className="content">
                            <div>
                                <h2>Desayunos</h2>
                                <p className="desc">Los panqueques esponjosos más perfectos, huevos y bacon, o muffins recién salidos del horno. ¿Quién no ama el desayuno?</p>
                                <a href="#" className="btn_rece btn btn-outline-light">Ver recetas</a>
                            </div>
                        </div>
                    </div>

                    <div className="box">
                        <div className="imgBox">
                            <img src={cena} className="card-img-top" alt="img almuerzos y cenas"/>
                        </div>
                        <div className="content">
                            <div>
                                <h2>Almuerzos y Cenas</h2>
                                <p className="desc">"¿Que puedo almorzar hoy?", "¿Que hay para cenar?"... <br/>¡Ay esa pregunta!, vamos a ayudarlo a obtener la respuesta.</p>
                                <a href="#" className="btn_rece btn btn-outline-light">Ver recetas</a>
                            </div>
                        </div>
                    </div>

                    <div className="box">
                        <div className="imgBox">
                            <img src={sandwich} className="card-img-top" alt="img Sandwiches"/>
                        </div>
                        <div className="content">
                            <div>
                                <h2>Sandwiches</h2>
                                <p className="desc">Una opción que sirve en todo momento, para el desayuno, al mediodía, a la tarde, o para el bajón de la noche! Estos sandwiches nunca fallan.</p>
                                <a href="#" className="btn_rece btn btn-outline-light">Ver recetas</a>
                            </div>
                        </div>
                    </div>
                    
                    <div className="box">
                        <div className="imgBox">
                            <img src={dulce} className="card-img-top" alt="img dulces"/>
                        </div>
                        <div className="content">
                            <div>
                                <h2>Dulces</h2>
                                <p className="desc">Recetas dulces para cada momento del día! No estamos cenando solo para llegar al postre pero, por si acaso... Aquí hay algunas ideas!</p>
                                <a href="#" className="btn_rece btn btn-outline-light">Ver recetas</a>
                            </div>
                        </div>
                    </div>
                    
                    <div className="box">
                        <div className="imgBox">
                            <img src={mexican} className="card-img-top" alt="img comida mexicana"/>
                        </div>
                        <div className="content">
                            <div>
                                <h2>Comida Mexicana</h2>
                                <p className="desc">Estas recetas son un conjunto de platos y técnicas de México, que forman parte de las tradiciones y vida común de sus habitantes.</p>
                                <a href="#" className="btn_rece btn btn-outline-light">Ver recetas</a>
                            </div>
                        </div>
                    </div>
                    
                    <div className="box">
                        <div className="imgBox">
                            <img src={oriental} className="card-img-top" alt="img comida mexicana"/>
                        </div>
                        <div className="content">
                            <div>
                                <h2>Comida Oriental</h2>
                                <p className="desc">Recetas de todo tipo de comida oriental/asiática. Ya sean woks, sushi, ramen, dumplings, baozis, pad thai, sopas de mariscos, etc.</p>
                                <a href="#" className="btn_rece btn btn-outline-light">Ver recetas</a>
                            </div>
                        </div>
                    </div>
                    
                    <div className="box">
                        <div className="imgBox">
                            <img src={aperitivos} className="card-img-top" alt="img Aperitivos" />
                        </div>
                        <div className="content">
                            <div>
                                <h2>Aperitivos</h2>
                                <p className="desc">Aquí puedes encontrar decenas de recetas para empezar tu comida de forma memorable. Recetas perfectas para deleitar tu paladar.</p>
                                <a href="#" className="btn_rece btn btn-outline-light ">Ver recetas</a>
                            </div>
                        </div>
                    </div>
                    
                    <div className="box">
                        <div className="imgBox">
                            <img src={ensalada} className="card-img-top" alt="img dulces" />
                        </div>
                        <div className="content">
                            <div>
                                <h2>Ensaladas</h2>
                                <p className="desc">Docenas de ensaladas frescas, saludables y ricas. Porque alimentarse bien debería disfrutarse al igual que cualquier otra comida!</p>
                                <a href="#" className="btn_rece btn btn-outline-light">Ver recetas</a>
                            </div>
                        </div>
                    </div>

                </div>
                <br/> {/*como separo sin usar br, se salen las cards por el css */}
            </section>

        </>
               
       
    )
}