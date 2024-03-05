import { useState } from 'react'
import Left from './components/Left'
import Right from './components/Right'
import pasoProcessor from './utils/pasosProcessor'
// import ruta from './constants/rutas'
// import rutaProcessor from './utils/rutasProcessor'
import ListadoLoader from './components/listado-loader/ListadoLoader'

export default function Remediathor () {
  const [pasos, setPasos] = useState([])
  const [listDatsalDatent, setListDatsalDatent] = useState(null)

  const onSavePaso = (e) => {
    e.preventDefault()
    const form = e.target
    const formData = new FormData(form)

    const formJson = Object.fromEntries(formData.entries())
    console.log(formJson)
    const pasoNuevo = pasoProcessor.process(formJson)
    setPasos([pasoNuevo])
    // setFiles((prevFiles) => [...prevFiles, ...newFiles]);

    console.log(listDatsalDatent)
  }

  return (
    <div>
      <div className='d-flex flex-row justify-content-around'>
        <h1>{'{R}'}</h1>
        <ListadoLoader name={'D-SalEnt'} setListado={setListDatsalDatent}/>
      </div>
      <hr />
      <form method='post' onSubmit={onSavePaso} className='left-form' data-bs-theme="dark">
        <Left onSavePaso={onSavePaso} pasos={pasos} listDatsalDatent={listDatsalDatent} />
        <Right pasos={pasos}/>
      </form>
    </div>
  )
}
