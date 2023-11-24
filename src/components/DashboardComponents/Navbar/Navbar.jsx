// Navbar.jsx

import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { signOutUser } from '../../../redux/actionCreators/authActionCreator';
import './Navbar.css'; // Add this line

const Navbar = () => {
  const { isAuthenticated, user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  return (
    <nav className='navbar'>
      <div className='navbar-container'>
        <Link className='navbar-brand' to='/dashboard'>
          iips.Academics
        </Link>

        <div className='navbar-links'>
          <Link className='navbar-link' to='/aboutus'>
            Aboutus
          </Link>
          <Link className='navbar-link' to='/contactus'>
            Contactus
          </Link>
        </div>

        <ul className='navbar-nav'>
          {isAuthenticated ? (
            <>
              <li className='nav-item'>
                <p className='user-welcome'>
                  Welcome: <span className='user-name'>{user.displayName?.toUpperCase()}</span>
                </p>
              </li>
              <li className='nav-item'>
                <Link className='logout-btn' to='/'>
                  Home
                </Link>
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
                <Link className='login-btn' to='/login'>
                  Login
                </Link>
              </li>
              <li className='nav-item'>
                <Link className='register-btn' to='/register'>
                  Register
                </Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
