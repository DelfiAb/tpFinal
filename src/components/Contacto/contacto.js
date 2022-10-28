import React from "react";
import "./contacto.css"; 

export const Contacto = () => {
    return(
        <>
            <section id="contact_us">
                <div>
                    <h1 className="animate_animated animate_fadeInLeft">Contact Us!</h1>
                </div>
            </section>

            <section className="container-fluid" id="Formulario">
                <div className="container">
                    <div className="row align-items-start">
                        <div className="col">
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
                                        <video width="500" height="700" autoplay muted loop>
                                        <source src="./assets/videos/video1_mamaehijos.mp4"></source>
                                        </video>
                                    </div>
                                    <div className="carousel-item">
                                        <video width="500" height="700" autoplay muted loop>
                                        <source src="./assets/videos/video2_pareja.mp4"></source>
                                        </video>
                                    </div>
                                    <div className="carousel-item">
                                        <video width="500" height="700" autoplay muted loop>
                                        <source src="./assets/videos/video3_chicacomiendo.mp4"></source>
                                        </video>
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
