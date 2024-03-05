import { Button, FormGroup, Input, Label } from 'reactstrap'
import tipoAccion from '../../../constants/acciones'

import OrigenDestino from '../origen/OrigenDestino'

export default function AccionCopiar ({ pais, listDatsalDatent }) {
  return (
    <div className='border'>
      <p>Accion copiar</p>
      <input type="hidden" name="accion" value={tipoAccion.COPIAR.code} />
      <FormGroup check>
        <Input id='renombrarDestino' name='renombrarDestino' type="checkbox" />
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
      <OrigenDestino pais={pais} origenDestino={'Origen'} listDatsalDatent={listDatsalDatent}/>
      <br />
      <br />
      <OrigenDestino pais={pais} origenDestino={'Destino'} listDatsalDatent={listDatsalDatent}/>
      <hr />

      <div className="d-grid gap-2 col-6 mx-auto">
        <Button type='submit' color="warning" size="sm" outline>
          Guardar
        </Button>
      </div>
    </div>
  )
}
