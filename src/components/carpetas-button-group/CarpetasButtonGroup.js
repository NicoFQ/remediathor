import { Button, ButtonGroup } from 'reactstrap'

export default function CarpetasButtonGroup ({ origenDestino, carpetas, carpeta, setCarpeta }) {
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
          <input type="hidden" name={'carpeta' + origenDestino } value={carpeta} />
        </ButtonGroup>
    </>
  )
}
