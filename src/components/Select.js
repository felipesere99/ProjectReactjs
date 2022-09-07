import React from 'react'
import Form from 'react-bootstrap/Form';


const Select = ({options = [], onSelect}) => {

    const handleSelect = (e) => {
        onSelect(e.target.value)
    }

  return (
    <Form.Select aria-label="Default select example" onChange={handleSelect}>
      {
        options.map((opc) => <option key={opc.value} value={opc.value}>{opc.text}</option>)
      }
    </Form.Select>
  )
}

export default Select;