import MaquinasButtonGroup from '../../maquinas-button-group/MaquinasButtonGroup'
import CampoFicheros from '../../textarea/CampoFicheros'
import { useState } from 'react'
import PrefijoSufijoButtonGroup from '../renombrar/PrefijoSufijoButtonGroup'

export default function OrigenDestino ({ pais, origenDestino, listDatsalDatent, textareaValue, setTextareaValue, renombrarDestino, onChangePrefijoSufijo }) {
  const [maquina, setMaquina] = useState('PASARELA')
  const [motor, setMotor] = useState('CECO')
  const [carpeta, setCarpeta] = useState('datent')
  const [cierreHisto, setCierreHisto] = useState('datent')

  return (
    <div>
      <MaquinasButtonGroup origenDestino={origenDestino} maquina={maquina} setMaquina={setMaquina} motor={motor} setMotor={setMotor} carpeta={carpeta} setCarpeta={setCarpeta} setCierreHisto={setCierreHisto}/>
      {
        renombrarDestino &&
        <PrefijoSufijoButtonGroup className='d-flex flex-row justify-content-between mb-3' onChangePrefijoSufijo={onChangePrefijoSufijo}/>
      }
      <CampoFicheros id={'ficheros' + origenDestino} label={origenDestino + ': '} origenDestino={origenDestino} pais={ pais } maquina={maquina} motor={motor} carpeta={carpeta} listado={listDatsalDatent} cierreHisto={cierreHisto} textareaValue={textareaValue} setTextareaValue={setTextareaValue} />
    </div>
  )
}
