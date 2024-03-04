// Objetivo: Definir las acciones
const tipoAccion = {
  COPIAR: {
    code: 'COPIAR',
    name: 'Copiar',
    title: 'Solicitamos copiar los siguientes ficheros:',
    origen: '',
    destino: ''

  },
  RENOMBRAR: {
    code: 'RENOMBRAR',
    name: 'Renombrar',
    title: 'Solicitamos renombrar los siguientes ficheros:'
  },
  BORRAR: {
    code: 'BORRAR',
    name: 'Borrar',
    title: 'Solicitamos borrar los siguientes ficheros:'
  }
}

export default tipoAccion
