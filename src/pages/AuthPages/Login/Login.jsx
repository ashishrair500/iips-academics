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
          <Link to="/register" className='login-register-link'>Not a member? Register</Link>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
