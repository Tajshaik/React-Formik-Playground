import { ErrorMessage, Field } from 'formik'
import React from 'react'
import Errormessage from './Errormessage'

const Select = (props) => {
    const {name, label, options, ...rest} = props
  return (
    <div className='form-control'>
        <label htmlFor={name}>{label}</label>
        <Field as='select' name={name} id={name} {...rest}>
        {
            options.map(
                option =><option key={option.value} value={option.value}>
                    {
                    option.key
                    }
                </option> 
            )
        }
        </Field>
        <ErrorMessage name={name} component={Errormessage}/>
    </div>
  )
}

export default Select