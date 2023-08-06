import React from 'react';
import {ErrorMessage, Field} from 'formik'
import Errormessage from './Errormessage';

const Input = (props) => {
    const {name, label, ...rest} = props
  return (
    <div className='Form-control'>
     <label htmlFor={name}>{label}</label>
     <Field id={name} name={name} {...rest} />
     <ErrorMessage name={name} component={Errormessage}/>
    </div>
  )
}

export default Input