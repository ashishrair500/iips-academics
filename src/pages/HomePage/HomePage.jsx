import React from 'react';

import { NavigationComponent } from '../../components/HomePageComponents';

//import {Login, Register,HomePage,DashboardPage} from "./pages/index.js"

const HomePage = () => {
  return (
    <> 
    <NavigationComponent/>
    <h1 className='display-1 my-5 text-center'>
        Welcome to iips Notes Portal 
    </h1>
    </>
  )
}

export default HomePage
