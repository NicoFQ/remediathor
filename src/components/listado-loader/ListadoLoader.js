import ruta from '../../constants/rutas'

export default function ListadoLoader ({ id, name, setListado, listados }) {
  const listadoCargado = async (e) => {
    const [file] = e.target.files
    if (file) {
      mapearListado(e.target.id, await file.text())
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
        ficherosActualArr.push(formatearLineaFichero(linea))
      }
    })
    mapListados.set(id, mapList)
    setListado(mapListados)

    console.log(mapListados)

    // const rutaFiltrada = rutaProcessor.process(formJson.maquinaOrigen, formJson.motorOrigen, formJson.pais, formJson.carpetaOrigen)
    // console.log(rutaFiltrada)
    // console.log(mapList.get(rutaFiltrada))
  }

  const formatearLineaFichero = (lineaFichero) => {
    const lineaSplit = lineaFichero.split(/[ ]{1,}/g)
    // if (lineaSplit.length !== 9) {
    if (lineaSplit.length < 3) {
      return lineaFichero
    }
    //   throw new DOMException('Linea fichero con tamaño distinto de 9: ' + lineaSplit.length)
    // }
    return lineaSplit[lineaSplit.length - 1].padEnd(80, '·') + ' ' + lineaSplit[lineaSplit.length - 3].padStart(2, '0') + ' ' + lineaSplit[lineaSplit.length - 4] + ' ' + lineaSplit[lineaSplit.length - 2] + ' ' + lineaSplit[lineaSplit.length - 5]
    // return lineaSplit.slice(4).join(' ')
  }

  return (
    <div>
      <label htmlFor={id} className="form-label">{ name }</label>
      <input className="form-control form-control-sm " id={id} name={id} type="file" onChange={listadoCargado}/>
    </div>
  )
}
