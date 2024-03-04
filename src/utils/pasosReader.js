import tipoAccion from './../constants/acciones'
import maquina from './../constants/maquinas'
import rutaProcessor from './rutasProcessor'
const pasoReader = {
  copiar: ({ pais, motorOrigen, maquinaOrigen, carpetaOrigen, ficherosOrigen, motorDestino, maquinaDestino, carpetaDestino, ficherosDestino }) => {
    return (
`${tipoAccion.COPIAR.title}
ORIGEN: ${maquina[maquinaOrigen].name}
${rutaProcessor.process(maquinaOrigen, motorOrigen, pais, carpetaOrigen)}
${ficherosOrigen}

DESTINO: ${maquina[maquinaDestino].name}
${rutaProcessor.process(maquinaDestino, motorDestino, pais, carpetaDestino)}
${ficherosDestino}
`
    )
  },
  renombrar: ({ pais, motor, maquina, ruta, ficheros, nuevosNombre }) => {

  },
  borrar: ({ pais, motor, maquina, ruta, ficheros }) => {

  }
}

export default pasoReader
