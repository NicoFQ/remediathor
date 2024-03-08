// Objetivo: Definir los motores
const motor = {
  CECO: {
    name: 'Core Económico',
    code: 'CECO',
    path: {
      datent: '/cap_datent',
      datsal: '/cap_datsal',
      histo: '/cap_histo'
    },
    AR: {
      name: 'Argentina',
      code: 'AR',
      path: '/arge',
      MOTOR: 'KIFD377M',
      SAL: 'KIFD477M'
    },
    PE: {
      name: 'Perú',
      code: 'PE',
      path: '/peru',
      MOTOR: 'KIFD375M',
      SAL: 'KIFD475M'
    }
  },
  CREG: {
    name: 'Core Regulatorio',
    code: 'CREG',
    path: {
      datent: '/capreg_datent',
      datsal: '/capreg_datsal',
      histo: '/capreg_histo'
    }
  },
  CREGSIM: {
    name: 'Simulador parametria',
    code: 'CREGSIM',
    path: {
      datent: '/SIMU/capreg_datent',
      datsal: '/SIMU/capreg_datsal',
      histo: '/SIMU/capreg_histo'
    }
  },
  IFRS9: {
    name: 'Simulador parametria',
    code: 'IFRS9',
    path: {
      datent: '/datent',
      datsal: '/datsal',
      histo: '/histo'
    }
  }

}

export default motor
