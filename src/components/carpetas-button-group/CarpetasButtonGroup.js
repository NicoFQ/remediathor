import { useState } from 'react'
import { Button, ButtonGroup } from 'reactstrap'

export default function CarpetasButtonGroup ({ origenDestino, carpetas }) {
  const [carpeta, setCarpeta] = useState('datent')
  return (
    <>
        <ButtonGroup>
          {
            carpetas.map(carpetaArr => (<Button
                key={carpetaArr}
                color="secondary"
                size="sm"
                outline
                onClick={() => setCarpeta(carpetaArr)}
                active={carpeta === carpetaArr}
              >
                {carpetaArr}
              </Button>)

            )
          }
          <input type="hidden" name={origenDestino === 'O' ? 'carpetaOrigen' : 'carpetaDestino'} value={carpeta} />
        </ButtonGroup>
    </>
  )
}
