import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { signOutUser } from '../../redux/actionCreators/authActionCreator';
import './Navigation.css';

const NavigationComponent = () => {
  const { isAuthenticated, user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  return (
    <nav className='navbar'>
      <div className='navbar-container'>
        <Link className='navbar-brand' to='/dashboard'>
          iips.Academics
        </Link>

        <Link className='navbar-brand' to='/aboutus'>
          Aboutus
        </Link>
        <Link className='navbar-brand' to='https://github.com/ashishrair500/iips-academics' target="_blank">
           Github
        </Link>
        <Link className='navbar-brand' to='/our-contributers'>
          Our Contributers
        </Link>
      </div>

      <ul className='navbar-nav'>
        {isAuthenticated ? (
          <>
            <li className='nav-item'>
              <p className='user-welcome'>
                <span className='user-name'>{user.displayName.toUpperCase()}</span>
              </p>
            </li>
           
            <li className='nav-item'>
              <button className='logout-btn' onClick={() => dispatch(signOutUser())}>
                Logout
              </button>
            </li>
          </>
        ) : (
          <>
            <li className='nav-item'>
              <Link className='login-btn' to='/Register'>
                Sign In / Sign Up  <img
 
//  src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
src="../../../public/assets/sign-in_icon.jpg"
 alt="IIPS Logo"
 width="70px"
/>
              </Link>
            </li>
            
          </>
        )}
      </ul>
    </nav>
  );
};

export default NavigationComponent;
