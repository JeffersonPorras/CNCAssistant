import React from 'react';
import styles from './Buscador.module.css'

function Buscador({ piezas, alSeleccionar }) {
    return(
        <div className={ styles.buscadorContainer }>
            <h2 className={styles.titulo}>🔍 Buscador de Piezas CNC</h2>
            <p>Aqui irá nuestra barra de Búsqueda muy pronto.</p>

            <div className={styles.listaPiezas}>
                {piezas.map((pieza) => (
                    <div 
                    key={pieza.id}
                    onClick={() => alSeleccionar(pieza)}
                    className={styles.tarjetaPieza}
                    >
                        <h3>{pieza.nombre}</h3>
                        <p><strong>Programa:</strong> {pieza.programaCNC}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Buscador;