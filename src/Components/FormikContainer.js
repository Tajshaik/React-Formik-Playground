import React from 'react';
import {Formik, Form} from 'formik';
import * as Yup from 'yup';
import FormikControl from './FormikControl';

const dropdownOptions = [
    { key: 'Select an option', value: '' },
    { key: 'Option 1', value: 'option1' },
    { key: 'Option 2', value: 'option2' },
    { key: 'Option 3', value: 'option3' }
  ];

  const radioOptions = [
    { key: 'Option 1', value: 'rOption1' },
    { key: 'Option 2', value: 'rOption2' },
    { key: 'Option 3', value: 'rOption3' }
  ]

  const checkOptions = [
    { key: 'Option 1', value: 'rOption1' },
    { key: 'Option 2', value: 'rOption2' },
    { key: 'Option 3', value: 'rOption3' }
  ]

const initialValues={
email:'',
textarea:'',
select:'',
radio:'',
checkboxes:[],
}

const onSubmit = (Values)=>{
    console.log(Values)


}

const validationSchema = Yup.object({
 email: Yup.string().required('Email is Required'),
 textarea: Yup.string().required('Reqired'),
 select: Yup.string().required('required select'),
 radio: Yup.string().required('required a option'),
 checkboxes: Yup.array().required('Required').min(1),
})


const FormikContainer = () => {
  return (
        <Formik initialValues={initialValues} 
        validationSchema={validationSchema} onSubmit={onSubmit}>
       {
        Formik =>(
            <Form>
            <FormikControl 
            control='input'
            name='email'
            label='Email'/>
            <FormikControl
            control='text-area' 
            name='textarea'
            label='TextArea'/>
            <FormikControl 
            control='select'
            name='select'
            label='Select'
            options={dropdownOptions}
            />
            <FormikControl 
            control='radio'
            name='radio'
            label='Radio'
            options={radioOptions}/>
            <FormikControl 
            control='checkbox'
            label='Checkbox'
            name='checkboxes'
            options={checkOptions}
            />
            <button type='submit'>submit</button>
            </Form>
        )
       }
        </Formik>
    )
}

export default FormikContainer