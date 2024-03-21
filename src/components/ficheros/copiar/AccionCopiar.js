import { Button, FormGroup, Input, Label } from 'reactstrap'
import tipoAccion from '../../../constants/acciones'

import OrigenDestino from '../origen/OrigenDestino'
import { useState } from 'react'

export default function AccionCopiar ({ pais, listDatsalDatent, onChangePrefijoSufijo, textareaOrigenValue, setTextareaOrigenValue, textareaDestinoValue, setTextareaDestinoValue }) {
  const [checkRenombrarEnDestino, setCheckRenombrarEnDestino] = useState(false)

  const onRenombrarEnDestino = (e) => {
    setCheckRenombrarEnDestino(!checkRenombrarEnDestino)
    if (e.target.checked) {
      setTextareaDestinoValue(textareaOrigenValue)
    } else {
      setTextareaDestinoValue('')
    }
  }

  return (
    <div>
      <input type="hidden" name="accion" value={tipoAccion.COPIAR.code} />
      <div className='d-flex flex-row justify-content-between flex-wrap'>
      <FormGroup check>
        <Input id='renombrarDestino' name='renombrarDestino' type="checkbox" onChange={onRenombrarEnDestino} value={checkRenombrarEnDestino}/>
        <Label check for='renombrarDestino' >
          Renombrar en destino
        </Label>
      </FormGroup>
      <FormGroup check>
        <Input id='comprimirDestino' name='comprimirDestino' type="checkbox" />
        <Label check for='comprimirDestino' >
          Comprimir en destino
        </Label>
      </FormGroup>
      <FormGroup check>
        <Input id='descomprimirDestino' name='descomprimirDestino' type="checkbox" />
        <Label check for='descomprimirDestino' >
          Descomprimir en destino
        </Label>
      </FormGroup>
      </div>

      <OrigenDestino pais={pais} origenDestino={'Origen'} listDatsalDatent={listDatsalDatent} textareaValue={textareaOrigenValue} setTextareaValue={setTextareaOrigenValue} />

      <OrigenDestino pais={pais} origenDestino={'Destino'} listDatsalDatent={listDatsalDatent} textareaValue={textareaDestinoValue} setTextareaValue={setTextareaDestinoValue} renombrarDestino={checkRenombrarEnDestino} onChangePrefijoSufijo={onChangePrefijoSufijo} />

      <div className="d-grid gap-2 col-6 mx-auto">
        <Button type='submit' color="warning" size="sm" outline>
          {'{ 💾 Guardar }'}
        </Button>
      </div>
    </div>
  )
}
