import React from 'react';
import { Link } from 'react-router-dom';
import RegisterForm from '../../../components/AuthComponents/RegisterForm';
import './Register.css'; // Import your styles

const Register = () => {
  return (
    <div className='register-container'>
      <div className='register-content'>
        <h1 className='register-heading'>Register</h1>

        <div className='register-form'>
          <RegisterForm />
          <Link to="/login" className='register-login-link'>Already a member? Login</Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
