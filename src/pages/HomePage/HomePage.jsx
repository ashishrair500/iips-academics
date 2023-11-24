import React from 'react';
import { NavigationComponent } from '../../components/HomePageComponents';
import './HomePage.css'; // Import your styles

const HomePage = () => {
  return (

    <div>
      <NavigationComponent />
      <div className='home-container'>
        <div className='home-content'>
          <h1 className='home-heading'>
            Welcome to IIPS Notes Portal
          </h1>
          <div className='carousel'>
            {/* Add your carousel images here */}
            <img src="../../../public/1_iips.jpg" alt="IIPS" />
            <img src="../../../public/2_iips.jpg" alt="IIPS" />
            <img src="../../../public/3_iips.jpg" alt="IIPS" />
          </div>
        </div>
      </div>
    </div>
  );

     
   
  

}

export default HomePage;
