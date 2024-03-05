import { Button, ButtonGroup } from 'reactstrap'
import motores from './../../constants/motores'

export default function MotoresButtonGroup ({ origenDestino, motor, setMotor }) {
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
      <input type="hidden" name={'motor' + origenDestino} value={motor} />
    </>
  )
}
