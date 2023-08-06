import { ErrorMessage, Field } from 'formik'
import React from 'react'
import Errormessage from './Errormessage'

const Checkbox = ({name,label,options,...rest}) => {
  return (
    <div className='form-control'>
        <label>{label}</label>
        <Field name={name} >
         {
            ({field})=>{
                return options.map(option=>{
                        return(
                     <React.Fragment key={option.key}>
                      <input type='checkbox'
                      id={option.value}
                      {...field}
                      {...rest }
                      value={option.value}
                      checked={field.value.includes(option.value)}/>
                      <label htmlFor={option.value}>{option.key}</label>
                     </React.Fragment>
                    )
                })
            }}
        </Field>
        <ErrorMessage component={Errormessage} name={name}/>   
    </div>
  )
}

export default Checkbox