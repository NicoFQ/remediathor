import { useState } from 'react'
import { Button, Input } from 'reactstrap'

export default function Right ({ pasos, textAreaValue, setTextAreaValue }) {
  const [btnTextCopiado, setBtnTextCopiado] = useState('{ Copiar }')

  const onClickCopiarPeticion = async (e) => {
    try {
      const peticion =
`Buenos días,
Solicitamos los siguientes pasos:

${textAreaValue}

Gracias!
Un saludo.
`
      await navigator.clipboard.writeText(peticion)
      setBtnTextCopiado('{ Copiado! }')
      setTimeout(() => { setBtnTextCopiado('{ Copiar }') }, 2000)
    } catch (err) {
      alert(err)
    }
  }

  return (
    <div className='col-sm-12 col-md-12 col-lg-12 col-xl-5'>
      <span>Buenas tardes,</span>
      <br />
      <div className='d-flex flex-row justify-content-between flex-wrap align-items-center'>
        <span>Solicitamos los siguientes pasos:</span>
        <Button color="secondary" size="sm" onClick={onClickCopiarPeticion} style={{ width: '7rem' }}>
          {btnTextCopiado}
        </Button>
      </div>

      <Input type="textarea" value={textAreaValue} onChange={e => setTextAreaValue(e.target.value)} style={{ height: '100%' }}/>

      <span>Gracias!</span>
      <br />
      <span>Un saludo.</span>
    </div>
  )
}
