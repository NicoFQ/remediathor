import { FormGroup, Input, Label } from 'reactstrap'
import tipoAccion from '../../../constants/acciones'
import MaquinasButtonGroup from '../../maquinas-button-group/MaquinasButtonGroup'
import maquinas from './../../../constants/maquinas'

export default function AccionCopiar ({ onSavePaso }) {
  const onSave = () => {

    // onSavePaso(`${tipoAccion.FICHEROS.acciones.COPIAR.title}`)
  }
  return (
    <div>
      <input type="hidden" name="accion" value={tipoAccion.COPIAR.code} />
      <MaquinasButtonGroup origenDestino='O' maquinaDefecto={maquinas.PASARELA.code} />
      <FormGroup floating>
        <Input
          id="ficherosOrigen"
          name="ficherosOrigen"
          type="textarea"
        />
        <Label for="ficherosOrigen">
            Origen
        </Label>
      </FormGroup>
      {/* <textarea name="ficherosOrigen" id="" cols="100" rows="1"></textarea> */}
      <br />
      <br />
      <MaquinasButtonGroup origenDestino='D' maquinaDefecto={maquinas.APX.code} />

      <FormGroup floating>
        <Input
          id="ficherosDestino"
          name="ficherosDestino"
          type="textarea"
        />
        <Label for="ficherosDestino">
          Destino
        </Label>
      </FormGroup>
      <hr />
      <button type='submit' onClick={onSave}>Guardar</button>
    </div>
  )
}
