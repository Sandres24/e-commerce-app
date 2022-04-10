import React from 'react';
import './LoginForm.css';
import { Formik, Form, Field } from 'formik';
import { useDispatch } from 'react-redux';
import { setUserThunk } from '../../../redux/actions';

const LoginForm = ({ handleSwitchForm }) => {
   const dispatch = useDispatch();

   const handleLoginValidation = (values) => {};

   const handleLoginSubmit = (values) => {
      dispatch(setUserThunk(values));
   };

   return (
      <Formik
         initialValues={{ email: '', password: '' }}
         validate={handleLoginValidation}
         onSubmit={handleLoginSubmit}
      >
         {() => (
            <>
               <Form className='LoginForm'>
                  <div className='test-data'>
                     <strong>Test data</strong>
                     <div className='field'>
                        <i className='fa fa-envelope'></i>user@gmail.com
                     </div>
                     <div className='field'>
                        <i className='fa fa-key'></i>user12345
                     </div>
                  </div>
                  <div className='input-container'>
                     <label htmlFor='email-login'>Email</label>
                     <Field
                        type='text'
                        name='email'
                        id='email-login'
                        autoComplete='off'
                     />
                  </div>
                  <div className='input-container'>
                     <label htmlFor='password-login'>Password</label>
                     <Field
                        type='password'
                        name='password'
                        id='password-login'
                        autoComplete='off'
                     />
                  </div>
                  <div className='input-container'></div>
                  <div className='login-error-message'>Invalid credentials</div>
                  <button className='submit-login-btn' type='submit'>
                     Login
                  </button>
               </Form>
               <div className='switch-forms'>
                  Don't have an account? &nbsp;
                  <button type='button' onClick={handleSwitchForm}>
                     Sign up
                  </button>
               </div>
            </>
         )}
      </Formik>
   );
};

export default LoginForm;
