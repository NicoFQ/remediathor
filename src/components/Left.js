import { useState } from 'react'
import PasoFichero from './ficheros/PasoFichero'
import PasoAJF from './ajf/PasoAJF'

export default function Left ({ onSavePaso }) {
  const [pasoFicheros, setPasoFicheros] = useState(true)
  const [pasoAjf, setPasoAjf] = useState(false)

  const onAddPasoAjf = () => {
    setPasoAjf(true)
    setPasoFicheros(false)
  }

  const onAddPasoFicheros = () => {
    setPasoFicheros(true)
    setPasoAjf(false)
  }

  return (
    <div className="border">
        { pasoFicheros && <PasoFichero onSavePaso={onSavePaso} /> }
        { pasoAjf && <PasoAJF onSavePaso={onSavePaso} /> }
        <p><button onClick={onAddPasoAjf}>+ Add paso AJF</button> <button onClick={onAddPasoFicheros}>+Add paso Ficheros</button></p>
        <br />

    </div>
  )
}
