// Assuming your JSX structure is within a component
import React from 'react';
import './Footer.css';
const FooterComponent = () => {
  return (
    <>
      <footer className='footer'>
        <div className='column'>
          <ul>
            <li><a href="https://iips.edu.in/"target="_blank">IIPS Official</a></li>
            <li><a href="https://www.dauniv.ac.in/" target="_blank">DAVV Official</a></li>
            {/* Add more list items as needed */}
          </ul>
        </div>
        <div className='column'>
          <ul>
            <li><a href="https://drive.google.com/file/d/175LfQtejcTzsOa7-eKU41m-gJ-3Jqejq/view?usp=drive_link"target="_blank">Academic Calendar</a></li>
            <li><a href="https://www.dauniv.ac.in/"target="_blank">Upcoming Exam Time Tables</a></li>
            <li><a href="/"target="_blank">Grievances/Suggestions</a></li>
            {/* Add more list items as needed */}
          </ul>
        </div>
        <div className='column'>
          <ul>
            <li><a href="https://iips.edu.in/"target="_blank">Books Availability in Library</a></li>
            <li><a href="https://www.dauniv.ac.in/"target="_blank">Results</a></li>
            <li><a href="https://www.dauniv.ac.in/"target="_blank">Labs Detail</a></li>
            {/* Add more list items as needed */}
          </ul>
        </div>
       
      </footer>
      <div className="footer">
      <p className="align">©️All right reserved 2023</p>
      <p>Privacy Policy</p>
      </div>
    </>
  );
};

export default FooterComponent;
