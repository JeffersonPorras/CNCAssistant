import React, { useState } from 'react';
import styles from './Formulario.module.css';

function Fomrulario({alGuardar, alVolver}) {
    // Estado para saber si es Disco o Cmapana
    const [tipoPieza, setTipoPieza] = useState('disco');

    //Inputs Comunes
    const [nombre, setNombre] = useState ('');
    const [programa, setPrograma] = useState('');
    const [bocin, setBocin] = useState('');

    //Inputs Especificos de Discos
    const [diametroTotal, setDiametroTotal] = useState('');
    const [diametroExt, setDiametroExt] = useState('');
    const [diametroInt, setDiametroInt] = useState('');
    const [areaFrenado, setAreaFrenado] = useState('');
    const [alturaInt, setAlturaInt] = useState('');
    const [alturaExt, setAlturaExt] = useState('');

    //Inputs Especificos de Campanas 
    const [AlturaBanda, setAlturaBanda] = useState('');
    const [AlturaCaja, setAlturaCaja] = useState('');
    const [diametroBanda, setDiametroBanda] = useState('');
    const [espesorPlato, setEspesorPlato] = useState('');
    const [diametroIntCaja, setDiametroIntCaja] = useState('');
    const [diametroExtCaja, setDiametroExtCaja] = useState('');
    


    const manejarEnvio = (e) => {
        e.preventDefault();

        if (!nombre || !programa) {
            alert("Por favor Llena los campos requeridos");
            return;
        }

        const formatoMedidas = '';

        if (tipoPieza === 'disco') {
            formatoMedidas =  `Tipo: DISCO | Ø Ext.Total: ${diametroExt} mm | AlturaEXt: ${alturaExt} mm
            | alturaInt: ${alturaInt} | AreaFrenado: ${areaFrenado}`
        } else{
            formatoMedidas =  `Tipo: Campana | Ø Altura Banda: ${AlturaBanda} mm | Diametro Banda: ${diametroBanda} mm
            | altura Caja: ${AlturaCaja} | Espesor Plato: ${espesorPlato} | Ø Int Caja ${diametroIntCaja} | Ø Ext Caja: ${diametroExtCaja}`
        }


        const nuevaPieza = {
            id:`Ref-${Date.now()}`,
            nombre: nombre.toUpperCase(),
            programaCNC: programa,
            medidasCriticas: formatoMedidas
        };
        alGuardar(nuevaPieza);
    };

    return(
        <div className={styles.formularioContainer}>
            <button onClick={alVolver} className={styles.btnVolver}> 🔙 Volver</button>

            <h2>Registrar Nueva Referencia</h2>

            <div className={styles.campoGrupo} style={{marginBottom: '20px'}}>
                <label style={{fontWeight: 'bold', color: '#ff6b35'}}>Tipo de Componente:</label>
                <select
                value={tipoPieza}
                onChange={(e) => setTipoPieza(e.target.value)}
                style={{width: '100%', padding: '10px', background: '#333', color: '#fff',border: '1px solid #555', borderRadius: '4px'}}
                >
                    <option value="disco">💿 Disco de Freno</option>
                    <option value="campana">🥁 Campana / Tambor de Freno</option>
                </select>

            </div>

            <form onSubmit={manejarEnvio} className={styles.formularioCnc}>
                <div className={styles.campoGrupo}>
                    <label>Nombre de la Pieza / Referencia: </label>
                    <input 
                    type="text"
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                    placeholder={tipoPieza === 'disco' ? "Ej: DV-176": "Ej: C-123"}
                    className={styles.inputCnc}
                    style={{textTransform: 'uppercase'}}
                     />
                </div>

                <div className={styles.campoGrupo}>
                    <label>Número de Programa CNC: </label>
                    <input 
                    type="text"
                    value={programa}
                    onChange={(e) => setPrograma(e.target.value)}
                    placeholder="0001"
                    className={styles.inputCnc}
                     />
                </div>

                 <div className={styles.campoGrupo}>
                    <label>Bocin: </label>
                    <input 
                    type="number"
                    value={bocin}
                    onChange={(e) => setBocin(e.target.value)}
                    placeholder="Ej:Ø 60mm"
                    className={styles.inputCnc}
                     />
                </div>

                {tipoPieza === 'disco' && (
                    <>
                        <div className={styles.campoGrupo}>
                            <label>Ø Ext Total:  </label>
                            <input 
                            type="number"
                            value={diametroTotal}
                            onChange={(e) => setDiametroTotal(e.target.value)}
                            placeholder="Ej: Ø total 256mm"
                            className={styles.inputCnc}
                     />
                        </div>

                        <div className={styles.campoGrupo}>
                            <label>Ø Manzana Ext: </label>
                            <input 
                            type="number"
                            value={diametroExt}
                            onChange={(e) => setDiametroExt(e.target.value)}
                            placeholder="Ej:Ø 135mm"
                            className={styles.inputCnc}
                            />
                        </div>

                        <div className={styles.campoGrupo}>
                            <label>Ø Manzana Int: </label>
                            <input 
                            type="number"
                            value={diametroInt}
                            onChange={(e) => setDiametroInt(e.target.value)}
                            placeholder="Ej:Ø 135mm"
                            className={styles.inputCnc}
                            />
                        </div>

                        <div className={styles.campoGrupo}>
                            <label>A/F: </label>
                            <input 
                            type="number"
                            value={areaFrenado}
                            onChange={(e) => setAreaFrenado(e.target.value)}
                            placeholder="Ej: 24mm"
                            className={styles.inputCnc}
                            />
                        </div>
                        <div className={styles.campoGrupo}>
                            <label>Altura Ext: </label>
                            <input 
                            type="number"
                            value={alturaExt}
                            onChange={(e) => setAlturaExt(e.target.value)}
                            placeholder="Ej: 28mm"
                            className={styles.inputCnc}
                            />
                        </div>

                        <div className={styles.campoGrupo}>
                            <label>Altura Int: </label>
                            <input 
                            type="number"
                            value={alturaInt}
                            onChange={(e) => setAlturaInt(e.target.value)}
                            placeholder=" 35mm"
                            className={styles.inputCnc}
                            />
                        </div>
                    </>
                )}

                                {tipoPieza === 'campana' && (
                    <>
                        <div className={styles.campoGrupo}>
                            <label>Altura Banda: </label>
                            <input 
                            type="number"
                            value={AlturaBanda}
                            onChange={(e) => setAlturaBanda(e.target.value)}
                            placeholder="Ej: 135mm"
                            className={styles.inputCnc}
                            />
                        </div>

                        <div className={styles.campoGrupo}>
                            <label>Altura Caja:  </label>
                            <input 
                            type="number"
                            value={AlturaCaja}
                            onChange={(e) => setAlturaCaja(e.target.value)}
                            placeholder="Ej: 15mm"
                            className={styles.inputCnc}
                     />
                        </div>

                        <div className={styles.campoGrupo}>
                            <label>Ø Banda: </label>
                            <input 
                            type="number"
                            value={diametroBanda}
                            onChange={(e) => setDiametroBanda(e.target.value)}
                            placeholder="Ej:Ø 295mm"
                            className={styles.inputCnc}
                            />
                        </div>


                        <div className={styles.campoGrupo}>
                            <label>Espesor Plato: </label>
                            <input 
                            type="number"
                            value={espesorPlato}
                            onChange={(e) => setEspesorPlato(e.target.value)}
                            placeholder="Ej: 6mm"
                            className={styles.inputCnc}
                            />
                        </div>
                        <div className={styles.campoGrupo}>
                            <label>Ø Int Caja: </label>
                            <input 
                            type="number"
                            value={diametroIntCaja}
                            onChange={(e) => setDiametroIntCaja(e.target.value)}
                            placeholder="Ej: 305mm"
                            className={styles.inputCnc}
                            />
                        </div>

                        <div className={styles.campoGrupo}>
                            <label>Ø Ext Caja: </label>
                            <input 
                            type="number"
                            value={diametroExtCaja}
                            onChange={(e) => setDiametroExtCaja(e.target.value)}
                            placeholder="Ej: 315mm"
                            className={styles.inputCnc}
                            />
                        </div>
                    </>
                )}


                 

                 

               

                

                <button type="submit" className={styles.btnGuardar}>
                    💾 Guardar Pieza.
                </button>
            </form>
        </div>
    );
}

export default Fomrulario;