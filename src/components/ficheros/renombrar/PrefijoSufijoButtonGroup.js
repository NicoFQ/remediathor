import { Input } from 'reactstrap'

export default function PrefijoSufijoButtonGroup ({ className, onChangePrefijoSufijo }) {
  return (
    <div className={className} onChange={onChangePrefijoSufijo}>
      <Input id='prefijo1' type="text" bsSize="sm" className='form-control' placeholder='Prefijo 1' />
      <Input id='prefijo2' type="text" bsSize="sm" className='form-control' placeholder='Prefijo 2' disabled={true}/>
      <Input id='sufijo' type="text" bsSize="sm" className='form-control' placeholder='Sufijo' />
    </div>
  )
}
