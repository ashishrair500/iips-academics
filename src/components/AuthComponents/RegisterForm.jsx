// RegisterForm.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import './RegisterForm.css';

const RegisterForm = () => {
  const [success, setSuccess] = React.useState(false);
  const navigate = useNavigate();

  const handleGoogleSignIn = async () => {
    try {
      const provider = new firebase.auth.GoogleAuthProvider();
      const result = await firebase.auth().signInWithPopup(provider);
      const user = result.user;
      alert("Sign in successful");
      console.log('Google Sign-In Successful:', user);
      // Redirect to the dashboard page
      navigate('/dashboard');
    } catch (error) {
      console.error('Google Sign-In Error:', error.message);
    }
  };

  React.useEffect(() => {
    if (success) {
      navigate('/dashboard');
    }
  }, [success, navigate]);

  return (
    <form autoComplete='off'>
      {/* Google Sign-In Button */}
      <button type='button' onClick={handleGoogleSignIn} className='google-signin-btn'>
        <span className='google-icon'>
          {/* Add your Google icon here (you can use an SVG or an image) */}
          <img
 
 src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"

 alt="Google Logo"
 
/>
        </span>
        Sign in with Google
      </button>
    </form>
  );
};

export default RegisterForm;
