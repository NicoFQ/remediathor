import { FormGroup, Input, Label } from 'reactstrap'

export default function CampoFicherosrenombrar ({ id, label, textareaValue, setTextareaValue }) {
  return (
    <div>
      <div className='d-flex flex-row justify-content-between'>
        {

        }
      </div>
      <FormGroup floating>
        <Input id={id} name={id} type="textarea" value={textareaValue} onChange={e => setTextareaValue(e.target.value)} style={{ height: '200px' }}/>
        <Label for={id}>
          {label}
        </Label>
      </FormGroup>
    </div>
  )
}
