import React from 'react'
import { ErrorMessage, Field } from 'formik'
import Errormessage from './Errormessage'

const Radiobutton = (props) => {
    const {name, label, options, ...rest} = props
  return (
    <div >
        <label>{label}</label>
        <Field name={name}>
            {({field})=>{
                return options.map( option =>{
                        return(
                            <React.Fragment key={option.key}>
                                <input type='radio' 
                                id={option.value}
                                {...field} {...rest}
                                value={option.value}
                                checked={field.value === option.value}/>
                                <label htmlFor={option.value}>{option.key}</label>
                            </React.Fragment>
                        )
                    })
            }}
        </Field>
        <ErrorMessage name={name} component={Errormessage} />
    </div>
  )
}

export default Radiobutton