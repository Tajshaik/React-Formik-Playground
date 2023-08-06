import React from 'react'
import { Form, Formik, Field, ErrorMessage, FieldArray } from 'formik'
import * as Yup from 'yup'
import Errormessage from './Errormessage'

const initialValues = {
    name:'',
    email:'',
    password:'',
    commenst:'',
    address:'',
    Social:{ //Nested Objects
        facebook:'',
        twitter:''
    },
    phonenumber:['',''],
    phNumber:['']
}
const onSubmit = values =>{
    console.log(values)
}

const validationSchema = Yup.object({
    name: Yup.string().required('Required!'),
    email:Yup.string().required('Required!'),
    password: Yup.string().required('Required!'),
})

const Loadsaveddata = () => {
  return (
   <Formik initialValues={initialValues}
   onSubmit={onSubmit} validationSchema={validationSchema}  >
       <Form >
                    <div>
                    <label htmlFor='name'>Name</label>
                    <Field type='text' id='name' name='name'/>
                    <ErrorMessage name='name' component='div'/>
                    </div>
                    <div>
                    <label htmlFor='email'>Email</label>
                    <Field type='text' id='email' name='email'/>
                    
                    <ErrorMessage name='email'
                    //entire new (errormessage)  component is passed to formik Errormessage component
                    component={Errormessage}/>
                    </div>
                    <div>
                    <label htmlFor='password'>Password</label>
                    <Field type='text' id='password' name='password'/>
                    <ErrorMessage name='password'>
                        { //Render Props pattern for error message 
                            (abcd) =>{
                                return(
                             <div className='error'>{abcd}</div>
                                )
                            }
                        }
                    </ErrorMessage>
                    </div>
                    <div>
                        <label htmlFor='comments'>Comments</label>
                        <Field  /* filed component can have text are instead of default input , we have to pass it with help of as attribute */
                        as='textarea' id='comments' name='comments'/>
                    </div>
                    <div className='form-control'>
                        <label htmlFor='address'>address</label>
                        <Field name='address'>{
                            //render props pattern 
                       (props)=>{
                         console.log(props)
                         const {field,form,meta} = props
                         return(
                         <div>
                            <input type='text' /* Have to pass field as prop to input */
                            id='address' {...field}/>
                            {meta.touched && meta.error ? <div>{meta.error}</div> : null}
                         </div>
                         )
                       }}
                    </Field>
                    </div>
                    <div>
                        <label htmlFor='facebook'>facebook</label>
                        <Field type='text' id='facebook' name='Social.facebook'/>
                    </div>
                    <div>
                        <label htmlFor='twitter'>twitter</label>
                        <Field type='text' id='twitter' name='Social.twitter'/>
                    </div>
                    <div>
                        <label htmlFor='phonenumber'>phone number1</label>
                        <Field type='text' id='phonenumber' name='phonenumber[0]'/>
                    </div>
                    <div>
                        <label htmlFor='phonenumber'>phonenumber2</label>
                        <Field type='text' id='phonenumber' name='phonenumber[1]'/>
                    </div>
                    <div>
                    <label >phNumber</label>
                        <FieldArray name='phNumber'>
                         {
                            (fieldArrayProps)=>{
                                console.log(fieldArrayProps)
                                const {push,remove, form} = fieldArrayProps;
                                const {values} = form
                                const {phNumber} = values
                                return(
                                    <div>
                                    {
                                        phNumber.map((phNum,index)=>(
                                            <div key={index}>
                                         {/* make sure u give write name in the name attribute */}
                                            <Field type='text' name={`phNumber[${index}]`} />
                                            <button type='button' onClick={()=> push('')}>+</button>
                                            {index >0 && <button type='button' onClick={()=> remove(index)}>-</button>}
                                            
                                           </div>
                                        ))
                                    }
                                    </div>
                                )
                            }
                         }  
                        </FieldArray>
                    </div>
                    <button type='submit' >Submit</button>
                    {/* <button type='submit' disabled={!props.isValid || props.isSubmitting }>Submit</button> */}
                    </Form>
   </Formik>
  )
}

export default Loadsaveddata