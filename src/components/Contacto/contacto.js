import React from "react";
import { comida1, comida2, comida3 } from "../../assets/imagenes";
import "./contacto.css"; 

export const Contacto = () => {
    return(
        <> 
            <section id="contact_us">
                <div>
                    <p>Contact Us!</p>
                </div>
            </section>
         
            <section className="container-fluid" id="Formulario">
                <div className="container">
                    <div className="row align-items-start">
                        <div className="col contact_form">
                            <div>
                                <p className="consulta">
                                    En Food Talk estamos para ayudarte, si tenes alguna duda, consulta o sugerencia, no dudes en contactarnos!
                                </p>
                            </div>
                            <div className="formulario row">
                                <div className="nombre">
                                    <label for="FormControlInput1" className="form-label">Nombre</label>
                                    <input type="name" className="form-control" id="FormControlInput1" placeholder="Nombre"></input>
                                </div>
                                
                                <div className="apellido">
                                    <label for="FormControlInput2" className="form-label">Apellido</label>
                                    <input type="surname" className="form-control" id="FormControlInput2" placeholder="Apellido"></input>
                                </div>
                                
                                <div className="telefono">
                                    <label for="FormControlInput3" className="form-label">Teléfono</label>
                                    <input type="text" className="form-control" id="FormControlInput3" placeholder="Teléfono"></input>
                                </div>
                               
                                <div className="email">
                                    <label for="FormControlInput4" className="form-label">Email</label>
                                    <input type="email" className="form-control" id="FormControlInput4" placeholder="nombre@ejemplo.com"></input>
                                </div>
                                
                                <div className="mb-3">
                                    <label for="FormControlTextarea1" className="form-label">Consultas / Comentarios:</label>
                                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Escribe aquí..."></textarea>
                                    <br></br><input type="submit" value="Enviar" className="btn btn-outline-dark"></input>
                                </div>
                            </div>
                        </div>

                        <div className="col">
                            <div id="carousel" className="carousel slide carousel-fade carousel-dark" data-bs-ride="carousel">
                                <div className="carousel-inner ">
                                    <div className="carousel-item active">
                                        <img src={comida1} width="400" height="550" />
                                    </div>
                                    <div className="carousel-item">
                                        <img src={comida2} width="400" height="550" />
                                    </div>
                                    <div className="carousel-item">
                                        <img src={comida3} width="400" height="550" />
                                    </div>
                                </div>
                                <button className="carousel-control-prev" type="button" data-bs-target="#carousel" data-bs-slide="prev">
                                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Previous</span>
                                </button>
                                <button className="carousel-control-next" type="button" data-bs-target="#carousel" data-bs-slide="next">
                                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Next</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </> 
              
    )
}
