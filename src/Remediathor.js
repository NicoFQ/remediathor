import { useState } from 'react'
import Left from './components/Left'
import Right from './components/Right'
import pasoProcessor from './utils/pasosProcessor'

export default function Remediathor () {
  const [pasos, setPasos] = useState([])
  const onSavePaso = (e) => {
    // Prevent the browser from reloading the page
    e.preventDefault()

    // Read the form data
    const form = e.target
    const formData = new FormData(form)

    // You can pass formData as a fetch body directly:
    // fetch('/some-api', { method: form.method, body: formData });

    // Or you can work with it as a plain object:
    const formJson = Object.fromEntries(formData.entries())
    console.log(formJson)
    const pasoNuevo = pasoProcessor.process(formJson)
    console.log(pasoNuevo)
    setPasos([pasoNuevo])
  }

  return (
    <form method='post' onSubmit={onSavePaso} className='left-form'>
      <Left onSavePaso={onSavePaso} />
      <Right pasos={pasos}/>
    </form>
  )
}
