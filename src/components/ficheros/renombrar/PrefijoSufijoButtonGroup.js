import { Input } from 'reactstrap'

export default function PrefijoSufijoButtonGroup ({ onChangePrefijoSufijo }) {
  return (
    <>
      <Input id='prefijo1' type="text" bsSize="sm" className='form-control' placeholder='Prefijo 1' onChange={onChangePrefijoSufijo} />
      <Input id='prefijo2' type="text" bsSize="sm" className='form-control' placeholder='Prefijo 2' onChange={onChangePrefijoSufijo} />
      <Input id='sufijo' type="text" bsSize="sm" className='form-control' placeholder='Sufijo' onChange={onChangePrefijoSufijo} />
    </>
  )
}
