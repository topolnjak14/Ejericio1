import React from 'react';
import ComponenteB from './componenteB';

const ComponenteA = () => {
    /* Paso:1 creo un objeto con los datos de la persona */

    const persona = {
            nombre: "Jose",
            apellido:"Topolnjak",
            email: "josetopolnjak14@gmail.com",
            contectado: true   
    }

    /* Paso:2 Aplicamos un estado */

    return (
        <div>
            <h1>Nombre: {persona.nombre} </h1>
            <p>Apellido: {persona.apellido} </p>
            <p>Email: {persona.email} </p>
            <ComponenteB/>

            
        </div>
    );
}

export default ComponenteA;
