// Render Prop
import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import '../Form/Form.css';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import * as Yup from 'yup';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';


const initialVal = {
  email: '', 
  password: '',
  gender:'',
  acceptTerms: false
}

const schema = Yup.object().shape({
  email: Yup.string()
    .email()
    .required("Email Required"),
  password: Yup.string()
    .required("Password Required")
    .min(8, "Password is Too short")
    .matches(/(?=.*[0-9])/, "Must Contain Number"),
  gender:Yup.string().required("A radio option is required"),
  acceptTerms: Yup.bool().oneOf([true], 'Accept Terms & Conditions is required')
})


const FormikForm = () => (
  <>
  <Box
  sx={{
    display: 'flex',
    flexWrap: 'wrap',
    '& > :not(style)': {
      m: 1,
      width: 700,
    },
  }}
  className='centerDiv'
>
  <Paper elevation={3} >
  <h3 className='head'>Form Validation</h3>
  <Formik
  initialValues={initialVal}
  validationSchema={schema}
  // validate={values => {
  //   const errors = {};
  //   if (!values.email) {
  //     errors.email = 'Required';
  //   } else if (
  //     !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
  //   ) {
  //     errors.email = 'Invalid email address';
  //   }

  //   if(!values.password){
  //     errors.password = 'Required';
  //   }
  //   else if(
  //     !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/i.test(values.password)
  //   ){
  //     errors.password = 'Invalid Password'
  //   }
  //   return errors;
  // }}

  onSubmit={(values) => {
    console.log(values,'valueee')
    alert(JSON.stringify(values,null,2))
  }}
>
  {() => (
    <Form className='form'>
      <label className='label'>Email Address</label>
      <Field type="email" placeholder='Enter your email' name="email" className='field'/>
      <ErrorMessage name="email" component="div" className='error'/>
      
      
      <label className='label'>Password</label>
      <Field type="password" name="password" placeholder='Enter your password' className='field'/>
      <ErrorMessage name="password" component="div" className='error'/>
      

      <label className='label'>Gender</label>
      <div role="group">

          <Field type="radio" name="gender" value="male" /> <span>Male</span> 
          <Field type="radio" name="gender" value="two" /><span>Female</span>
          <Field type="radio" name="gender" value="other" /><span>Other</span> 
      </div>
      <ErrorMessage name="gender" component="div" className="error" />


      <div className="form-group form-check check">
      <Field type="checkbox" name="acceptTerms" className='field'/>
      <label htmlFor="acceptTerms" className="label"> Accept Terms & Conditions</label>
      <ErrorMessage name="acceptTerms" component="div" className="error" />
      </div>

   

      <div className='btnMain'>
      <button type="submit" className='submit'>
        Submit
      </button>
      </div>
      </Form>
  )}
</Formik>
  </Paper>
  </Box>
  </>
);

export default FormikForm;