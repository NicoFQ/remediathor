import { Button } from 'reactstrap'
import tipoAccion from '../../../constants/acciones'

import OrigenDestino from '../origen/OrigenDestino'
import { useState } from 'react'

export default function AccionBorrar ({ pais, listDatsalDatent }) {
  const [textareaOrigenValue, setTextareaOrigenValue] = useState('')

  return (
    <div>
      <input type="hidden" name="accion" value={tipoAccion.BORRAR.code} />

      <OrigenDestino pais={pais} origenDestino={'Origen'} listDatsalDatent={listDatsalDatent} textareaValue={textareaOrigenValue} setTextareaValue={setTextareaOrigenValue} />

      <div className="d-grid gap-2 col-6 mx-auto">
        <Button type='submit' color="warning" size="sm" outline>
          {'{ 💾 Guardar }'}
        </Button>
      </div>

    </div>
  )
}
