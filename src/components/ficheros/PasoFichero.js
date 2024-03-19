import { useState } from 'react'
import tipoAccion from './../../constants/acciones'
import AccionCopiar from './copiar/AccionCopiar'
import { Button, ButtonGroup } from 'reactstrap'
import PaisesButtonGroup from '../paisesButtonGroup/PaisesButtonGroup'
import AccionRenombrar from './renombrar/AccionRenombrar'

export default function PasoFichero ({ onSavePaso, listDatsalDatent }) {
  const [accion, setAccion] = useState(tipoAccion.COPIAR.code)
  const [pais, setPais] = useState('AR')

  return (
    <div>
      <div className='d-flex flex-row justify-content-around flex-wrap'>
        <ButtonGroup className='mt-2 mb-2'>
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
        <PaisesButtonGroup pais={pais} setPais={setPais} />
      </div>
      <hr />
      {
        (accion === tipoAccion.COPIAR.code) && <AccionCopiar onSavePaso={onSavePaso} pais={pais} listDatsalDatent={listDatsalDatent} />
      }
      {
        (accion === tipoAccion.RENOMBRAR.code) && <AccionRenombrar onSavePaso={onSavePaso} pais={pais} listDatsalDatent={listDatsalDatent} />
      }
    </div>
  )
}
