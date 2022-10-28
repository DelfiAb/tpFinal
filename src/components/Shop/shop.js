import React from "react";
import { clase, experiencia, libro, pasta, protein, repostera, tazas } from "../../assets/imagenes";
import "./shop.css";


export const Shop = () => {
    return(
        <body>
            
            <section id="shop">
                <div>
                    <h1 className="animate__animated animate__fadeInLeft">Shop</h1>
                </div>
            </section>

            <section id="shopp">
                <div className="container compras">
                        <div className="box">
                            <div className="imgBox">
                                <img src={libro} alt="Libro de recetas" />
                            </div>
                            <div className="content">
                                <div>
                                    <h2>Libro de recetas ~Food Talk~</h2>
                                    <p className="desc">Comidas y postres riquísimos que podes preparar en casa sin importar tu nivel de cocina!</p>
                                </div>
                            </div>
                        </div>
                        <div className="box">
                            <div className="imgBox">
                                <img src={protein} alt="Saborizantes" />
                            </div>
                            <div className="content">
                                <div>
                                    <h2>Proteínas y saborizantes</h2>
                                    <p className="desc">Ingredientes naturales y súper saludables para darle sabor a tus comidas.</p>
                                </div>
                            </div>
                        </div>
                    <div className="box">
                        <div className="imgBox">
                            <img src={clase} alt="Clases virtuales" />
                        </div>
                        <div className="content">
                            <div>
                                <h2>Cociná con nosotros</h2>
                                <p className="desc">Variedad de clases virtuales para que aprendas ríqisimas recetas desde la comodidad de tu casa!</p>
                            </div>
                        </div>
                    </div>
                    <div className="box">
                        <div className="imgBox">
                            <img src={tazas} alt="Vajilla" />
                        </div>
                        <div className="content">
                            <div>
                                <h2>Vajilla</h2>
                                <p className="desc">Nueva línea de platos, tazas, vasos y cubiertos Food Talk.</p>
                            </div>
                        </div>
                    </div>
                    <div className="box">
                        <div className="imgBox">
                            <img src={repostera} alt="Repostería" />
                        </div>
                        <div className="content">
                            <div>
                                <h2>Herramientas para repostería</h2>
                                <p className="desc">Nuestra recomendación de herramientas para cocinar como un profesional.</p>
                            </div>
                        </div>
                    </div>
                    <div className="box">
                        <div className="imgBox">
                            <img src={experiencia} alt="Experiencias" />
                        </div>
                        <div className="content">
                            <div>
                                <h2>Experiencias</h2>
                                <p className="desc">Te ofrecemos una variedad de experiencias, desde clases de cocina en pareja, hasta comidas en restaurantes lujosos.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </body>
        
    )
}