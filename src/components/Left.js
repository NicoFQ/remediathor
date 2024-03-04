import { useState } from 'react'
import PasoFichero from './ficheros/PasoFichero'
import PasoAJF from './ajf/PasoAJF'
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionItem
} from 'reactstrap'
export default function Left ({ onSavePaso, pasos }) {
  const [pasoFicheros, setPasoFicheros] = useState(true)
  const [pasoAjf, setPasoAjf] = useState(false)
  const [open, setOpen] = useState('')
  const toggle = (id) => {
    if (open === id) {
      setOpen()
    } else {
      setOpen(id)
    }
  }

  const onAddPasoAjf = () => {
    setPasoAjf(true)
    setPasoFicheros(false)
  }

  const onAddPasoFicheros = () => {
    setPasoFicheros(true)
    setPasoAjf(false)
  }

  return (
    <div>
       <Accordion flush open={open} toggle={toggle}>
        <AccordionItem>
          <AccordionHeader targetId="1">Paso 1</AccordionHeader>
          <AccordionBody accordionId="1">
            Las opciones que tiene el paso
          </AccordionBody>
        </AccordionItem>
      </Accordion>
        { pasoFicheros && <PasoFichero onSavePaso={onSavePaso} /> }
        { pasoAjf && <PasoAJF onSavePaso={onSavePaso} /> }
        <p><button onClick={onAddPasoAjf}>+ Add paso AJF</button> <button onClick={onAddPasoFicheros}>+Add paso Ficheros</button></p>
        <br />

    </div>
  )
}
