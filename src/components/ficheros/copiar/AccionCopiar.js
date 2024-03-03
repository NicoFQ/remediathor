import tipoAccion from '../../../constants/acciones'

export default function AccionCopiar ({ onSavePaso }) {
  const onSave = () => {

    // onSavePaso(`${tipoAccion.FICHEROS.acciones.COPIAR.title}`)
  }
  return (
    <div>
      <span>ORIGEN:</span>
      <input type="hidden" name="accion" value={tipoAccion.COPIAR.code} />
      <select name="origen" id="origen">
        <option value="APX">APX</option>
        <option value="PASARELA">PASARELA</option>
        <option value="TRANSMI">TRANSMI</option>
      </select>
      <br />
      <textarea name="ficherosOrigen" id="" cols="100" rows="1"></textarea>
      <br />
      <br />
      <span>DESTINO:</span>
      <select name="destino" id="origen">
        <option value="APX">APX</option>
        <option value="PASARELA">PASARELA</option>
        <option value="TRANSMI">TRANSMI</option>
      </select>
      <br />
      <textarea name="ficherosDestino" id="" cols="100" rows="1"></textarea>
      <hr />
      <button type='submit' onClick={onSave}>Guardar</button>
    </div>
  )
}
