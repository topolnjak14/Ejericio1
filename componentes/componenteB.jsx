import React, {useState} from 'react';

const ComponenteB = (props) => {

    
    const [estado, setEstado] = useState(false)

    return (
        <div>
            <button onClick = {() => {setEstado(!estado);} }>
                {estado ? "En linea": "No disponible"}
            </button>
        </div>
    );
}

export default ComponenteB;
