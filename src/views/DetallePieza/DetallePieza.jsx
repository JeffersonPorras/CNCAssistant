import React from "react";
import styles from './DetallePieza.module.css';

function DetallePieza({pieza, alVolver, alEliminar}) {
    if (!pieza) {
        return(
            <div style={{padding: '20px', textAlign: 'center'}}>
                <p>No se Seleccionó ninguna pieza.</p>
                <button onClick={alVolver} style={{padding: '10px', background: '#ff6b35', border: 'none', color: '#fff', borderRadius: '4px'}}>
                    🔙 Volver Al Buscador
                </button>
            </div>
        );
    }
    return (
        <div className={styles.container}>
            <button onClick={alVolver} className={styles.botonVolver}>
                🔙 Volver
            </button>

            <div className={styles.tarjeta}>
                <h2 className={styles.titulo}>{pieza.nombre}</h2>

                <div className={styles.bloquePrograma}>
                <span className={styles.etiquetaPrograma}>PROGRAMA CNC</span>
                <strong className={styles.numeroPrograma}>0{pieza.programaCNC}</strong>
                </div>

                <div className={styles.seccionMedidas}>
                    <h4>Medidas Críticas</h4>
                    <p className={styles.cajaMedidas}>{pieza.medidasCriticas}</p>
                </div>

                <button
                onClick={() =>alEliminar(pieza.id)}
                style={{
                    width: '100%',
                    padding: '12px',
                    background: '#d90429',
                    border: 'none',
                    color: '#fff',
                    borderRadius: '6px',
                    cursor: 'pointer',
                    marginTop: '25px',
                    fontWeight:'bold'
                }}
                >
                    🗑️ Eliminar Programa
                </button>
            </div>
        </div>
    );
}


export default DetallePieza;