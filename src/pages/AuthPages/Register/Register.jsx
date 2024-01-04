import React from 'react';

import RegisterForm from '../../../components/AuthComponents/RegisterForm';
import './Register.css'; // Import your styles

const Register = () => {
  return (
    <div className='register-container'>
      <div className='register-content'>
        <h1 className='register-heading'>Welcome</h1>

        <div className='register-form'>
          <RegisterForm />
      
        </div>
      </div>
    </div>
  );
};

export default Register;
