import { useState } from 'react'
import tipoAccion from './../../constants/acciones'
import Copiar from './copiar/AccionCopiar'

export default function PasoFichero ({ onSavePaso }) {
  const [accion, setAccion] = useState(tipoAccion.COPIAR.code)

  return (
    <div>
      <p>- PASO FICHERO -</p>
      <div>
        <p>Accion:</p>
        <button onClick={ () => { setAccion(tipoAccion.COPIAR.code) } }>Copiar</button>
        <button onClick={ () => { setAccion(tipoAccion.RENOMBRAR.code) } }>Renombrar</button>
        <button onClick={ () => { setAccion(tipoAccion.BORRAR.code) } }>Borrar</button>
        <hr />
      </div>

      {(accion === tipoAccion.COPIAR.code) ? <Copiar onSavePaso={onSavePaso} /> : '' }

    </div>
  )
}
