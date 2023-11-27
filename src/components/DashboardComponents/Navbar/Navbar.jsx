// Navbar.jsx

import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import './Navbar.css'; // Add this line
const Navbar = () => {
  const { isAuthenticated, user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  return (
    <nav className='navbar'>
      <div className='navbar-container'>
        <Link className='navbar-brand' to='/'>
          iips.Academics
        </Link>

        <div className='navbar-links'>
          <Link className='navbar-brand' to='/aboutus'>
            Aboutus
          </Link>
          <Link className='navbar-brand' to='https://github.com/ashishrair500/iips-academics'>
            Github
          </Link>
        </div>
</div>
        <ul className='navbar-nav'>
          {isAuthenticated ? (
            <>
             
              <li className='nav-item'>
                <Link className='Home navbar-brand' to='/'>
                  Home
                </Link>
                <img src="../../../../public/assets/home-icon.png"></img>
              </li>
              <li className='nav-item'>
                <p className='user-welcome'>
                <span className='user-name'>{user.displayName?.toUpperCase()}</span>
                  <img className='admin-icon' src="../../../../public/assets/admin-icon.png"></img>
                </p>
               
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
      
    </nav>
  );
};

export default Navbar;
