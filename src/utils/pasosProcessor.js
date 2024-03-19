import tipoAccion from './../constants/acciones'
import pasoReader from './pasosReader'
const pasoProcessor = {
  process: (paso) => {
    if (paso.accion === tipoAccion.COPIAR.code) {
      // pais, motorOrigen, maquinaOrigen, carpetaOrigen, ficherosOrigen, motorDestino, maquinaDestino, carpetaDestino, ficherosDestino
      const origen = {
        maquina: paso.maquinaOrigen,
        motor: paso.motorOrigen,
        carpeta: paso.carpetaOrigen,
        ficheros: paso.ficherosOrigen,
        todo: paso.todoOrigen
      }
      const destino = {
        maquina: paso.maquinaDestino,
        motor: paso.motorDestino,
        carpeta: paso.carpetaDestino,
        ficheros: paso.ficherosDestino,
        todo: paso.todoDestino,
        renombrar: paso.renombrarDestino
      }
      return pasoReader.copiar(paso.pais, origen, destino)
    } else if (paso.accion === tipoAccion.RENOMBRAR.code) {
      const origen = {
        maquina: paso.maquinaOrigen,
        motor: paso.motorOrigen,
        carpeta: paso.carpetaOrigen,
        ficheros: paso.ficherosOrigen,
        todo: paso.todoOrigen
      }
      const destino = {
        maquina: paso.maquinaDestino,
        motor: paso.motorDestino,
        carpeta: paso.carpetaDestino,
        ficheros: paso.ficherosDestino,
        todo: paso.todoDestino
      }
      return pasoReader.renombrar(paso.pais, origen, destino)
    }
  },
  merge: (pasosMap) => {
    return Array.from(pasosMap.keys()).reduce((acc, pasoKey, i) => {
      acc += `(${i + 1}). ` + pasoProcessor.process(pasosMap.get(pasoKey)) + '\n\n'
      return acc
    }, '')
  }
}

export default pasoProcessor
