import React from 'react';
import { NavigationComponent } from '../../components/HomePageComponents';
import './HomePage.css'; // Import your styles
import '../DashboardPage/footer.css'
const HomePage = () => {
  return (
<>

 
    <div>
      <NavigationComponent />
      
      <div className='line-break'></div>
      
      <div className='home-container'>
        <div className='home-content'>
        <img src="../../../public/iips-logo.png" alt="IIPS"  />
          {/* <h1 className='home-heading'>
            Welcome to IIPS Notes Portal
          </h1> */}
          <div className='carousel'>
            {/* Add your carousel images here */}
            <img src="../../../public/1_iips.jpg" alt="IIPS" />
            <img src="../../../public/2_iips.jpg" alt="IIPS" />
            <img src="../../../public/3_iips.jpg" alt="IIPS" />
            <img src="../../../public/1_iips.jpg" alt="IIPS" />
            <img src="../../../public/2_iips.jpg" alt="IIPS" />
            <img src="../../../public/3_iips.jpg" alt="IIPS" />
            <img src="../../../public/1_iips.jpg" alt="IIPS" />
            <img src="../../../public/2_iips.jpg" alt="IIPS" />
            <img src="../../../public/3_iips.jpg" alt="IIPS" />
          </div>
        </div>
      </div>
    </div>
    <footer className='footer'>
        <ul>
          <li>
            <a href="https://iips.edu.in/"> IIPS Website </a>
          </li>
          <li>
            <a href="https://iips.edu.in/"> Download Syllabus </a>
          </li>
          <li>
            <a href="https://iips.edu.in/">DAVV Website </a>
          </li>
        </ul>
        <p >@copyright All right reserved</p>
      </footer>

    </>
  );

     
   
  

}

export default HomePage;
