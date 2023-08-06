import { useFormik } from 'formik'
import React from 'react'
import * as Yup from 'yup';

const validationSchema = Yup.object({
 Name: Yup.string().required('Required!'),
 Email: Yup.string().required('Required'),
 Password: Yup.string().required('Required')
})
const Formik = () => {
    const formik= useFormik({
        initialValues:{
            Name:'',
            Email:'',
            Password:''
        },
       onSubmit: values=>{
        console.log(values)
       },
       validationSchema,
    })
  return (
    <form onSubmit={formik.handleSubmit}>
    <div>
    <label htmlFor='Name'>Name</label>
    <input type='text' id='Name' name='Name'
    {...formik.getFieldProps('Name')}/>
    {formik.touched.Name && formik.errors.Name ? (<div>{formik.errors.Name}</div>) : null}
    </div>
    <div>
    <label htmlFor='Email'>Email</label>
    <input type='text' id='Email' name='Email' {...formik.getFieldProps('Email')}/>
    {formik.touched.Email && formik.errors.Email ? (<div>{formik.errors.Email}</div>) : null}
    </div>
    <div>
    <label htmlFor='Password'>Password</label>
    <input type='text' id='Password' name='Password' {...formik.getFieldProps('Password')}/>
    {formik.touched.Password && formik.errors.Password ? (<div>{formik.errors.Password}</div>) : null}
    </div>
    <button type='submit'>Submit</button>
    </form>
  )
}

export default Formik