import { useState } from 'react'
import PasoFichero from './ficheros/PasoFichero'
import PasoAJF from './ajf/PasoAJF'
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionItem,
  Button
} from 'reactstrap'
export default function Left ({ onSavePaso, pasos, setPasos, listDatsalDatent }) {
  // const [tipoPaso, setTipoPaso] = useState('')
  const [open, setOpen] = useState('1')
  const toggle = (id) => {
    if (open === id) {
      setOpen()
    } else {
      setOpen(id)
    }
  }

  const onClickNuevoPaso = (tipoPaso) => {
    const idNow = '' + Date.now()
    // setTipoPaso(tipoPaso)
    setPasos(new Map(pasos.set(idNow, { id: idNow, tipo: tipoPaso })))
    setOpen(idNow)
    console.log(pasos)
  }

  const onClickEliminarPaso = (e) => {
    pasos.delete(e.target.id)
    setPasos(new Map(pasos))
  }

  return (
    <div className='col-sm-12 col-md-12 col-lg-12 col-xl-7'>
       <Accordion flush open={open} toggle={toggle}>

        {
          Array.from(pasos.keys()).map((pasoKey, i) =>
            (<AccordionItem key={pasoKey}>
              <AccordionHeader targetId={pasoKey}><span id={pasoKey} className='me-3' onClick={onClickEliminarPaso} title='Eliminar' role='button'>❌</span>Paso {i + 1} {pasos.get(pasoKey).tipo}</AccordionHeader>
              <AccordionBody accordionId={pasoKey}>
                <form id={pasoKey} method='post' onSubmit={onSavePaso}>
                  { pasos.get(pasoKey).tipo === 'FICHERO' && <PasoFichero onSavePaso={onSavePaso} listDatsalDatent={listDatsalDatent}/> }
                  { pasos.get(pasoKey).tipo === 'AJF' && <PasoAJF onSavePaso={onSavePaso} /> }
                </form>
              </AccordionBody>
            </AccordionItem>)

          )
        }
      </Accordion>

      <div className='d-flex flex-row justify-content-around flex-wrap mt-2 mb-2'>
        <Button color="secondary" size="sm" onClick={() => onClickNuevoPaso('FICHERO')} >
          {'{ ➕ Paso Fichero }'}
        </Button>
        <Button color="secondary" size="sm" onClick={() => onClickNuevoPaso('AJF')} >
        {'{ ➕ Paso AJF }'}

        </Button>
      </div>
    </div>
  )
}
