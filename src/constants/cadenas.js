// Objetivo: Definir las cadenas/jobs
const cadena = {
    CECO: {
        MOTOR: {
            name: 'Motor',
            code: '_MOTOR_CAP',
            job:{
                DUMMY_1: {
                    name: 'Dummy 1',
                    code: 'KIFD951004_DUMMY_01'
                },
                DUMMY_2: {
                    name: 'Dummy 2',
                    code: 'KIFD951015_DUMMY_02'
                }
            },
            ctl:{
                INICIO: {
                    name: 'Ctl de inicio',
                    code: 'CTL_INICIO'
                }
            }
        },
        SAL: {
            name: 'Salidas motor',
            code: '_SAL_CAP'
        }
    },
    CREG: {
        name: 'Core Regulatorio',
        code: 'CREG',
        path: {
            datent: '/capreg_datent',
            datsal: '/capreg_datsal',
            histo: '/capreg_histo',
        }
    },
    CREGSIM: {
        name: 'Simulador parametria',
        code: 'CREGSIM',
        path: {
            datent: '/SIMU/capreg_datent',
            datsal: '/SIMU/capreg_datsal',
            histo: '/SIMU/capreg_histo',
        }
    },
    FLCREG: {
        name: 'Simulador de inputs',
        code: 'FLCREG',
    }

}
  
export default cadena
  