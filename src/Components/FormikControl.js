import React from 'react'
import Input from './Input'
import Textarea from './textarea'
import Select from './Select'
import Radiobutton from './Radiobutton'
import Checkbox from './Checkbox'

const FormikControl = (props) => {
   const {control , ...rest} = props
    switch(control){
    case 'input': 
     return <Input {...rest}/>
    case 'text-area':
      return <Textarea  {...rest} />
    case 'select':
      return <Select {...rest} />
    case 'radio':
      return <Radiobutton {...rest} />
    case 'checkbox':
      return <Checkbox {...rest} />
    default:
      return null
  }
}

export default FormikControl