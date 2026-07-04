import React, { useState } from 'react';
import styles from './Formulario.module.css';

function Fomrulario({alGuardar, alVolver}) {
    const [nombre, setNombre] = useState ('');
    const [numeroPrograma, setNumeroPrograma] = useState('');
    const [medidas, setMedidas] = useState('');

    const manejarEnvio = (e) => {
        e.preventDefaul();

        if (!nombre || !numeroPrograma) {
            alert("Por favor Llena los campos requeridos");
            return;
        }

        const nuevaPieza = {
            id:`Ref-${Date.now()}`,
            nombre,
            programaCNC: numeroPrograma,
            medidasCriticas: medidas
        };
        alGuardar(nuevaPieza);
    };

    return(
        <div className={styles.formularioContainer}>
            <button onClick={alVolver} className={styles.btnVolver}> 🔙 Volver</button>

            <h2>Registrar Nueva Referencia</h2>

            <form onSubmit={manejarEnvio} className={styles.formularioCnc}>
                <div className={styles.campoGrupo}>
                    <label>Nombre de la Pieza / Referencia: </label>
                    <input 
                    type="text"
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                    placeholder="Ej: DV-176"
                    className={styles.inputCnc}
                     />
                </div>

                <div className={styles.campoGrupo}>
                    <label>Número de Programa CNC: </label>
                    <input 
                    type="text"
                    value={numeroPrograma}
                    onChange={(e) => setNumeroPrograma(e.target.value)}
                    placeholder="0001"
                    className={styles.inputCnc}
                     />
                </div>

                 <div className={styles.campoGrupo}>
                    <label>Medidas Criticas: </label>
                    <input 
                    type="text"
                    value={medidas}
                    onChange={(e) => setMedidas(e.target.value)}
                    placeholder="Ej: A/F: 20mm , bocin: 60mm, Ø total 256mm"
                    className={styles.inputCnc}
                     />
                </div>

                <button type="submit" className={styles.btnGuardar}>
                    💾 Guardar Pieza.
                </button>
            </form>
        </div>
    );
}

export default Fomrulario;