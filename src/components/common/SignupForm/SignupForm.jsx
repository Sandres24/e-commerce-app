import React from 'react';
import './SignupForm.css';
import { Formik, Form, Field } from 'formik';

const SignupForm = ({ handleSwitchForm }) => {
   return (
      <Formik
         initialValues={{ email: '', password: '' }}
         validate={(values) => {}}
         onSubmit={(values) => {
            console.log(values);
         }}
      >
         {() => (
            <>
               <Form className='SignupForm'>
                  <div className='input-container'>
                     <label htmlFor='email-signup'>Email</label>
                     <Field
                        type='text'
                        name='email'
                        id='email-signup'
                        autoComplete='off'
                     />
                  </div>
                  <div className='input-container'>
                     <label htmlFor='firstname'>First Name</label>
                     <Field
                        type='text'
                        name='firstname'
                        id='firstname'
                        autoComplete='off'
                     />
                  </div>
                  <div className='input-container'>
                     <label htmlFor='lastname'>Last Name</label>
                     <Field
                        type='text'
                        name='lastname'
                        id='lastname'
                        autoComplete='off'
                     />
                  </div>
                  <div className='input-container'>
                     <label htmlFor='password-signup'>Password</label>
                     <Field
                        type='password'
                        name='password'
                        id='password-signup'
                        autoComplete='off'
                     />
                  </div>
                  <div className='input-container'>
                     <label htmlFor='confirmpassword'>Confirm Password</label>
                     <Field
                        type='password'
                        name='confirmpassword'
                        id='confirmpassword'
                        autoComplete='off'
                     />
                  </div>
                  <div className='input-container'>
                     <label htmlFor='phone'>Phone</label>
                     <Field
                        type='text'
                        name='phone'
                        id='phone'
                        autoComplete='off'
                     />
                  </div>
                  <button className='submit-signup-btn' type='submit'>
                     Sign up
                  </button>
               </Form>
               <div className='switch-forms'>
                  Have an account? &nbsp;
                  <button type='button' onClick={handleSwitchForm}>
                     Log in
                  </button>
               </div>
            </>
         )}
      </Formik>
   );
};

export default SignupForm;
