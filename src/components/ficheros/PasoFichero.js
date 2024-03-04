import { useState } from 'react'
import tipoAccion from './../../constants/acciones'
import AccionCopiar from './copiar/AccionCopiar'
import { Button, ButtonGroup } from 'reactstrap'
import PaisesButtonGroup from '../paisesButtonGroup/PaisesButtonGroup'

export default function PasoFichero ({ onSavePaso }) {
  const [accion, setAccion] = useState(tipoAccion.COPIAR.code)

  return (
    <div>
      <p>- PASO FICHERO -</p>
      <div className='d-flex flex-row justify-content-between'>
        <ButtonGroup>
          <Button
            color="secondary"
            size="sm"
            outline
            onClick={() => setAccion(tipoAccion.COPIAR.code)}
            active={accion === tipoAccion.COPIAR.code}
          >
            {tipoAccion.COPIAR.name}
          </Button>
          <Button
            color="secondary"
            size="sm"
            outline
            onClick={() => setAccion(tipoAccion.RENOMBRAR.code)}
            active={accion === tipoAccion.RENOMBRAR.code}
          >
            {tipoAccion.RENOMBRAR.name}
          </Button>
          <Button
            color="secondary"
            size="sm"
            outline
            onClick={() => setAccion(tipoAccion.BORRAR.code)}
            active={accion === tipoAccion.BORRAR.code}
          >
            {tipoAccion.BORRAR.name}
          </Button>
        </ButtonGroup>
        <PaisesButtonGroup />
      </div>
      <hr />
      {
      (accion === tipoAccion.COPIAR.code) ? <AccionCopiar onSavePaso={onSavePaso} /> : ''
      }
    </div>
  )
}
