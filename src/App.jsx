
import { useEffect } from 'react'

import { Route, Routes } from 'react-router-dom'
import './App.css'
import { useDispatch } from 'react-redux'
import {Login, Register,HomePage,DashboardPage} from "./pages/index.js"
import React from 'react'
import { checkIsLoggedIn } from './redux/actionCreators/authActionCreator'
import { ToastContainer  } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';



const App =() => {
    const dispatch = useDispatch();
     useEffect(() => { 
      dispatch(checkIsLoggedIn());
    }, []);
  return (
    <div className='App'>
    <ToastContainer/>
    <Routes>
     <Route path='/' element={ <HomePage/>}/>
     <Route path='/login' element={<Login/>}/>
     <Route path='/register' element={<Register/>}/>
     <Route path='/dashboard/*' element={<DashboardPage/>}/>

    </Routes>
     
    </div>
  )
}

export default App