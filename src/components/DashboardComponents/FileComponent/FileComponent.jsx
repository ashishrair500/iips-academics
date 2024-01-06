import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector, shallowEqual } from 'react-redux';

import './FileComponent.css';

const FileComponent = () => {
  const { fileId } = useParams();
  const [fileData, setFileData] = useState('');
  const navigate = useNavigate();

  const { currentFile, isAuthenticated } = useSelector(
    (state) => ({
      currentFile: state.filefolders.userFiles.find((file) => file.docId === fileId),
      isAuthenticated: state.auth.isAuthenticated,
    }),
    shallowEqual
  );

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/');
    }
  }, [isAuthenticated, navigate]);

  useEffect(() => {
    if (currentFile) {
      setFileData(currentFile.data.data);
    }
  }, [currentFile, currentFile?.data.data]);

  const downloadFile = () => {
    const link = document.createElement('a');
    link.href = currentFile?.data.url;
    link.target = '_blank';
    link.rel = 'noopener noreferrer'; // Added for security reasons
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  

  useEffect(() => {
    // Trigger the downloadFile function when the component mounts
    downloadFile();
  }, []); // Empty dependency array ensures it runs only once when the component mounts

  if (isAuthenticated) {
    return (
       
              <div className='center-div'>
               
               <h4 >File Opened in New Tab</h4>
              <h4  className='phone-msg'>File is Downloaded</h4>
             
                <button className='glow-on-hover bottom-space' onClick={() => navigate("/dashboard")}>
                  Go Back ! 😎
                </button>
                
            
            </div>
          
        
      
    );
  }

  return (
    <div>
      <h1>Login First</h1>
    </div>
  );
};

export default FileComponent;
