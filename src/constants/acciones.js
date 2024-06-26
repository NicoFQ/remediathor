// Objetivo: Definir las acciones
const tipoAccion = {
  COPIAR: {
    code: 'COPIAR',
    name: 'Copiar',
    title: 'Copiar los siguientes ficheros',
    origen: '',
    destino: ''

  },
  RENOMBRAR: {
    code: 'RENOMBRAR',
    name: 'Renombrar',
    title: 'Renombrar los siguientes ficheros:'
  },
  BORRAR: {
    code: 'BORRAR',
    name: 'Borrar',
    title: 'Borrar los siguientes ficheros:'
  },
  GZIP: {
    code: 'GZIP',
    name: 'Gzip',
    title: 'Comprimir los siguientes ficheros:'
  },
  UNGZIP: {
    code: 'UNGZIP',
    name: 'Ungzip',
    title: 'Desomprimir los siguientes ficheros:'
  }
}

export default tipoAccion
