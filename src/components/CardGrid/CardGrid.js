import React from 'react';


// Este componente recibe los datos dentro de la propiedad {data} la cual es enviada desde Home.js
export const CardGrid = ({data}) => {

  return (
    <>
        <div className="container compras">
              {data.map(({ id, title, text, img}) => (
                <div >
                    <div className='col'key={id}>
                        <div className="box">
                            <div className="imgBox">
                                <img src={img} alt={title} />
                            </div>
                            <div className="content">
                                <div>
                                    <h2>{title}</h2>
                                    <p className="desc">{text}</p>
                                    <a href="" className="btn_shop btn btn-outline-light">Comprar</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            ))}
        </div>
        
    </>
    )
}