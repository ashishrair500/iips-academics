import React, { useState, useEffect } from 'react';
import './Contributer.css'; // Import your CSS file
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import axios from 'axios'; // Import axios

const Contributer = () => {
  // State to store contributors data
  const [contributorsData, setContributorsData] = useState([]);

  // Function to fetch data from the Google Sheets API
  const fetchContributorsData = async () => {
    try {
      // Replace 'YOUR_SPREADSHEET_ID' with the actual ID from your Google Sheets URL
      const spreadsheetId = '1ZxYc3LiNIMfaxtHetSWDRpXJ5MwCE54LG4bQU-QK53c';
      // Replace 'Sheet1' with the name of your sheet
      const sheetName = 'Sheet1';
      // Replace 'YOUR_API_KEY' with your actual Google Sheets API key
      const apiKey = 'AIzaSyCtFgduygdYtZ2SoLFOnGOz608XX1r8fKI';
      // Specify the range A2:C100
      const range = 'A2:C100';
      // Google Sheets API endpoint
      const apiUrl = `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/${sheetName}!${range}?key=${apiKey}`;

      // Make a GET request to the Google Sheets API
      const response = await axios.get(apiUrl);

      // Extract the values from the response
      const values = response.data.values;

      // Map values to contributorsData format
      const contributors = values.map((row, index) => ({
        id: index + 1,
        name: row[0], // Assuming the first column is the name
        linkedin: row[1], // Assuming the second column is the LinkedIn URL
        github: row[2], // Assuming the third column is the GitHub URL
      }));

      // Set the contributors data in the state
      setContributorsData(contributors);
    } catch (error) {
      console.error('Error fetching contributors data:', error);
    }
  };

  // Fetch contributors data on component mount
  useEffect(() => {
    fetchContributorsData();
  }, []); // Empty dependency array means it will run only once on mount

  return (
    <div>
      <Navbar />
      <div className="contributor-page">
        <h1 className="contributor-heading">Top Contributors</h1>
        <table className="contributors-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>LinkedIn</th>
              <th>GitHub</th>
            </tr>
          </thead>
          <tbody>
            {contributorsData.map((contributor) => (
              <tr key={contributor.id}>
                <td>{contributor.name}</td>
                <td>
                  <a href={contributor.linkedin} target="_blank" rel="noopener noreferrer">
                    <img src="../../../public/assets/linkedin.svg" alt="LinkedIn" width="auto" height="35" />
                  </a>
                </td>
                <td>
                  <a href={contributor.github} target="_blank" rel="noopener noreferrer">
                    <img src="../../../public/assets/github.svg" alt="GitHub" width="auto" height="40" />
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="thank-you-note">
          <p>
            Dear Contributer, Thank you so much.🙂
          </p>
          <p>
            Your contribution is the Big help for all IIPS students. 👍
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contributer;
