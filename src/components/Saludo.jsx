import React from 'react';

function Saludo({ nombre }) {
    return (
        <div>
            <h1>Hola a todos! <br/> Att: {nombre}!</h1>
        </div>
    );
}

export default Saludo;