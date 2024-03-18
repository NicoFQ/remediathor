import { Button, ButtonGroup } from 'reactstrap'
import paises from './../../constants/paises'

export default function PaisesButtonGroup ({ pais, setPais }) {
  const arrayPaises = Object.keys(paises)
  return (
    <>
      <ButtonGroup className='mt-2 mb-2'>
        {
          arrayPaises.map(paisArr => (
            <Button
            key={paisArr}
            color="secondary"
            size="sm"
            outline
            onClick={() => setPais(paisArr)}
            active={pais === paises[paisArr].code}
          >
            {paisArr}
          </Button>
          ))
        }
      </ButtonGroup>
      <input type="hidden" name="pais" value={pais} />
    </>
  )
}
