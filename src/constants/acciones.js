// Objetivo: Definir las acciones
const tipoAccion = {
  COPIAR: {
    code: 'COPIAR',
    title: 'Solicitamos copiar los siguientes ficheros:',
    origen: '',
    destino: '',

  },
  RENOMBRAR:{
    code: 'RENOMBRAR',
    title: 'Solicitamos renombrar los siguientes ficheros:'
  },
  BORRAR:{
    code: 'BORRAR',
    title: 'Solicitamos borrar los siguientes ficheros:'
  }
}
  
export default tipoAccion
  