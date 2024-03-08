import { FormGroup, Input, Label } from 'reactstrap'
import rutaProcessor from '../../utils/rutasProcessor'
// import DragDropListado from '../drag-drop-listado/DragDropListado'
import maquinas from '../../constants/maquinas'
import { useState } from 'react'
import motores from '../../constants/motores'
// import ruta from '../../constants/rutas'

export default function CampoFicheros ({ id, label, pais, maquina, motor, carpeta, listado, cierreHisto }) {
  const [mostrarListado, setMostrarListado] = useState(false)
  const [textareaValue, setTextareaValue] = useState('')

  const onChangeListado = (e) => {
    console.log(e.target.selectedOptions)
    if (e.target.selectedOptions) {
      const val = Array.from(e.target.selectedOptions).reduce((a, v) => {
        a += v.value.split(' ')[0] + '\n'
        return a
      }, '')

      setTextareaValue(val)
    }
  }

  const idListado = (motor === motores.IFRS9.code && carpeta === 'histo')
    ? 'HISTO_IFRS9'
    : (motor !== motores.IFRS9.code && carpeta === 'histo')
        ? 'HISTO'
        : 'DATENT_DATSAL'

  const listadoDisponible = () => {
    const disponible = maquina === maquinas.PASARELA.code && listado && listado.has(idListado)
    // setMostrarListado(disponible)
    return disponible
  }

  const obtenerListado = () => {
    const mapListado = listado.get(idListado)
    if (!mapListado.has(rutaProcessor.process(pais, maquina, motor, carpeta))) {
      return ['NOT_FOUND']
    }
    if (idListado !== 'DATENT_DATSAL') {
      const ficherosDeCarpeta = mapListado.get(rutaProcessor.process(pais, maquina, motor, carpeta)).filter(linea => linea.includes('20' + cierreHisto))
      if (ficherosDeCarpeta.length === 0) return ['Sin datos para el cierre: 20' + cierreHisto]
      return ficherosDeCarpeta
    }
    return mapListado.get(rutaProcessor.process(pais, maquina, motor, carpeta))
  }

  return (
    <div>

      { // Se muestra el switch solo cuando se seleccione pasarela
        listadoDisponible() &&
        (<FormGroup switch>
            <Input type="switch" role="switch" checked={mostrarListado} onChange={() => { setMostrarListado(!mostrarListado) }} disabled={listado === null} />
            <Label check>Ver listado</Label>
          </FormGroup>)
      }
      <br />
    <FormGroup floating>
      <Input id={id} name={id} type="textarea" value={textareaValue} onChange={e => setTextareaValue(e.target.value)} style={{ height: '200px' }}/>
      <Label for={id}>
        {label + rutaProcessor.process(pais, maquina, motor, carpeta)}
      </Label>

      <div>

      {
        mostrarListado && listadoDisponible() &&
        (<select id={'listado' + id} name={'listado' + id} multiple onChange={onChangeListado} style={{ height: '200px' }}>
          {
            // listado.has((motor === motores.IFRS9.code && carpeta === 'histo') ? 'HISTO_IFRS9' : (motor !== motores.IFRS9.code && carpeta === 'histo') ? 'HISTO' : 'DATENT_DATSAL')
            obtenerListado()
              .map(fichero => (
                  <option key={fichero}> {fichero} </option>
              ))
          }
        </select>)
      }
      </div>
    </FormGroup>
    </div>
  )
}
