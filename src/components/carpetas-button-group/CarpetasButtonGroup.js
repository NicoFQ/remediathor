import { useState } from 'react'
import { Button, ButtonGroup, Input } from 'reactstrap'

export default function CarpetasButtonGroup ({ origenDestino, carpetas, carpeta, setCarpeta, setCierreHisto }) {
  const [histoDesctivado, setHistoDesctivado] = useState(true)

  const onChangeFechaCierre = (e) => {
    if (e.target.value.length >= 4) {
      setCierreHisto(e.target.value)
      setHistoDesctivado(false)
      setCarpeta('histo')
    } else {
      setHistoDesctivado(true)
    }
  }

  return (
    <>
      <input type="hidden" name={'carpeta' + origenDestino } value={carpeta} />
      <ButtonGroup className='mt-2 mb-2'>
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
          })
        }
        {
          carpetas.includes('histo') && // Para mostrar el input de fecha cierre solo cuando venga la carpeta histo
          <Input
            id={'input' + 'histo' + origenDestino}
            name={'input' + 'histo' + origenDestino}
            type="text"
            bsSize="sm"
            className='form-control'
            aria-describedby={'button' + 'histo' + origenDestino}
            onChange={onChangeFechaCierre}
        />}

      </ButtonGroup>
    </>
  )
}
