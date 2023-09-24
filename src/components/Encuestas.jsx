import React from 'react';

//se modifico el codigo para poder visualizar las opciones
function Encuestas({ encuestas }) {
    return (
        <div>
            <h2>Encuestas Disponibles</h2>
            <ul>
                {encuestas.map((encuesta) => (
                    <li key={encuesta.id}>
                        <p>{encuesta.pregunta}</p>
                        <ul>
                            {encuesta.opciones.map((opcion) => (
                                <li key={opcion}>{opcion}</li>
                            ))}
                        </ul>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Encuestas;
