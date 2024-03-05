import maquinas from './../constants/maquinas'
import rutas from './../constants/rutas'
import paises from './../constants/paises'

const rutaProcessor = {
  process: (pais, maquina, motor, carpeta) => {
    if (maquina === maquinas.APX.code) {
      return `${rutas[maquina].base}${rutas[maquina][carpeta]}/`
    } else if (maquina === maquinas.PASARELA.code) {
      return `${rutas[maquina].base}${paises[pais].path}${rutas[maquina][motor][carpeta]}/`
    } else {
      return `${rutas[maquina].base}`
    }
  }
}

export default rutaProcessor
