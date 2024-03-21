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
    },
    IFRS9: {
      datent: '/datent',
      datsal: '/datsal',
      histo: '/histo'
    },
    IFRS9SIM: {
      datent: '/datent',
      datsal: '/datsal',
      histo: '/histo'
    }
  },
  SAS: {
    base: '/SASDATOS/EXPLORAR/MODIRB/'
  },
  TRANSMI: {
    base: '\\\\Datdpto1\\datos_datdpto1\\TRANSMI\\SC004150\\_enviar\\datsal\\pd\\'
  }

}

export default ruta
