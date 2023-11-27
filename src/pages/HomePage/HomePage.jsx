import React from 'react';
import { NavigationComponent } from '../../components/HomePageComponents';
import './HomePage.css'; // Import your styles
import '../DashboardPage/footer.css'
 import FooterComponent from '../../components/FooterComponent/Footer';
 import { Link } from 'react-router-dom';
 import '../../components/HomePageComponents/Navigation.css'
const HomePage = () => {
  return (
<>

 
    <div>
      <NavigationComponent />
      
      <div className='line-break'></div>
      
      <div className='home-container'>
        <div className='home-content'>
        <h1 className='home-heading'>
            Welcome to IIPS Academics
          </h1>

        
          <div className='content-below-line'>
  <div className='text-container'>
   
    <p className='home-para'>
    <h1>Our Motto.... &emsp; &emsp;</h1>
      This is a dummy paragraph. You can replace it with your actual content.
      This is a dummy paragraph. You can replace it with your actual content.
      This is a dummy paragraph. You can replace it with your actual content.
      This is a dummy paragraph. You can replace it with your actual content.
    </p>
  </div>
  <div className='image-container'>
    <img
      src="../../../public/iips-logo.png"
      alt="IIPS Logo"
      className='logo-image'
    />
  </div>

</div>
  <Link className='dashboard-btn' to='/dashboard'>
              Explore Academics Material
              </Link>
          <div className='carousel'>
            {/* Add your carousel images here */}
            <img src="../../../public/1_iips.jpg" alt="IIPS" />
            <img src="../../../public/2_iips.jpg" alt="IIPS" />
            <img src="../../../public/3_iips.jpg" alt="IIPS" />
          
          </div>
        </div>
      </div>
    </div>
          <FooterComponent />

    </>
  );

     
   
  

}

export default HomePage;
