// Assuming your JSX structure is within a component
import React from 'react';
import './Footer.css';
const Footer = () => {
  return (
    <>
      <footer className='footer'>
        <div className='column'>
          <ul>
            <li><a href="https://iips.edu.in/"target="_blank">IIPS Official</a></li>
            <li><a href="https://www.dauniv.ac.in/" target="_blank">DAVV Official</a></li>
            <li><a href="https://swayam.gov.in/"target="_blank">Swayam Portal</a></li>
            {/* Add more list items as needed */}
          </ul>
        </div>
        <div className='column'>
          <ul>
            <li><a href="https://drive.google.com/file/d/175LfQtejcTzsOa7-eKU41m-gJ-3Jqejq/view?usp=drive_link"target="_blank">Academic Calendar</a></li>
            <li><a href="https://drive.google.com/file/d/1SOP1oO4tKTByTqBKoXsoJCk1Is094DXz/view"target="_blank">Upcoming Exam Time Tables</a></li>
            <li><a href="https://davv.mponline.gov.in/Portal/services/DAVVDASHBOARD/DAVVHOME.aspx"target="_blank">DAVV MPONLINE</a></li>
            
            {/* Add more list items as needed */}
          </ul>
        </div>
        <div className='column'>
          <ul>
            <li><a href="http://www.lib.dauniv.ac.in/"target="_blank"> Central Library</a></li>
            <li><a href="https://www.dauniv.ac.in/utdresults"target="_blank">Results</a></li>
            <li><a href="/AboutUs"target="_blank">Contact Us</a></li>
            {/* Add more list items as needed */}
          </ul>
        </div>
       
      </footer>
      <div className="footer">
      <p >©️All rights reserved 2024</p>
       
      </div>
    </>
  );
};

export default Footer;

