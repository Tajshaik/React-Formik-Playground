import React from 'react';
import { useFormik } from "formik";

//initial values object
const initialValues= {
    UserName:'',
    Email:'',
    Password:''
}

const onSubmit =(values) =>{
    console.log(values)
    }

    //Valiate method for error message in each filed.
const validate = values =>{

    let errors={}
    if(!values.UserName){
    errors.UserName = 'Required'
    }
    if(!values.Password){
        errors.Password = 'Required'
        }
    if(!values.Email){
            errors.Email = 'Required'
            }
   return errors;
}
//Normal HTML form with useFormik Hook.
const Login = ()=>{
    const formik = useFormik({
        initialValues,
        onSubmit ,
        validate
    })
    
 return(
    <form onSubmit={formik.handleSubmit} onReset={formik.handleReset}>
        <div>
        <label htmlFor='UserName'>UserName</label>
        <input type='text' id='UserName'
         onChange={formik.handleChange} //Handles the change in values or state of field
         name='UserName'
         onBlur={formik.handleBlur} //Handles the Visisted
         value={formik.values.UserName}/>
         { //code to display errors.
         formik.touched.UserName && formik.errors.UserName? <div>{formik.errors.UserName}</div>: null }
         </div>
         <div>
        <label htmlFor='Email'>Email</label>
        <input type='text' id='Email'
         onChange={formik.handleChange}
         onBlur={formik.handleBlur} value={formik.values.Email} name='Email'/>
         { formik.touched.Email && formik.errors.Email? <div>{formik.errors.Email}</div>: null }
         </div>
         <div>
        <label htmlFor='Password'>Password</label>
        <input type='text' id='Password'
         onChange={formik.handleChange}
         onBlur={formik.handleBlur} value={formik.values.Password} name='Password'/>
         {formik.touched.Password && formik.errors.Password? <div>{formik.errors.Password}</div>: null }
         </div>
        <button type='submit'>Login</button>
        <button type='reset'>reset</button>
    </form>
 )
  };

export default Login