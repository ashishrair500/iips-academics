import React from 'react';
import { useNavigate } from 'react-router-dom';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import './Register.css'; // Import your styles
import { toast } from 'react-toastify';

const Register = () => {

  const [success, setSuccess] = React.useState(false);
  const navigate = useNavigate();

  const handleGoogleSignIn = async () => {
    try {
      const provider = new firebase.auth.GoogleAuthProvider();
      const result = await firebase.auth().signInWithPopup(provider);
      const user = result.user;
      toast.success(`Welcome ${user.displayName}`);
      console.log('Google Sign-Up Successful:', user.displayName);
      // Redirect to the dashboard page
      navigate('/dashboard');
    } catch (error) {
      console.error('Google Sign-Up Error:', error.message);
    }
  };

  React.useEffect(() => {
    if (success) {
      navigate('/dashboard');
    }
  }, [success, navigate]);



  return (
    <div className='register-container'>
      <div className='register-content'>
        <h1 className='register-heading'>Welcome</h1>
        <div>
      <button type='button' onClick={handleGoogleSignIn} className='google-signup-btn'>
      <span className='google-icon'>
      <img  src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
             alt="Google Logo"/>
      </span>
              Sign Up with Google
    </button>
      
        </div>
      </div>
    </div>
  );
};

export default Register;
