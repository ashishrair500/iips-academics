import React, { useState } from 'react'
import { Link } from 'react-router-dom';

import { useSelector ,useDispatch} from 'react-redux'; //used to get data from redux
import { signOutUser } from '../../redux/actionCreators/authActionCreator';

const NavigationComponent = () => {

  const { isAuthenticated, user } = useSelector(state => state.auth)   //getting isAuthenticated and user data from redux
    const dispatch =useDispatch();

  return (

    <nav className='navbar navbar-expand-lg navbar-dark bg-dark ' >
      <Link className='navbar-brand ms-5' to="/">TopNote-Maro top ek Raat Me</Link>
      <ul className='navbar-nav ms-auto me-5'>

        {
          isAuthenticated ? (    //if isAuthenticate is true  then in dashboard and logout button else login or register
            <>
              <li className='nav-item mx-2'>
                <p className='my-0 mt-1 mx-2'>
                  <span className='text-light'>Welcome: </span>
                  <span className='text-warning'>{user.displayName.toUpperCase()}</span>
                </p>
              </li>
              <li className='nav-item mx-2'>

                <Link className='btn btn-primary btn-sm' to="/dashboard">dashboard</Link>
              </li>
              <li className='nav-item'>
                <button className='btn btn-success btn-sm' onClick={()=>dispatch(signOutUser())}>Logout</button>
              </li>
            </>
          )
            :
            (

              <>
                <li className='nav-item mx-2'>
                  <Link className='btn btn-primary btn-sm' to="/login">Login</Link>
                </li>
                <li className='nav-item'>
                  <Link className='btn btn-success btn-sm' to='/register'>register</Link>
                </li>
              </>
            )
        }


      </ul>

    </nav>

  )
}

export default NavigationComponent;
