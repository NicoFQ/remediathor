import { useState } from 'react'
import { Button, ButtonGroup, Input } from 'reactstrap'

export default function CarpetasButtonGroup ({ origenDestino, carpetas, carpeta, setCarpeta, setCierreHisto }) {
  const [histoDesctivado, setHistoDesctivado] = useState(true)

  const onChangeFechaCierre = (e) => {
    if (e.target.value.length === 4) {
      console.log('cierre: ' + e.target.value)
      setCierreHisto(e.target.value)
      setHistoDesctivado(false)
    } else {
      setHistoDesctivado(true)
    }
  }

  return (
        <ButtonGroup>
          {
            carpetas.map(carpetaArr => {
              return (
                <Button
                  key={'button' + carpetaArr + origenDestino}
                  id={'button' + carpetaArr + origenDestino}
                  name={'button' + carpetaArr + origenDestino}
                  color="secondary"
                  size="sm"
                  outline
                  onClick={() => setCarpeta(carpetaArr)}
                  active={carpeta === carpetaArr}
                  disabled={carpetaArr === 'histo' && histoDesctivado}
                >
                  {carpetaArr}
                </Button>
              )
            }

            )
          }

          <Input
            // key={'input' + carpetaArr + origenDestino}
            id={'input' + 'histo' + origenDestino}
            name={'input' + 'histo' + origenDestino}
            type="text"
            aria-describedby={'button' + 'histo' + origenDestino}
            onChange={onChangeFechaCierre}
          />
          <input type="hidden" name={'carpeta' + origenDestino } value={carpeta} />
        </ButtonGroup>
  )
}
