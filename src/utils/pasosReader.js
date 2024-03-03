import tipoAccion from './../constants/acciones'

const pasoReader = {
  copiar: ({ pais, motor, origen, rutaOrigen, ficherosOrigen, destino, rutaDestino, ficherosDestino }) => {
    return (
`${tipoAccion.COPIAR.title}
ORIGEN: ${origen}
${rutaOrigen}
${ficherosOrigen}

DESTINO: ${destino}
${rutaDestino}
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
