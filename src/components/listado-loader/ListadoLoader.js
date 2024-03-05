import ruta from '../../constants/rutas'

export default function ListadoLoader ({ name, setListado }) {
  const listadoCargado = async (e) => {
    const [file] = e.target.files
    if (file) {
      mapearListado(await file.text())
    }
  }

  const mapearListado = (text) => {
    const mapList = new Map()
    let ficherosActualArr = []
    let rutaActual = ''

    text.split('\n').forEach(linea => {
      if (linea.startsWith(ruta.PASARELA.base)) {
        if (rutaActual !== '') {
          mapList.set(rutaActual, ficherosActualArr.slice(0, ficherosActualArr.length - 1))
          ficherosActualArr = []
        }
        rutaActual = linea.split(':')[0]
      } else {
        ficherosActualArr.push(formatearLineaFichero(linea))
      }
    })
    setListado(mapList)

    // const rutaFiltrada = rutaProcessor.process(formJson.maquinaOrigen, formJson.motorOrigen, formJson.pais, formJson.carpetaOrigen)
    // console.log(rutaFiltrada)
    // console.log(mapList.get(rutaFiltrada))
  }

  const formatearLineaFichero = (lineaFichero) => {
    const lineaSplit = lineaFichero.split(' ')

    // if (lineaSplit.length !== 9) {
    if (lineaSplit.length < 3) {
      return lineaFichero
    }
    //   throw new DOMException('Linea fichero con tamaño distinto de 9: ' + lineaSplit.length)
    // }
    return lineaSplit.slice(4).join(' ')
  }

  return (
    <div>
      <label htmlFor="formFileSm" className="form-label">{ name }</label>
      <input className="form-control form-control-sm " id="formFileSm" name='formFileSm' type="file" onChange={listadoCargado}/>
    </div>
  )
}
