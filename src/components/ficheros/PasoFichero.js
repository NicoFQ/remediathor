import { useState } from 'react'
import tipoAccion from './../../constants/acciones'
import AccionCopiar from './copiar/AccionCopiar'
import { Button, ButtonGroup } from 'reactstrap'
import PaisesButtonGroup from '../paisesButtonGroup/PaisesButtonGroup'
import AccionRenombrar from './renombrar/AccionRenombrar'
import AccionBorrar from './borrar/AccionBorrar'
import FlagImg from '../svg-image/FlagImg'

export default function PasoFichero ({ onSavePaso, listDatsalDatent }) {
  const [textareaOrigenValue, setTextareaOrigenValue] = useState('')
  const [textareaDestinoValue, setTextareaDestinoValue] = useState('')
  const [accion, setAccion] = useState(tipoAccion.COPIAR.code)
  const [pais, setPais] = useState('AR')
  // const [prefijo, setPrefijo] = useState('')

  const onChangePrefijoSufijo = (e) => {
    // const id = e.target.id
    const pre1 = e.target.parentElement.children.prefijo1.value
    const pre2 = e.target.parentElement.children.prefijo2.value
    const suf = e.target.parentElement.children.sufijo.value

    let arrFicheros = textareaOrigenValue.split('\n')
      .filter(v => v !== '')

    if (pre1) {
      arrFicheros = addPrefijo1(pre1, arrFicheros)
    }
    if (pre2) {
      addPrefijo2(pre2, arrFicheros)
    }
    if (suf) {
      arrFicheros = addSufijo(suf, arrFicheros)
    }
    setTextareaDestinoValue(arrFicheros.join('\n'))
  }

  const addPrefijo1 = (txt, arrFicheros) => {
    return arrFicheros.map(v => txt + v)
    // setTextareaDestinoValue(arrFicherosRenombrados.join('\n'))
  }

  const addPrefijo2 = (txt, arrFicheros) => {
    console.log('pre2') // TODO: Pendiente actualizar el tipo de motor, prefijo2 -> motor
  }

  const addSufijo = (txt, arrFicheros) => {
    return arrFicheros.map(v => {
      let renombrado = 'error_sufijo'
      const [nombre, extension] = v.split('.')
      if (extension) {
        renombrado = nombre + txt + '.' + extension
      } else {
        renombrado = nombre + txt
      }
      return renombrado
    })
    // setTextareaDestinoValue(arrFicherosRenombrados.join('\n'))
  }

  return (
    <div>
      <div className='d-flex flex-row justify-content-around flex-wrap'>
        <ButtonGroup className='mt-2 mb-2'>
          {
            Object.keys(tipoAccion).map(tipo => (
              <Button
                key={tipo}
                color="secondary"
                size="sm"
                outline
                onClick={() => setAccion(tipoAccion[tipo].code)}
                active={accion === tipoAccion[tipo].code}
              >
                {tipoAccion[tipo].name}
              </Button>
            ))
          }
        </ButtonGroup>
        <div>
          <FlagImg pais={pais}/>
        </div>
        <PaisesButtonGroup pais={pais} setPais={setPais} />
      </div>
      <hr />
      {
        (accion === tipoAccion.COPIAR.code) && <AccionCopiar onSavePaso={onSavePaso} pais={pais} listDatsalDatent={listDatsalDatent} onChangePrefijoSufijo={onChangePrefijoSufijo} textareaOrigenValue={textareaOrigenValue} setTextareaOrigenValue={setTextareaOrigenValue} textareaDestinoValue={textareaDestinoValue} setTextareaDestinoValue={setTextareaDestinoValue} />
      }
      {
        (accion === tipoAccion.RENOMBRAR.code) && <AccionRenombrar onSavePaso={onSavePaso} pais={pais} listDatsalDatent={listDatsalDatent} onChangePrefijoSufijo={onChangePrefijoSufijo} textareaOrigenValue={textareaOrigenValue} setTextareaOrigenValue={setTextareaOrigenValue} textareaDestinoValue={textareaDestinoValue} setTextareaDestinoValue={setTextareaDestinoValue} />
      }
      {
        (accion === tipoAccion.BORRAR.code) && <AccionBorrar onSavePaso={onSavePaso} pais={pais} listDatsalDatent={listDatsalDatent} onChangePrefijoSufijo={onChangePrefijoSufijo} textareaOrigenValue={textareaOrigenValue} setTextareaOrigenValue={setTextareaOrigenValue} textareaDestinoValue={textareaDestinoValue} setTextareaDestinoValue={setTextareaDestinoValue} />
      }
    </div>
  )
}
