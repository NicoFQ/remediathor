import { useEffect, useState } from "react";
import tipoAccion from './../../constants/acciones'
import Copiar from "./copiar/Copiar";

export default function PasoFichero({ onSavePaso }) {
  const [accion, setAccion] = useState(tipoAccion.COPIAR.code)
  const [paso, setPaso] = useState('')


    
  return (
    <div>
      <p>- PASO FICHERO -</p>
      <div>
        <p>Accion:</p>
        <button onClick={ ()=>{setAccion(tipoAccion.COPIAR.code)} }>Copiar</button>
        <button onClick={ ()=>{setAccion(tipoAccion.RENOMBRAR.code)} }>Renombrar</button>
        <button onClick={ ()=>{setAccion(tipoAccion.BORRAR.code)} }>Borrar</button>
        <hr />
      </div>

      {(accion==tipoAccion.COPIAR.code) ? <Copiar onSavePaso={onSavePaso} /> : '' }



    </div>
  );
}
    