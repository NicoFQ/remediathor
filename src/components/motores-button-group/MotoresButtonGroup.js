import { useState } from 'react'
import { Button, ButtonGroup } from 'reactstrap'
import motores from './../../constants/motores'

export default function MotoresButtonGroup ({ origenDestino }) {
  const [motor, setMotor] = useState('CECO')
  const arrayMotores = Object.keys(motores)
  return (
    <>
      <ButtonGroup>
        {
          arrayMotores.map(motorArr => (
            <Button
              key={motorArr}
              color="secondary"
              size="sm"
              outline
              onClick={() => setMotor(motorArr)}
              active={motor === motores[motorArr].code}
            >
              {motorArr}
            </Button>
          ))
        }
      </ButtonGroup>
      <input type="hidden" name={origenDestino === 'O' ? 'motorOrigen' : 'motorDestino'} value={motor} />
    </>
  )
}
