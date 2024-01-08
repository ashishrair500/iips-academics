import React from 'react';
import { useNavigate } from 'react-router-dom';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import LoginForm from '../../../components/AuthComponents/LoginForm';
import { toast } from 'react-toastify';
import './Login.css'; // Import your styles
const LoginPage = () => {
  const [success, setSuccess] = React.useState(false);
  const navigate = useNavigate();

  const handleGoogleSignIn = async () => {
    try {
      const provider = new firebase.auth.GoogleAuthProvider();
      const result = await firebase.auth().signInWithPopup(provider);
      const user = result.user;
      toast.success(`Welcome ${user.displayName}`);
      
      console.log('Google Sign-In Successful:', user.displayName);
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
    <div className='login-container'>
      <div className='login-content'>
        <h1 className='login-heading'>Login Here</h1>

        <div className=''>
          <LoginForm />
        </div>
        <h1 className='heading-2'>Or</h1>
        <div>
      <button type='button' onClick={handleGoogleSignIn} className='google-signin-btn'>
      <span className='google-icon'>
      <img  src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
             alt="Google Logo"/>
      </span>
              Sign In with Google
    </button>
      
        </div>
       
      </div>
    </div>

  );
};

export default LoginPage;
