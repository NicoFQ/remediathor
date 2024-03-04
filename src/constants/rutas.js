// Objetivo: Definir las rutas
const ruta = {
  APX: {
    base: '/fichtemcomp',
    datent: '/datent',
    datsal: '/datsal'
  },
  PASARELA: {
    base: '/fichtemcomp/pr/IFRS9',
    CECO: {
      datent: '/cap_datent',
      datsal: '/cap_datsal',
      histo: '/cap_histo'
    },
    CREG: {
      datent: '/capreg_datent',
      datsal: '/capreg_datsal',
      histo: '/capreg_histo'
    },
    CREGSIM: {
      datent: '/SIMU/capreg_datent',
      datsal: '/SIMU/capreg_datsal',
      histo: '/SIMU/capreg_histo'
    }
  },
  SAS: {
    base: '/fichtemcomp/pr/SAS'
  },
  TRANSMI: {
    base: '/fichtemcomp/pr/TRANSMI'
  }

}

export default ruta
