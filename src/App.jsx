import React, { useState, useEffect } from 'react';

import Buscador from './views/Buscador/Buscador'
import DetallePieza from './views/DetallePieza/DetallePieza'
import Formulario from './views/Formulario/Formulario'

function App() {
  
  const [pantallaActual, setPantallaActual] = useState('buscar');
  const [piezaSeleccionada, setPiezaSelecionada] = useState(null);

  const [listaPiezas, setListaPiezas] = useState(()=> {
    const piezasGuardadas = localStorage.getItem('piezasCNC');
    return piezasGuardadas? JSON.parse(piezasGuardadas) : [
      {id: 'ref-1', nombre: 'DV-108', programaCNC: '0116',medidasCriticas: 'Ø280mm'},
      {id: 'ref-2', nombre: 'DV-109', programaCNC: '0117',medidasCriticas: 'Ø270mm'}
    ];
  });
  
  useEffect(() =>{
    localStorage.setItem('piezasCNC', JSON.stringify(listaPiezas));
  }, [listaPiezas]);

  const guardarNuevaPieza = (nuevaPieza) =>{
    setListaPiezas([...listaPiezas, nuevaPieza]);
    setPantallaActual('buscar');
  };

  return(
    <div style={{backgroundColor: '#121212', color: '#fff', minHeight: '100vh', padding: '10px'}}>

        {pantallaActual === 'buscar' && (
           <div>
          <button
            onClick={() => setPantallaActual('crear')}
            style={{padding:'10px', background:'#ff6b35', border:'none', color:'#fff', borderRadius:'4px', cursor:'pointer', marginBottom: '10px'}}
          >
            ➕ Registrar Pieza Nueva
          </button>

      <Buscador
        piezas = {listaPiezas}
        alSeleccionar = {(pieza) =>{
          setPiezaSelecionada(pieza);
          setPantallaActual('detalle');
        }}
      />
    </div>
      )}

      {pantallaActual === 'detalle' &&(
        <DetallePieza
          piezas = {piezaSeleccionada}
          alVolver = {() =>setPantallaActual('buscar')}
          />
      )}

      {pantallaActual === 'crear' &&(
        <Formulario
          alGuardar = {guardarNuevaPieza}
          alVolver = {() =>setPantallaActual('buscar')}
          />
      )}
    </div>

   
  )


}

export default App;