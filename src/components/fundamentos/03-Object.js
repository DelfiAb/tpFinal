import { computeHeadingLevel } from '@testing-library/react';
import React from 'react'
import { BtnPrimary } from '../BtnPrimary'

export const ObjetosLiterales = () => {
/*
    const persona = {
        nombre: "Juan",
        apellido: "Perez",
        edad: 25,
        direccion: {
            ciudad: "Buenos Aires",
            calle: "calle 123",
            zip: 12344,
        }
    }

    console.log(persona);

    /*reescribir una variable de adentro de persona
    persona.edad = 27

    console.log(persona);

    /*creo una nueva persona (2) con las propiedades q tiene la primer persona y se las copia -> se usan 3 puntitos
    const persona2 = { ...persona }
    persona2.nombre = "Pedro"

    console.log(persona2);
    console.log(persona);
*/

    return (
        <>
            <h2>Objetos Literales</h2>
            <p>
                Los objetos en JavaScript, como en tantos otros lenguajes de programación, se pueden comparar con objetos de la vida real. El concepto de Objetos en JavaScript se puede entender con objetos tangibles de la vida real.
            </p>
            <h6>Temas relacionados</h6>
            <ul>
                <li>Console.table</li>
                <li>Operador Spread</li>
            </ul>

            <BtnPrimary
                url={'https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Working_with_Objects'}
                targ={'_blanck'}
                btnTxt={' Objetos Literales'}
            />
            <hr />
        </>
    )
}
