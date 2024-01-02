import React from 'react';
import { Link } from 'react-router-dom';
import LoginForm from '../../../components/AuthComponents/LoginForm';
import './Login.css'; // Import your styles
const LoginPage = () => {
  return (
    <div className='login-container'>
      <div className='login-content'>
        <h1 className='login-heading'>Login Here</h1>

        <div className=''>
          <LoginForm />
        </div>
        <h1 className='heading-2'>Or</h1>
        <form autoComplete='off'>
         
          <button type='button'  className='google-signin-btn'>
            <span className='google-icon'>
    <img src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
     alt="Google Logo"/>
            </span>
            Sign in with Google
          </button>
          <Link to="/register" className='login-register-link'>Not a member? Register</Link>
        </form>
       
      </div>
    </div>

  );
};

export default LoginPage;
