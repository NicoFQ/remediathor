import tipoAccion from './../constants/acciones'
import maquina from './../constants/maquinas'
import rutaProcessor from './rutasProcessor'
const pasoReader = {

  copiar: (pais, origen, destino) => {
    return (
`${tipoAccion.COPIAR.title}${(destino.renombrar === 'on') ? ' y renombrar en destino' : ''}:

-- ORIGEN: ${maquina[origen.maquina].name} --${(origen.todo === 'on') ? '\n- Todos los ficheros de esta carpeta' : ''}
${rutaProcessor.process(pais, origen.maquina, origen.motor, origen.carpeta)}${(origen.todo === 'on') ? '*' : ''}

${origen.ficheros}

-- DESTINO: ${maquina[destino.maquina].name} --${(destino.renombrar === 'true') ? ' ⚠️Importante renombrar⚠️' : ''}${(destino.todo === 'on') ? '\n- Todos a esta carpeta' : ''}
${rutaProcessor.process(pais, destino.maquina, destino.motor, destino.carpeta)}

${destino.ficheros}
`
    )
  },

  renombrar: (pais, origen, destino) => {
    return (
`${tipoAccion.RENOMBRAR.title}

-- MAQUINA: ${maquina[origen.maquina].name} --
${rutaProcessor.process(pais, origen.maquina, origen.motor, origen.carpeta)}

- Ficheros:
${origen.ficheros}

+ Nuevos nombres:
${destino.ficheros}
`
    )
  },

  borrar: (pais, origen) => {
    return (
`${tipoAccion.BORRAR.title}

-- MAQUINA: ${maquina[origen.maquina].name} --
${rutaProcessor.process(pais, origen.maquina, origen.motor, origen.carpeta)}

${origen.ficheros}
`
    )
  }
}

export default pasoReader
