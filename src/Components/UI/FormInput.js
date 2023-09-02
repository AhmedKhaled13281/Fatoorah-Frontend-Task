import React from 'react'
import {
    FormGroup,
    Label,
    Col,
    Input,
  } from "reactstrap";
const FormInput = ({label , id , name , placeholder , type , min}) => {
  return (
    <FormGroup>
    <Label style={{fontSize : "14px" , fontWeight : "700" , color : "#666F7C"}} for={id} sm={2} md={6}>
      {label}
    </Label>
    <Col sm={10}>
      <Input
        id={id}
        name={name}
        placeholder={placeholder}
        type={type}
        min={min}
      />
    </Col>
  </FormGroup>
  )
}

export default FormInput