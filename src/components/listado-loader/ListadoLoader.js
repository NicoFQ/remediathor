import { useState } from 'react'
import ruta from '../../constants/rutas'

export default function ListadoLoader ({ id, name, setListado, listados }) {
  const [fechaListadoCargado, setFechaListadoCargado] = useState('-')
  const onChangeFile = async (e) => {
    const [file] = e.target.files
    updateListado(e.target.dataset.listado, file)
  }

  const handleDrop = async (e) => {
    e.preventDefault()
    const [file] = e.dataTransfer.files

    updateListado(e.target.dataset.listado, file)
  }

  const updateListado = async (idListado, file) => {
    if (file) {
      mapearListado(idListado, await file.text())
      const fecha = new Date()
      setFechaListadoCargado(fecha.toLocaleDateString('es-ES', { month: 'short', day: '2-digit' }) + ' ' + fecha.toLocaleTimeString('es-ES', { hour: '2-digit', minute: '2-digit' }))
    }
  }

  const mapearListado = (id, text) => {
    const mapListados = new Map()

    if (listados) {
      mapListados.delete(id)
      if (listados.has('DATENT_DATSAL')) {
        mapListados.set('DATENT_DATSAL', listados.get('DATENT_DATSAL'))
      }
      if (listados.has('HISTO')) {
        mapListados.set('HISTO', listados.get('HISTO'))
      }
      if (listados.has('HISTO_IFRS9')) {
        mapListados.set('HISTO_IFRS9', listados.get('HISTO_IFRS9'))
      }
    }

    const mapList = new Map()
    let ficherosActualArr = []
    let rutaActual = ''

    text.split('\n').forEach(linea => {
      if (linea.startsWith(ruta.PASARELA.base)) {
        rutaActual = linea.split(':')[0]
      } else if (linea === '\r' || linea === '') {
        mapList.set(rutaActual, ficherosActualArr)
        ficherosActualArr = []
        rutaActual = ''
      } else {
        ficherosActualArr.push(formatearObjetoFichero(linea))
      }
    })
    mapListados.set(id, mapList)
    setListado(mapListados)

    console.log(mapListados)
  }

  const formatearObjetoFichero = (lineaFichero) => {
    const lineaSplit = lineaFichero.split(/[ ]{1,}/g)
    if (lineaSplit.length < 3) {
      return { name: lineaSplit[lineaSplit.length - 2], date: '', size: lineaSplit[lineaSplit.length - 1] }
    }
    // return lineaSplit[lineaSplit.length - 1].padEnd(75, '·') + ' ' + lineaSplit[lineaSplit.length - 3].padStart(2, '0') + ' ' + lineaSplit[lineaSplit.length - 4] + ' ' + lineaSplit[lineaSplit.length - 2] + ' ' + lineaSplit[lineaSplit.length - 5]
    return {
      name: lineaSplit[lineaSplit.length - 1],
      date: lineaSplit[lineaSplit.length - 3].padStart(2, '0') + ' ' + lineaSplit[lineaSplit.length - 4] + ' ' + lineaSplit[lineaSplit.length - 2],
      size: lineaSplit[lineaSplit.length - 5]
    }
  }

  return (
    <div
      data-listado={id}
      onDrop={handleDrop}
      onDragOver={(event) => event.preventDefault()}
      className='text-center pt-1 pb-1'
      style={{ width: '100%' }}
    >
      <label htmlFor={id} data-listado={id} className="form-label mb-0" style={{ verticalAlign: 'middle', fontSize: '0.8rem', textDecoration: 'underline' }}>{ name }</label>
      <pre className='mb-0' data-listado={id}>{'{ ' + fechaListadoCargado + ' }'}</pre>
      <input className="form-control form-control-sm d-none" id={id} name={id} data-listado={id} type="file" onChange={onChangeFile} accept='.txt'/>
    </div>
  )
}
