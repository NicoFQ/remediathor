import { Button, FormGroup, Input, Label, UncontrolledCollapse } from 'reactstrap'
import rutaProcessor from '../../utils/rutasProcessor'
import maquinas from '../../constants/maquinas'

export default function CampoFicheros ({ id, label, pais, maquina, motor, carpeta, listado }) {
  return (
    <FormGroup floating>
      <Input id={id} name={id} type="textarea" />
      <Label for={id}>
        {label + rutaProcessor.process(pais, maquina, motor, carpeta)}
      </Label>

      <div>
  <Button
    color="secondary"
    id={'toggler' + id}
    size='sm'
    outline
    style={{
      position: 'relative',
      bottom: '31px'
    }}
  >
    Listado
  </Button>
  <UncontrolledCollapse toggler={'#toggler' + id}>

      <select id={'listado' + id} multiple>
        {
          listado === null // El listado no se ha cargado
            ? <option key={'disabled'} disabled>Listado no cargado</option>
            : listado.size && maquina === maquinas.PASARELA.code && listado.has(rutaProcessor.process(pais, maquina, motor, carpeta))
              ? listado.get(rutaProcessor.process(pais, maquina, motor, carpeta))
                .map(fichero => (
                  <option key={fichero}> <code> {fichero} </code></option>
                ))
              : <option key={'disabled'} disabled>La ruta no existe</option> // La ruta no existe en el listado
        }
      </select>

  </UncontrolledCollapse>
</div>
    </FormGroup>
  )
}
