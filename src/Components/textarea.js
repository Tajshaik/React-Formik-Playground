import { ErrorMessage, Field } from 'formik'
import React from 'react'
import Errormessage from './Errormessage'

const Textarea = ({name,label,...rest}) => {
  return (
    <div>
        <label htmlFor={name}>{label}</label>
        <Field as='textarea' 
        name={name} {...rest}/>
        <ErrorMessage name={name} component={Errormessage} />
    </div>
  )
}

export default Textarea