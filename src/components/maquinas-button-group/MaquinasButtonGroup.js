import { useState } from 'react'
import { Button, ButtonGroup } from 'reactstrap'
import maquinas from './../../constants/maquinas'
import MotoresButtonGroup from '../motores-button-group/MotoresButtonGroup'
import CarpetasButtonGroup from '../carpetas-button-group/CarpetasButtonGroup'

export default function MaquinasButtonGroup ({ origenDestino, maquinaDefecto }) {
  const [maquina, setMaquina] = useState(maquinaDefecto)

  const getCarpetas = (maquina) => {
    if (maquina === maquinas.APX.code) {
      return ['datent', 'datsal']
    } else if (maquina === maquinas.PASARELA.code) {
      return ['datent', 'datsal', 'histo']
    }
  }
  const [carpetas, setCarpetas] = useState(getCarpetas(maquina))

  const onClickMaquina = (maquina) => {
    if (maquina === maquinas.APX.code) {
      setCarpetas(getCarpetas(maquina))
    } else if (maquina === maquinas.PASARELA.code) {
      setCarpetas(getCarpetas(maquina))
    }
    setMaquina(maquina)
  }

  const arrayMaquinas = Object.keys(maquinas)
  return (
    <div className='d-flex flex-row justify-content-around'>
      <ButtonGroup>
        {
          arrayMaquinas.map(maquinaArr => (
            <Button
            key={maquinaArr}
            color="secondary"
            size="sm"
            outline
            onClick={() => onClickMaquina(maquinaArr)}
            active={maquina === maquinas[maquinaArr].code}
          >
            {maquinaArr}
          </Button>
          ))
        }
      <input type="hidden" name={origenDestino === 'O' ? 'maquinaOrigen' : 'maquinaDestino'} value={maquina} />
      </ButtonGroup>
      {
        maquina === maquinas.PASARELA.code
          ? <MotoresButtonGroup origenDestino={origenDestino} />
          : ''
      }
      {
      maquina === maquinas.PASARELA.code || maquina === maquinas.APX.code
        ? <>
          <CarpetasButtonGroup origenDestino={origenDestino} carpetas={carpetas} />
        </>
        : ''
      }
    </div>
  )
}
