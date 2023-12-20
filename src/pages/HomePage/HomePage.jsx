import React from 'react';
import { NavigationComponent } from '../../components/HomePageComponents';
import './HomePage.css'; // Import your styles
import '../DashboardPage/footer.css';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import FooterComponent from '../../components/FooterComponent/Footer';
import { Link } from 'react-router-dom';

import { shallowEqual } from 'react-redux';




const HomePage = () => {

  const { isLoggedIn} = useSelector(
    (state) => ({
      isLoggedIn: state.auth.isAuthenticated,
    }),
    shallowEqual
  );
  
  return (
    <>
      <div>
        <NavigationComponent />
        <div className='home-container'>
          <div className='home-content'>
            <h1 className='home-heading'>
              ||  सा विद्या या विमुक्तये ||
            </h1>

            <div className='content-below-line'>
              <div className='text-container'>


                <div className='home-para'>
                  <h1>Our Moto.... &emsp; &emsp;</h1>
                  We devoted to make this a platform where
                   respective faculties can upload their study material
                    ,suggested online links, referenced 
                    vedios links and others things which will 
                    be easier for the students to get authenticate 
                    academics  materials. 
                    we welcomes faculties and students for 
                    suggestions and improvements.

         
  

                </div>
              </div>
              <div className='image-container'>
                <img
 
                  src="../../../public/assets/iips-logo.png"
 
                  alt="IIPS Logo"
                  className='logo-image'
                />
              </div>

            </div>
            <Link className='glow-on-hover' to={isLoggedIn ? '/dashboard' : '/login'}>
               Explore Study Material
            </Link>
            <div className='carousel'>
              {/* Add your carousel images here */}
 
              <img src="../../../public/assets/1_iips.jpg" alt="IIPS" />
              <img src="../../../public/assets/5_iips_meme.jpg" alt="IIPS" />
              <img src="../../../public/assets/6_iips-hostel.jpg" alt="IIPS" />
              <img src="../../../public/assets/2_iips.jpg" alt="IIPS" />
 
            </div>
          </div>
        </div>
      </div>
      <a href="https://www.linkedin.com/school/iips-davv/" target="_blank" className='iips-linkedin'
      >@International Institute of Professional Studies
 
        <img src="../../../public/assets/linkedin-logo.jpg" ></img>
 
      </a>

      <FooterComponent />

    </>
  );





}

export default HomePage;
