import MaquinasButtonGroup from '../../maquinas-button-group/MaquinasButtonGroup'
import CampoFicheros from '../../textarea/CampoFicheros'
import { useState } from 'react'
import Checkbox from '../../Checkbox'

export default function OrigenDestino ({ pais, origenDestino, listDatsalDatent }) {
  const [maquina, setMaquina] = useState('PASARELA')
  const [motor, setMotor] = useState('CECO')
  const [carpeta, setCarpeta] = useState('datent')
  const [cierreHisto, setCierreHisto] = useState('datent')

  const todoOrigenDestino = 'todo' + origenDestino
  return (
    <div>
      <MaquinasButtonGroup origenDestino={origenDestino} maquina={maquina} setMaquina={setMaquina} motor={motor} setMotor={setMotor} carpeta={carpeta} setCarpeta={setCarpeta} setCierreHisto={setCierreHisto}/>
      <Checkbox id={todoOrigenDestino} label={'Todo'}/>
      <CampoFicheros id={'ficheros' + origenDestino} label={origenDestino + ': '} pais={ pais } maquina={maquina} motor={motor} carpeta={carpeta} listado={listDatsalDatent} cierreHisto={cierreHisto} />
    </div>
  )
}
