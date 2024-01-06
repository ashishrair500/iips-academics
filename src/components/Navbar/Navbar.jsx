import { Link, useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { signOutUser } from '../../redux/actionCreators/authActionCreator';
import './Navbar.css';

const Navbar = () => {
  const { isAuthenticated, user } = useSelector((state) => state.auth);
  const location = useLocation();
  const dispatch = useDispatch();
  return (
    <nav className='navbar'>
      <div className='navbar-container'>
        <div className='navbar-links'>
          {location.pathname === '/dashboard' &&  (
            <Link className='navbar-brand' to='/'>
              iips.Academics
            </Link>
          )}
          {location.pathname !== '/dashboard' &&  (
            <Link className='navbar-brand' to='/dashboard'>
              iips.Academics
            </Link>
          )}
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
      </div>
      <ul className='navbar-nav'>
        {isAuthenticated ? (
          <>

            
              <li className='nav-item'>

             
          {location.pathname === '/' &&  (
            <Link className='navbar-brand' to='/dashboard'>
                  Home
                </Link>
          )}
          {location.pathname !== '/' &&  (
            <Link className='navbar-brand' to='/'>
                  Home
                </Link>
          )}
                 
                <img src="../../../../public/assets/home-icon.png" alt="Home" />
              </li>
          
           
            {location.pathname === '/' && (
              <li className='nav-item'>
                <button className='logout-btn' onClick={() => dispatch(signOutUser())}>
              
                Logout
                <img src="../../../public/assets/log-out.png" alt="log out" width="70px" />
      
                </button>
              </li>
            )}
            {location.pathname !== '/' && (
              <li className='nav-item'>
              <p className='user-welcome'>
                <span className='user-name'>{user.displayName?.toUpperCase()}</span>
                <img className='user-icon' src="../../../../public/assets/user-icon.png" alt="Admin" />
              </p>
            </li>
            )}
          </>
        ) : (
          <>
            <li className='nav-item'>
              <Link className='login-btn' to='/login'>
                Sign In
                <img src="../../../public/assets/sign-in_icon.png" alt="Sign In" width="70px" />
              </Link>
            </li>
            <li className='nav-item'>
              <Link className='register-btn' to='/Register'>
                Sign Up
                <img src="../../../public/assets/sign-up_icon.jpg" alt="Sign In" width="70px" />
              </Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
