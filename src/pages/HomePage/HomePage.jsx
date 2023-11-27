import React from 'react';
import { NavigationComponent } from '../../components/HomePageComponents';
import './HomePage.css'; // Import your styles
import '../DashboardPage/footer.css'
import FooterComponent from '../../components/FooterComponent/Footer';
import { Link } from 'react-router-dom';

const HomePage = () => {
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


                <p className='home-para'>
                  <h1>Our Moto.... &emsp; &emsp;</h1>
                  We devoted to make this a platform where
                   respective faculties can upload their study material
                    ,suggested online links, referenced 
                    vedios links and others things which will 
                    be easier for the students to get authenticate 
                    academics  materials. 
                    we welcomes faculties and students for 
                    suggestions and improvements.

         
  

                </p>
              </div>
              <div className='image-container'>
                <img

                  src="../../../public/static/media/iips-logo.png"
 
                  alt="IIPS Logo"
                  className='logo-image'
                />
              </div>

            </div>
            <Link className='glow-on-hover' to='/dashboard'>
              Explore Study Material
            </Link>
            <div className='carousel'>
              {/* Add your carousel images here */}

              <img src="../../../public/static/media/1_iips.jpg" alt="IIPS" />
              <img src="../../../public/static/media/5_iips_meme.jpg" alt="IIPS" />
              <img src="../../../public/static/media/6_iips-hostel.jpg" alt="IIPS" />
              <img src="../../../public/static/media/2_iips.jpg" alt="IIPS" />
 
            </div>
          </div>
        </div>
      </div>
      <a href="https://www.linkedin.com/school/iips-davv/" target="_blank" className='iips-linkedin'
      >@International Institue of Professional Studies

        <img src="../../../public/static/media/linkedin-logo.jpg" ></img>
 
      </a>

      <FooterComponent />

    </>
  );





}

export default HomePage;
