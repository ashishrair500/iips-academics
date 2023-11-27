import React from 'react';

import { NavigationComponent } from '../../components/HomePageComponents';
import './AboutUs.css';
const AboutUs = () => {
  return (
    <>
     <NavigationComponent />
    <div className="about-us-container">
      <h2>Our Team</h2>

      <div className="team-members">
        <div className="team-member">
          <img src="../../public/static/my-img.jpg" alt="Sanyam Jain" />
          <h3>Sanyam Jain</h3>
          <div className="social-links">
            {/* Add your social media links */}
           
            
            <a href="https://www.linkedin.com/in/sanyam-jain-874892201/" target='_blank'>
              <i className="fab fa-linkedin">Linkedin</i>
            </a>
            <a href="https://github.com/Sanyam-2026" target='_blank'>
              <i className="fab fa-githu">Github</i>
            </a>
          </div>
        </div>

        <div className="team-member">
          <img src="../../public/static/ashish-img.jpg" alt="Ashish Rai" />
          <h3>Ashish Rai</h3>
          <div className="social-links">
            {/* Add your friend's social media links */}
            <a href="https://www.linkedin.com/in/ashish-rai-404-error/" target='_blank'>
              <i className="fab fa-linkedin">Linkedin</i>
            </a>
            <a href="https://github.com/ashishrair500" target='_blank'>
              <i className="fab fa-github">Github</i>
            </a>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default AboutUs;
