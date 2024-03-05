import { FormGroup, Input, Label } from 'reactstrap'

export default function Checkbox ({ id, label }) {
  return (
<FormGroup check>
        <Input id={id} name={id} type="checkbox" />
        <Label check for={id} >
          {label}
        </Label>
      </FormGroup>
  )
}
