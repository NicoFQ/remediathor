import maquinas from './../constants/maquinas'
import rutas from './../constants/rutas'
import paises from './../constants/paises'
import motores from '../constants/motores'

const rutaProcessor = {
  process: (pais, maquina, motor, carpeta) => {
    if (maquina === maquinas.APX.code) {
      return `${rutas[maquina].base}${rutas[maquina][carpeta]}/`
    } else if (maquina === maquinas.PASARELA.code) {
      if (motor === motores.IFRS9SIM.code) {
        return `${rutas[maquina].base}${paises[pais].pathifrs9sim}${rutas[maquina][motor][carpeta]}/`
      }
      return `${rutas[maquina].base}${paises[pais].path}${rutas[maquina][motor][carpeta]}/`
    } else {
      return `${rutas[maquina].base}`
    }
  }
}

export default rutaProcessor
