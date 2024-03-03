import tipoAccion from './../constants/acciones'
import pasoReader from './pasosReader'
const pasoProcessor = {
  process: (paso) => {
    switch (paso.accion) {
      case tipoAccion.COPIAR.code:
        return pasoReader.copiar(paso)

      default:
        break
    }
  }
}

export default pasoProcessor
