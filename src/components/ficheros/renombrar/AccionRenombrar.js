import { Button } from 'reactstrap'
import tipoAccion from '../../../constants/acciones'

import OrigenDestino from '../origen/OrigenDestino'
import { useState } from 'react'
import PrefijoSufijoButtonGroup from './PrefijoSufijoButtonGroup'
import CampoFicherosrenombrar from '../../textarea/CampoFicherosRenombrar'

export default function AccionRenombrar ({ pais, listDatsalDatent }) {
  const [textareaOrigenValue, setTextareaOrigenValue] = useState('')
  const [textareaDestinoValue, setTextareaDestinoValue] = useState('')

  const onChangePrefijoSufijo = (e) => {
    const id = e.target.id
    const arrFicheros = textareaOrigenValue.split('\n')
      .filter(v => v !== '')

    if (id === 'prefijo1') {
      addPrefijo1(e.target.value, arrFicheros)
    } else if (id === 'prefijo2') {
      addPrefijo2(e.target.value, arrFicheros)
    } else if (id === 'sufijo') {
      addSufijo(e.target.value, arrFicheros)
    }
  }

  const addPrefijo1 = (txt, arrFicheros) => {
    const arrFicherosRenombrados = arrFicheros.map(v => txt + v)
    setTextareaDestinoValue(arrFicherosRenombrados.join('\n'))
  }

  const addPrefijo2 = (txt, arrFicheros) => {
    console.log('pre2') // TODO: Pendiente actualizar el tipo de motor, prefijo2 -> motor
  }

  const addSufijo = (txt, arrFicheros) => {
    const arrFicherosRenombrados = arrFicheros.map(v => {
      let renombrado = 'error_sufijo'
      const [nombre, extension] = v.split('.')
      if (extension) {
        renombrado = nombre + txt + '.' + extension
      } else {
        renombrado = nombre + txt
      }
      return renombrado
    })
    setTextareaDestinoValue(arrFicherosRenombrados.join('\n'))
  }

  return (
    <div>
      <input type="hidden" name="accion" value={tipoAccion.RENOMBRAR.code} />

      <OrigenDestino pais={pais} origenDestino={'Origen'} listDatsalDatent={listDatsalDatent} textareaValue={textareaOrigenValue} setTextareaValue={setTextareaOrigenValue} />

      <div className='d-flex flex-row justify-content-between mb-3'>
        <PrefijoSufijoButtonGroup onChangePrefijoSufijo={onChangePrefijoSufijo}/>
      </div>

      <CampoFicherosrenombrar id={'ficherosDestino'} label={'Nuevos nombres:'} textareaValue={textareaDestinoValue} setTextareaValue={setTextareaDestinoValue} onChangePrefijoSufijo={onChangePrefijoSufijo} />

      <div className="d-grid gap-2 col-6 mx-auto">
        <Button type='submit' color="warning" size="sm" outline>
          {'{ 💾 Guardar }'}
        </Button>
      </div>

    </div>
  )
}
